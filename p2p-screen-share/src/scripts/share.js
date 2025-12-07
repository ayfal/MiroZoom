const VIEWER_ID = 'viewer-1';
let pc;

const ROOM = 'dkj5ks3sm8a'; // keep this secret and match viewer

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('startShare');
  const localPreview = document.getElementById('sharedVideo');
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

      const tr = window.Trystero || window.trystero;
      if (!tr) {
        console.error('Trystero library not loaded');
        return;
      }
      const { joinRoom } = tr.torrent;
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