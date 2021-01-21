# Login Car Insurance

## Description: 
This web application consists of a login screen which takes a username and password. Once authorised, it navigates the user to another page which displays policy details. The app uses a Policy API that provides two API endpoints: Login and Policy details.
</br>
</br>
Login endpoint validates a username and password and returns an "access_token" that is saved in localStorage and subsequently used for getting policy object when calling Policy details endpoint. This API endpoint is accessed by providing an additional Authorization request header using the bearer authentication scheme with "access_token".

## Technologies: 
React, React Hooks, React Router, Redux state management, JavaScript, APIs, Async promises and fetch, localStorage, TDD Testing(Jest, Enzyme), SCSS and CSS modules, CSS Animation, Webpack, Babel, Eslint, Stylelint.

## Demo:
1. Login page: sign in button activates when both inputs receive information, a toggle with an eye icon in the password input allows the user to see the password or hide it.

![login-car-insurance-01](https://user-images.githubusercontent.com/66952678/105356527-6da67600-5beb-11eb-8a37-ff7933d8e50f.gif)

2. Submitting cridentials and viewing the policy

![login-car-insurance-2](https://user-images.githubusercontent.com/66952678/105356321-28824400-5beb-11eb-93df-5188a198af3c.gif)

## Installation, viewing and testing
1. Clone the repo in your code editor 
`git clone https://github.com/Katia-Toboleva/login-car-insurance.git`
2. Install NPM packages `npm install`
3. View the project in the browser: `npm run start`
4. Testing: `npm run test`

## Notes, decisions, observations

### Structure
As the app is built with React and the state is managed with Redux, I have split the logic between **Components** and **Containers**.
</br>
</br>
The first category contains components with their contents and styles rendered on the page (e.g Text, Button, Input, Login components) and the second category contains components that communicate with Redux store (e.g. LoginContainer and Policy container).</br></br>
**State** contains logic related to Redux store.

### API calls and localStorage
API enpoints are called with fetch() function and POST and GET methods. As soon as the Login enpoint replies with success and "access_token", the token is saved in localStorage of the app. The "access_token" is accessed from localStorage when PolicyContainer mounts and fetchPolicyApi() is called.</br></br> 
Alternatively, it would be possible to store the "access_token" in the state and pass it to PolicyContainer as props, however, in that case, if the user refreshed the page, they would be logged out. By saving the token in the localStorage, the user stays logged in.</br></br>
**Please note**: There is a small security bug here: right now the "access_token" can be seen in localStorage in the console of the browser, so some additional security, e.g. by encrypting would need to be implemented.

### Routes
React Router has been chosen to manage redirecting between LoginContainer and PolicyContainer as it provides easy and clean solution for routing. The stucture and logic for the routes can be found in Page component. Routes and paths in this App:</br></br>
`http://localhost:8080/` or `http://localhost:8080` or `http://localhost:8080/login`: **LoginContainer**</br></br>
`http://localhost:8080/policy`: PolicyContainer</br></br>
**Please note**: as Logout has not been required for this App and the "access_token" is saved in localStorage, once the User is logged in, when the page is refreshed, the user stays on `/policy` route. In case you need to view Login page again, please go to `http://localhost:8080/login` (or any of the routes mentioned above for LoginContainer).

### Tests
TDD Testing has been implemented with **Jest** and **Enzyme**.</br></br>
Asynchronous code and Redux actions, reducers and constants have been tested with Jest and the tests can be found in LoginContainer -> State and PolicyContainer -> State folders.</br></br>
Jest tests have also been applied to the utilities, e.g. `createReducer()` function.</br></br>
React components have been tested both with Jest and Enzyme to ensure they're also rendered correctly.

### Styles
For the best management of the app, the general styles such as colours, have been separated in a folder Style where variables are assigned to each colour.

### Additional implementations
In addition to current code of the app, I believe the following implementations would be beneficial:</br></br>
- [ ] Logout Button: the component would clean up information about the policy from the localStorage and redirect the users, e.g. back to Login page.
- [ ] Media queries: implement logic for mobile and tablet viewports with media queries. 
- [ ] Url: if the API provided URL for the photos of the insured car, it would be possible to render the images in the policy too.

### Time
Approximate time for implementation and tests: 4 days.

