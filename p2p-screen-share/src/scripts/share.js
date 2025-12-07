const VIEWER_ID = 'viewer-1';
let pc;

const startScreenShare = async () => {
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
        
        pc = new RTCPeerConnection({
            iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
        });
        
        stream.getTracks().forEach(track => pc.addTrack(track, stream));
        
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        
        // Wait for ICE gathering
        await new Promise(resolve => {
            if (pc.iceGatheringState === 'complete') resolve();
            else pc.onicegatheringstatechange = () => {
                if (pc.iceGatheringState === 'complete') resolve();
            };
        });
        
        const offerCode = btoa(JSON.stringify(pc.localDescription));
        document.getElementById('offerCode').value = offerCode;
        document.getElementById('offerSection').style.display = 'block';
        
        // Listen for answer
        document.getElementById('submitAnswer').onclick = async () => {
            const answerCode = document.getElementById('answerInput').value.trim();
            const answer = JSON.parse(atob(answerCode));
            await pc.setRemoteDescription(answer);
        };
        
    } catch (err) {
        console.error('Error:', err);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('startShare');
    if (!btn) {
        console.error('startShare button not found in DOM');
        return;
    }
    btn.addEventListener('click', startScreenShare);
});