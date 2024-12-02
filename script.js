class LyricVoyager {
    constructor() {
        // DOM Element References
        this.artistInput = document.getElementById('artist-input');
        this.songInput = document.getElementById('song-input');
        this.searchBtn = document.getElementById('search-btn');
        this.lyricsContent = document.getElementById('lyrics-content');
        this.songInfo = document.getElementById('current-song-info');

        // Playback UI Elements
        this.playPauseBtn = document.getElementById('play-pause-btn');
        this.progressBar = document.getElementById('progress');
        this.currentTimeEl = document.getElementById('current-time');
        this.totalTimeEl = document.getElementById('total-time');

        // Bind event listeners
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.searchBtn.addEventListener('click', () => this.fetchLyrics());
        
        // Allow enter key to trigger search
        this.songInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.fetchLyrics();
        });
        this.artistInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.fetchLyrics();
        });
    }

    async fetchLyrics() {
        const artist = this.artistInput.value.trim();
        const song = this.songInput.value.trim();

        // Validate inputs
        if (!artist || !song) {
            this.displayError('Please enter both artist and song name');
            return;
        }

        try {
            // Show loading state
            this.lyricsContent.innerHTML = '<p class="placeholder-text">Loading lyrics...</p>';
            
            // Fetch lyrics from API
            const response = await fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(song)}`);
            
            if (!response.ok) {
                throw new Error('Lyrics not found');
            }

            const data = await response.json();

            // Display lyrics
            this.displayLyrics(artist, song, data.lyrics);
        } catch (error) {
            this.displayError('Could not find lyrics. Please check the artist and song name.');
            console.error('Lyrics fetch error:', error);
        }
    }

    displayLyrics(artist, song, lyrics) {
        // Update song info
        this.songInfo.textContent = `${artist} - ${song}`;

        // Format and display lyrics
        const formattedLyrics = lyrics
            .split('\n')
            .map(line => `<p>${line}</p>`)
            .join('');

        this.lyricsContent.innerHTML = formattedLyrics;

        // Simulate playback progress (for UI demonstration)
        this.simulatePlayback();
    }

    displayError(message) {
        this.lyricsContent.innerHTML = `<p class="error-message">${message}</p>`;
        this.songInfo.textContent = 'No song selected';
    }

    simulatePlayback() {
        // Mock playback progress for UI interaction
        let progress = 0;
        const duration = 180; // 3 minutes mock duration

        const updateProgress = () => {
            progress++;
            const progressPercent = (progress / duration) * 100;
            this.progressBar.style.width = `${progressPercent}%`;

            // Update time displays
            this.currentTimeEl.textContent = this.formatTime(progress);
            this.totalTimeEl.textContent = this.formatTime(duration);
        };

        // Clear any existing intervals
        if (this.playbackInterval) {
            clearInterval(this.playbackInterval);
        }

        // Start new progress simulation
        this.playbackInterval = setInterval(updateProgress, 1000);
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new LyricVoyager();
});
