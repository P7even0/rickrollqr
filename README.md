# RickRoll QR Generator

A highly professional web application for generating trustworthy QR codes that definitely do not lead to Rick Astley.

Built with React, TypeScript, and Vite.

## Features

- Generates QR codes from user input
- If the submitted URL is already one of the known Rickroll variants, it uses that exact link
- Otherwise, it swaps the input for a random Rickroll variant from an internal list
- Animated Rick Astley decorations that grow when the QR code is generated
- No backend required

## Tech Stack

- React
- TypeScript
- Vite
- QuickChart QR API

## How It Works

<img width="2864" height="1484" alt="image" src="https://github.com/user-attachments/assets/0560ecc3-ded4-41e8-ae0b-c6a6658b58e5" />

When the user submits a URL:

- if the URL matches one of the Rickroll links stored in the app, the QR code is generated for that exact link
- otherwise, the app randomly picks a Rickroll variant from the internal list and generates a QR code for that instead

The QR code image is generated using the QuickChart QR endpoint.

<img width="2828" height="1452" alt="image" src="https://github.com/user-attachments/assets/18650291-730c-4416-a5a5-381f6ef6af1b" />



## Run Locally

Clone the repository:

    git clone https://github.com/your-username/rickroll-qr-generator.git
    cd rickroll-qr-generator

Install dependencies:

    npm install

Start the development server:

    npm run dev

## Build for Production

    npm run build

## Project Structure

    src/
      assets/
        dance1.gif
        dance2.gif
        headgif.gif
        descarga.jpeg
      App.tsx
      App.css
      index.css

## Notes

This project was made as a small joke project and front-end experiment.

Before publishing publicly, make sure that:

- you are not committing any secrets or private information
- the images and GIFs you use are okay to upload publicly
- the repository is cleaned up enough to look intentional

## Disclaimer

This project is meant as a joke. Use responsibly.

## License

MIT
