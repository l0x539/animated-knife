# React 3D Animated Model Component (Knife)

This React component allows you to create an animated 3D model that responds to scroll triggers within a webpage. The animation can be controlled through various constants defined in the `src/utils/constants.js` file. This README will provide an overview of these variables and their functionality.

## Installation

Before using this component, ensure that you have React and React Three Fiber set up in your project.

## Configuration

In order to integrate and customize the animation properly, you can use the following variables in the `src/utils/constants.js` file:

### TESTING

- Type: Boolean
- Description: This variable enables or disables the scroll trigger markers on the page for testing and debugging purposes. Set it to `true` to show markers, and `false` to hide them.

### CONTROLS

- Type: Boolean
- Description: Use this variable to enable or disable manual controls for the model and scroll progress. When set to `true`, you can control the model's position and scale.

### ORBIT

- Type: Boolean
- Description: This variable enables or disables orbit controls for the 3D canvas. When set to `true`, users can interact with the 3D model using their mouse or touch input.

### TRIGGER

- Type: String (Query Selector)
- Description: Specify the query selector string for the element that triggers the start of the animation. This element will be the reference point for initiating the animation.

### END_TRIGGER

- Type: String (Query Selector)
- Description: Set the query selector string for the element that triggers the end of the animation. The animation will conclude when this element enters the viewport.

### START

- Type: String
- Description: Define the position of the trigger start element concerning the viewport. Values like 'top top', 'top bottom', etc., control when the animation begins in relation to the trigger element's position.

### END

- Type: String
- Description: Specify the position of the end trigger element concerning the viewport. The animation will finish when the end trigger element reaches the specified position, e.g., 'top top', 'top bottom', etc.

## Usage

To use this component, inject it into a div section on your webpage. Make sure to configure the constants in `src/utils/constants.js` to achieve the desired behavior for your 3D model animation.

## Example

Here's an example of how to use the constants in your `src/utils/constants.js`:

```javascript
// src/utils/constants.js
export const TESTING = false;
export const CONTROLS = true;
export const ORBIT = true;
export const TRIGGER = '.start-trigger';
export const END_TRIGGER = '.end-trigger';
export const START = 'top top';
export const END = 'top bottom';
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
