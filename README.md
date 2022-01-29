# UsersApp

The goal of this app is to satisfy the following requirements:

- Single page angular application
- Accepts username, address, contact info, age, and employment history in a form
- Stores user information in Firestore
- A table displays all users
- On clicking a row, user information is displayed in detail in a popup window
- A search bar can be used to search existing users by name/email in the table

## Development server

- Run `ng serve` or `npm run start` to start a dev server on port 4200. Please note that you will need the environment variable to connect to Firestore (see `.environment.example.ts` for a sample). Please contact apnordin@gmail.com for this information.

## Considerations

There are three main things that I would have liked to include in this application that I was not able to incorporate due to timing considerations:

1. Optimize UI for phone and tablet
2. General styling/UI improvements. This app is exceedingly straightforward, intended to show a grasp on the Angular fundamentals in a short timespan
3. Deployment using Firebase Hosting
