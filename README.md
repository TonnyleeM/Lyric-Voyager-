# 🎵 Lyric Voyager

## Overview
Lyric Voyager is an interactive web application that allows users to instantly retrieve song lyrics from their favorite artists. Designed with a sleek, VLC-inspired interface, the app provides a user-friendly experience for music enthusiasts looking to explore song lyrics.

## Features
- 🔍 **Quick Lyrics Search**: Find lyrics by entering artist and song name
- 🎨 **VLC-Inspired Design**: Modern, dark-themed user interface
- 🎵 **Real-Time Lyric Retrieval**: Instant lyrics fetching using Lyrics.ovh API
- 📱 **Responsive Interface**: Works across different device sizes
- 🎭 **Playback Simulation**: Interactive progress bar and time display

## Technology Stack
- HTML5
- CSS3
- Vanilla JavaScript
- Lyrics.ovh API

## How to Use
1. Enter the artist name in the first input field
2. Enter the song title in the second input field
3. Click "Find Lyrics" or press Enter
4. View the lyrics instantly!

### Example
- Artist: Coldplay
- Song: Viva La Vida

## Installation

### Local Setup
1. Clone the repository
```bash
git clone https://github.com/TonnyleeM/lyric-voyager.git
```

2. Open `index.html` in your web browser

### Dependencies
No additional dependencies required. The app uses vanilla JavaScript and relies on the Lyrics.ovh public API.

## API Usage
- **API**: Lyrics.ovh
- **Endpoint**: `https://api.lyrics.ovh/v1/{artist}/{song}`
- **Method**: GET

## Error Handling
- Validates user inputs
- Displays user-friendly error messages
- Handles API request failures

## Deployment
The application can be deployed on standard web servers. Ensure:
- All three files (`index.html`, `styles.css`, `script.js`) are in the same directory
- Web server supports static file hosting
- **Live Deployment:** You can now access the deployed application at https://www.realtonny.tech.

## Limitations
- Depends on Lyrics.ovh API availability
- May not have lyrics for all songs
- Requires internet connection

## Future Improvements
- Add song previews
- Implement caching
- Expand error handling
- Add more interactive features

## License
 MIT

## Credits
- Lyrics data provided by Lyrics.ovh API
- Design inspired by VLC Media Player

---

**Happy Lyric Hunting! 🎤🎶**
