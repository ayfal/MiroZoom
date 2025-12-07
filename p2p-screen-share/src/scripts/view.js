const videoElement = document.getElementById('sharedScreen');
let pc;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('connectBtn').addEventListener('click', async () => {
        const offerCode = document.getElementById('offerInput').value.trim();
        const offer = JSON.parse(atob(offerCode));
        
        pc = new RTCPeerConnection({
            iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
        });
        
        pc.ontrack = event => {
            videoElement.srcObject = event.streams[0];
            videoElement.play().catch(console.warn);
        };
        
        await pc.setRemoteDescription(offer);
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        
        // Wait for ICE gathering
        await new Promise(resolve => {
            if (pc.iceGatheringState === 'complete') resolve();
            else pc.onicegatheringstatechange = () => {
                if (pc.iceGatheringState === 'complete') resolve();
            };
        });
        
        const answerCode = btoa(JSON.stringify(pc.localDescription));
        document.getElementById('answerCode').value = answerCode;
        document.getElementById('answerSection').style.display = 'block';
    });
});