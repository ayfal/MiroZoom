// webrtc.js
const peerConnectionConfig = {
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
};

let localStream;
let peerConnection;
let isCaller = false;

const startScreenShare = async () => {
    try {
        localStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        document.getElementById('localVideo').srcObject = localStream;
        createPeerConnection();
    } catch (error) {
        console.error('Error accessing display media.', error);
    }
};

const createPeerConnection = () => {
    peerConnection = new RTCPeerConnection(peerConnectionConfig);
    
    localStream.getTracks().forEach(track => {
        peerConnection.addTrack(track, localStream);
    });

    peerConnection.onicecandidate = event => {
        if (event.candidate) {
            // Send the candidate to the remote peer
            sendMessage('candidate', event.candidate);
        }
    };

    peerConnection.ontrack = event => {
        const remoteVideo = document.getElementById('remoteVideo');
        remoteVideo.srcObject = event.streams[0];
    };
};

const createOffer = async () => {
    isCaller = true;
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    sendMessage('offer', offer);
};

const handleAnswer = async (answer) => {
    await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
};

const handleCandidate = async (candidate) => {
    await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
};

const sendMessage = (type, data) => {
    // Implement your signaling mechanism here (e.g., WebSocket, Firebase, etc.)
};

document.getElementById('startButton').onclick = startScreenShare;
document.getElementById('callButton').onclick = createOffer;