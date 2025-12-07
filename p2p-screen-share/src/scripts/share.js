const startScreenShare = async () => {
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
            video: true,
            audio: true
        });
        const peerConnection = new RTCPeerConnection();

        stream.getTracks().forEach(track => {
            peerConnection.addTrack(track, stream);
        });

        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);

        // Send the offer to the viewer (implement signaling here)
        // Example: signalingServer.send({ offer });

        peerConnection.onicecandidate = event => {
            if (event.candidate) {
                // Send the candidate to the viewer (implement signaling here)
                // Example: signalingServer.send({ candidate: event.candidate });
            }
        };

        // Handle incoming answer from viewer (implement signaling here)
        // Example: peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
    } catch (error) {
        console.error("Error starting screen share:", error);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("startShare");
    if (!btn) {
        console.error("startShare button not found in DOM");
        return;
    }
    btn.addEventListener("click", startScreenShare);
});