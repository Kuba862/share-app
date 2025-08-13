# Social Media Share Link Generator

A simple React application that generates sharing links for Twitter and Facebook. This tool helps you create properly formatted URLs for sharing content on social media platforms.

## Features

- Generate sharing links for Twitter and Facebook
- Real-time character counter (280 characters limit)
- Modern and responsive UI
- Automatic URL extraction for Facebook sharing
- Support for both text and URL sharing

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:
```bash
cd x-share-app
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Usage

1. Enter your message in the text area
   - For Twitter: Enter any text (up to 280 characters)
   - For Facebook: You can include both text and a URL. The first URL found in the text will be used as the shared URL, and the remaining text will be used as the quote

2. Click on either:
   - "Create Twitter link" to generate a Twitter sharing link
   - "Create Facebook link" to generate a Facebook sharing link

3. The generated links will appear below the buttons

## Technologies Used

- React
- Vite
- CSS3

## Project Structure

```
x-share-app/
├── src/
│   ├── components/
│   │   ├── Area.jsx      # Text input component
│   │   ├── Area.css      # Styles for Area component
│   │   ├── Box.jsx       # Main container component
│   │   ├── Box.css       # Styles for Box component
│   │   └── Link.jsx      # Link display component
│   ├── App.jsx           # Root component
│   └── main.jsx         # Entry point
├── public/
│   └── vite.svg
├── index.html
├── package.json
└── vite.config.js
```

## Development

The application uses a component-based architecture:

- `Box.jsx`: Main container component that manages the state and generates sharing links
- `Area.jsx`: Handles text input with character counting
- `Link.jsx`: Displays generated links

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
