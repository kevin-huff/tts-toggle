# TTS Toggle Dashboard

A real-time Text-to-Speech (TTS) toggle system for streamers, providing an easy way to control TTS notifications during live streams.

## Features

- Real-time TTS status toggling
- Unique key system for multiple user support
- Dark mode interface with light mode toggle
- Separate display page for OBS integration
- Dedicated toggle page for easy access
- Click-to-copy URL functionality
- Random key generation
- Responsive design for various devices
- Socket.IO for real-time updates

## Prerequisites

- Node.js (v12.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/tts-toggle-dashboard.git
   cd tts-toggle-dashboard
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   node app.js
   ```

4. The application will be running at `http://localhost:3000`

## Usage

### Main Dashboard

1. Open `http://localhost:3000` in your web browser.
2. Set your unique key or generate a random one.
3. Use the toggle button to control your TTS status.
4. Copy the Display URL and Toggle URL for use in OBS and for easy access.

### Display Page

1. Add a Browser Source in OBS.
2. Set the URL to the Display URL provided in the dashboard.
3. The display will show your current TTS status with a microphone icon.

### Toggle Page

1. Open the Toggle URL in a separate window or on a mobile device.
2. Use this page for quick access to toggle your TTS status.

## Customization

- Styling: Modify the CSS in the HTML files to change colors, sizes, or layouts.

## File Structure

- `app.js`: Main server file
- `public/index.html`: Main dashboard
- `public/display.html`: Display page for OBS
- `public/toggle.html`: Dedicated toggle page

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the The Unlicense - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Socket.IO for real-time communication
- The streaming community for inspiration

## Support

If you encounter any problems or have any questions, please open an issue in the GitHub repository.