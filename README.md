# PeerSharing

Minimal, self-hosted one-click screen-share via WebRTC — no server required for signaling (SDP blobs are copied/shared).  
Designed with low-friction, high-visibility UI for visually impaired viewers: large controls, high-contrast styles, keyboard zoom and simple workflows.

Built by GitHub Copilot (using GPT-5 mini).

## Accessibility focus
- Intended to help visually impaired viewers: large, high-contrast buttons and text; ARIA roles/labels where relevant.
- Viewer can magnify the incoming video using keyboard (+ / -), wheel, double-click, or pinch, and drag the magnified view for easy inspection.
- Minimal steps and clear feedback to reduce cognitive load and simplify permission flows.

## Highlights
- Share your screen + mic to a remote viewer via compressed SDP links.
- Viewer can share mic back with one click.
- Session indicator on host shows when the viewer is actually connected; indicator blanks on disconnect.
- Clean fallbacks for clipboard copy and manual copy modal.
- Small, single-file frontend: `index.html` (host/sender) and `viewer.html` (receiver).

## Quick start (Windows)
1. Open a terminal in the project folder:
   - PowerShell:
     - If you have Python: `python -m http.server 8000`
     - Or with Node: `npx http-server -p 8000`
2. In your browser go to: `http://localhost:8000/index.html` (sharer) and open the shared viewer link in the viewer's browser.
   - Note: modern browsers require `getDisplayMedia` permissions; using `localhost` avoids HTTPS requirement in most cases.

## How to use
- Host (Sender)
  1. Click "Enable screen & microphone" (grant screen + mic permissions).
  2. Click "Generate Offer & Viewer Link" — link is copied to clipboard (fallback shown if blocked).
  3. Share the link with your viewer.
  4. Paste the compressed answer you receive from the viewer into the host's answer box and click "Set Answer & Start".
  5. Session indicator shows when the viewer is connected and blanks on disconnect.

- Viewer (Receiver)
  1. Open the URL shared by host (the link contains the compressed offer).
  2. Click "Share mic & Copy answer" — this requests mic and copies the compressed answer in one flow.
     - If clipboard copy fails due to browser policy, a manual copy modal appears with the answer string to paste back to the host.
  3. Send the copied answer back to the host.
  4. Once the session starts you can zoom/pan the remote video for magnification. If the host ends the session, viewer view blanks.

## Troubleshooting
- Clipboard copy can be blocked if a permission dialog interrupts the user gesture. If copying fails, use the manual textarea to select/Ctrl+C.
- If screen capture fails, ensure your browser supports getDisplayMedia and you're using `localhost` or HTTPS.
- If audio isn't heard, confirm mic permissions and that tracks were included in the answer.

## Tested on
- Chrome / Edge (desktop) — latest stable versions recommended.

## Files
- `index.html` — Sender UI / offer generation / session indicator.
- `viewer.html` — Viewer UI / answer generation / zoom & pan.
- External libs: lz-string (compression).

## License
Use freely — no warranties. Inspect code before trusting for production.

Enjoy PeerSharing — a tiny, accessible-focused screen-sharing flow designed for low-friction use by visually impaired viewers.