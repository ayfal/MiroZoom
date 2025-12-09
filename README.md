# MiroZoom — Mirotalk Zoom/Pan Bookmarklet

Small utility to isolate a [Mirotalk](https://github.com/miroslavpejic85/mirotalk) screen-share video and enable fullscreen zoom + pan using a bookmarklet.

## What it does
- Finds the shared screen video element on a Mirotalk page (video elements whose id ends with `___screen`).
- Removes other UI, places the video in a fullscreen container, and provides:
  - Mouse wheel zoom (centered at cursor)
  - Click-and-drag pan
  - Double‑click to reset
  - Esc to restore the page (or reload)
  - Touch pinch/drag support
- Requests fullscreen when activated (where supported).

## Files
- index.html — page containing the bookmarklet link. Open this file in a browser and drag the link to your bookmarks toolbar.

## Usage
1. Join the Mirotalk room in your browser and wait until the other participant starts screen sharing.
2. Click the bookmark you added from index.html.
3. Controls:
   - Mouse wheel: zoom
   - Click + drag: pan
   - Double-click: reset zoom/position
   - Esc: restore original page (or reload)
   - Touch: pinch to zoom, drag to pan

If the bookmarklet reports "Screen video not found", wait until the screen-share video element appears and try again.
