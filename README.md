# Login Car Insurance

### Description: 
This web application consists of a login screen which takes a username and password. Once authorised, it navigates the user to another page which displays policy details. The app uses a Policy API that provides two API endpoints: Login and Policy details.
Login endpoint validates a username and password and returns an "access_token" that is saved in localStorage and subsequently used for getting policy object when calling Policy details endpoint. This API endpoint is accessed by providing an additional Authorization request header using the bearer authentication scheme with "access_token".

### Technologies: 
React, React Hooks, React Router, Redux state management, JavaScript, APIs, Async promises and fetch, localStorage, TDD Testing(Jest, Enzyme), SCSS and CSS modules, CSS Animation, Webpack, Babel, Eslint, Stylelint.

### Demo:
1. Login page: sign in button activates when both inputs receive information, a toggle with an eye icon in the password input allows the user to see the password or hide it.

![login-car-insurance-01](https://user-images.githubusercontent.com/66952678/105356527-6da67600-5beb-11eb-8a37-ff7933d8e50f.gif)

2. Submitting cridentials and viewing the policy

![login-car-insurance-2](https://user-images.githubusercontent.com/66952678/105356321-28824400-5beb-11eb-93df-5188a198af3c.gif)

### Installation, viewing and testing
1. Clone the repo in your code editor 
`git clone https://github.com/Katia-Toboleva/login-car-insurance.git`
2. Install NPM packages `npm install`
3. View the project in the browser: `npm run start`
4. Testing: `npm run test`
