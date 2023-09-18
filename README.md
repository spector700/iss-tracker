# ISS Tracker

Welcome to the ISS Tracker project! This application allows you to track the International Space Station (ISS) in real-time on a map while also displaying the Astronomy Picture of the Day.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)

## About the Project

The ISS Tracker is a web-based application that combines two exciting features:

1. **Astronomy Picture of the Day**: Utilizing NASA's Astronomy Picture of the Day API, our project displays a stunning and educational astronomy picture. To reduce API calls and improve performance, the picture is cached and updated hourly.

2. **Real-Time ISS Tracking**: We use the Open Notify API to fetch real-time data about the ISS's location and display it on a Leaflet map (which is using OpenStreetMaps). The ISS's position is updated every 3 seconds, providing an accurate representation of its movement.

## Features

- Real-time tracking of the ISS on a map.
- Daily changing astronomy pictures from NASA's API.
- Caching to reduce API calls and improve performance.
- User-friendly interface for an engaging experience.

## Technologies Used

- HTML, CSS, JavaScript
- Leaflet.js for map visualization
- Nix for the development environment

## Getting Started

Follow these steps to get the ISS Tracker up and running on your local machine:

1. Clone this repository: `git clone https://github.com/your-username/ISS-Tracker.git`
2. Navigate to the project directory: `cd ISS-Tracker`
3. Open `index.html` in your web browser.

## Usage

1. Upon opening the application, you will see a captivating astronomy picture from NASA's API.
2. The map displays the real-time location of the ISS.
3. Explore and enjoy tracking the ISS as it orbits the Earth.

