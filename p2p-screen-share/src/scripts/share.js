const VIEWER_ID = 'viewer-1';
let pc;

const ROOM = 'dkj5ks3sm8a'; // keep this secret and match viewer
const localPreview = document.getElementById('sharedVideo'); // optional preview

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('startShare');
  if (!btn) {
    console.error('startShare button not found in DOM');
    return;
  }

  btn.addEventListener('click', async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
      if (localPreview) {
        localPreview.srcObject = stream;
        localPreview.play().catch(console.warn);
      }

      const { joinRoom } = Trystero.torrent;
      const room = joinRoom({ appId: 'p2p-screenshare' }, ROOM);

      room.onPeerJoin(peerId => {
        const call = room.addStream(stream, peerId);
        call.on('error', console.error);
      });
    } catch (err) {
      console.error(err);
    }
  });
});