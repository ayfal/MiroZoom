const ROOM = 'dkj5ks3sm8a'; // same as share.js

document.addEventListener('DOMContentLoaded', () => {
  const videoElement = document.getElementById('sharedScreen');
  if (!videoElement) {
    console.error('sharedScreen video element not found');
    return;
  }

  const tr = window.Trystero || window.trystero;
  if (!tr) {
    console.error('Trystero library not loaded');
    return;
  }

  const { joinRoom } = tr.torrent;
  const room = joinRoom({ appId: 'p2p-screenshare' }, ROOM);

  room.onStream((stream) => {
    videoElement.srcObject = stream;
    videoElement.play().catch(console.warn);
  });
});