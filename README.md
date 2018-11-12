This project was created to make it easy for people to sign up for volunteer shifts to canvass in favour of marriage equality in Taiwan. It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installing: 
You should be on the version of Node that is in .nvmrc. 

Run `yarn install`. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## How it Works
There is a CSV file containing volunteer shifts from the [Equal Love](equallove.tw) project. It is located in `./src/data/`. A Webpack Raw Text loader loads this file as raw text in `index.tsx`. We then use Papaparse to convert it to JSON and then to a TypeScript Class. 