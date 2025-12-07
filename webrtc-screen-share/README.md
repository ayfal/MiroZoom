# WebRTC Screen Share Application

This project is a simple WebRTC application that allows one user to share their screen with a partner. It is designed with accessibility in mind, particularly for users with poor eyesight. The application includes a manual handshake process, a link for the offer, and a large button for copying the answer to the clipboard, along with a persistent indication of success.

## Project Structure

```
webrtc-screen-share
├── index.html          # Main entry point of the application
├── css
│   └── styles.css     # Styles for the application
├── js
│   ├── webrtc.js      # WebRTC functionality
│   └── clipboard.js    # Clipboard management
└── README.md          # Project documentation
```

## Features

- **Screen Sharing**: Users can share their screen with a partner.
- **Manual Handshake**: Users can manually exchange connection offers.
- **Clipboard Functionality**: A large button allows users to copy the answer to the clipboard with visual feedback indicating success.
- **Responsive Design**: The layout maximizes screen space for mirroring while allowing the partner to zoom in.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/webrtc-screen-share.git
   cd webrtc-screen-share
   ```

2. **Open `index.html`**:
   Open the `index.html` file in your web browser to start the application.

3. **Hosting on GitHub Pages**:
   - Push your code to a GitHub repository.
   - Go to the repository settings.
   - Under the "Pages" section, select the branch you want to use (usually `main` or `gh-pages`) and save.
   - Your application will be available at `https://yourusername.github.io/webrtc-screen-share`.

## Usage Instructions

1. **Start Screen Sharing**: Click the button to start sharing your screen.
2. **Generate Offer**: The application will generate an offer link that you can share with your partner.
3. **Copy Answer**: Use the large button to copy the answer to the clipboard. A success message will indicate that the action was successful.
4. **Join the Session**: Your partner can paste the answer to join the screen sharing session.

## Contributing

Feel free to submit issues or pull requests to improve the application. Your contributions are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for details.