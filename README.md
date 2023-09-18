# ISS Tracker

Welcome to the ISS Tracker project! This application allows you to track the International Space Station (ISS) in real-time on a map while also displaying the Astronomy Picture of the Day.

[![ISS Tracker Demo](https://img.youtube.com/vi/JAgNTmCid-I/0.jpg)](https://www.youtube.com/watch?v=JAgNTmCid-I)


## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)


## About the Project

The ISS Tracker is a web-based application that combines two exciting features:

1. **Astronomy Picture of the Day**: Utilizing NASA's [Astronomy Picture of the Day API](https://api.nasa.gov/), to display a different astronomy picture each day. To reduce API calls and improve performance, the picture is cached and updated hourly.

2. **Real-Time ISS Tracking**: using the [Open Notify API](http://open-notify.org/Open-Notify-API/ISS-Location-Now/) to fetch real-time data about the ISS's location and display it on a [Leaflet map](https://leafletjs.com/) (which is using OpenStreetMaps). The ISS's position is updated every 3 seconds, providing an accurate representation of its movement.

## Features

- Real-time tracking of the ISS on a map.
- Daily changing astronomy pictures from NASA's API.
- Caching to reduce API calls and improve performance.
- User-friendly interface for an engaging experience.

## Technologies Used

- HTML, CSS, JavaScript
- Leaflet.js for map visualization
- Nix and direnv for the development environment

## Getting Started

Follow these steps to get the ISS Tracker up and running on your local machine:

1. Clone this repository: `git clone https://github.com/your-username/ISS-Tracker.git`
2. Navigate to the project directory: `cd ISS-Tracker`
3. If using nix then run ```nix develop``` and that will install all dapendencies.


#### without nix
install pip and run ```pip install flask requests request-cahce```.

4. Run the application using Python:

   ```bash
   python app.py
   ```
   
This will start the ISS Tracker application locally. You can access it by opening your web browser and navigating to http://localhost:PORT, where PORT is the port number specified in app.py.
