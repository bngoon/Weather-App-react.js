# Weather App Readme

This is a simple Weather App built using React.js. It allows users to search for weather information by entering the name of a city. The application fetches weather data from the OpenWeatherMap API and displays it to the user.

## Features

- **Search by City**: Users can enter the name of a city to get its current weather information.
- **Dynamic Background**: The background of the application changes dynamically based on the city searched, using images from Unsplash API.
- **Responsive Design**: The application is designed to be responsive and works well on various screen sizes.

## Technologies Used

- **React**: The application is built using the React.js library for building user interfaces.
- **axios**: Axios is used for making HTTP requests to fetch weather data from the OpenWeatherMap API.
- **OpenWeatherMap API**: This API is used to retrieve weather information based on the city entered by the user.
- **Unsplash API**: Images for the background are fetched from Unsplash API based on the searched city.

## Getting Started

To run this application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Get an API key from OpenWeatherMap by signing up on their website.
5. Replace the placeholder `apiKey` variable in `App.js` with your actual API key.
6. Run the application using `npm start`.
7. Open your browser and navigate to `http://localhost:3000` to view the application.

## File Structure

- **App.js**: Contains the main React component for the application.
- **Weather.js**: Renders weather information received from the API.
- **App.css**: Stylesheet for the application.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## Credits

This application is created by Booker Ngoon.

## License

This project is licensed under the [MIT License](LICENSE).
