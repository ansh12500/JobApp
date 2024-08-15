# Job Listing and Bookmarking App

## Overview

This is a React Native application for Android that allows users to browse job listings, view detailed information about each job, and bookmark their favorite jobs for offline viewing. The app features a bottom navigation with two sections: "Jobs" and "Bookmarks". Jobs are fetched from a remote API with infinite scrolling, and all bookmarked jobs are stored locally.

## Features

- **Job Listing**: Browse job listings with infinite scroll.
- **Job Details**: View detailed information about a specific job.
- **Bookmarking**: Bookmark jobs for offline access.
- **Offline Viewing**: All bookmarked jobs are stored in a local database for offline viewing.
- **Responsive UI**: Clean and responsive user interface.

## Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/yourusername/job-listing-app.git
    cd job-listing-app
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

3. **Run the Application:**

    ```bash
    npx react-native run-android
    ```

    Ensure you have an Android emulator running or a physical device connected.

## API

The app fetches job listings from the following API:

- **Endpoint**: `https://testapi.getlokalapp.com/common/jobs?page=1`

## Project Structure


Here's the README.md content formatted as code:

markdown
Copy code
# Job Listing and Bookmarking App

## Overview

This is a React Native application for Android that allows users to browse job listings, view detailed information about each job, and bookmark their favorite jobs for offline viewing. The app features a bottom navigation with two sections: "Jobs" and "Bookmarks". Jobs are fetched from a remote API with infinite scrolling, and all bookmarked jobs are stored locally.

## Features

- **Job Listing**: Browse job listings with infinite scroll.
- **Job Details**: View detailed information about a specific job.
- **Bookmarking**: Bookmark jobs for offline access.
- **Offline Viewing**: All bookmarked jobs are stored in a local database for offline viewing.
- **Responsive UI**: Clean and responsive user interface.

## Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/yourusername/job-listing-app.git
    cd job-listing-app
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

3. **Run the Application:**

    ```bash
    npx react-native run-android
    ```

    Ensure you have an Android emulator running or a physical device connected.

## API

The app fetches job listings from the following API:

- **Endpoint**: `https://testapi.getlokalapp.com/common/jobs?page=1`

## Project Structure

JobApp/
├── src/
│ ├── components/
│ ├── pages/
│ ├── App.js
│ ├── AppNavigator.js
│ └── api/
├── android/
├── ios/
├── package.json
└── README.md


### Key Files:

- **`App.js`**: Main entry point of the app.
- **`AppNavigator.js`**: Handles navigation between different screens.
- **`components/`**: Contains reusable UI components like `JobCard`, `BookmarkButton`, etc.
- **`pages/`**: Contains screens for "Jobs", "Bookmarks", and "JobDetails".
- **`api/jobs.js`**: Contains functions to fetch job data from the API.

## Libraries Used

- **React Navigation**: For handling navigation between screens.
- **Axios**: For making API requests.
- **AsyncStorage or SQLite**: For storing bookmarked jobs locally.
- **React Native Paper / NativeBase**: For UI components (if used).

## How It Works

- **Jobs Screen**: Fetches job listings from the API using infinite scrolling. Displays each job in a card format showing the title, location, salary, and phone number. Users can click on a job card to see more details.
  
- **Job Details Screen**: Displays detailed information about the selected job, such as job description, requirements, etc.

- **Bookmarks Screen**: Shows a list of jobs that the user has bookmarked. These jobs are stored locally, allowing offline access.

## State Management

The application handles various states such as loading, error, and empty data. Appropriate messages or UI elements are displayed based on the current state.

## Future Enhancements

- **Search Functionality**: Implement a search feature to allow users to search for specific jobs.
- **Filter and Sort**: Add options to filter and sort job listings.
- **Push Notifications**: Notify users when new jobs are posted that match their preferences.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
