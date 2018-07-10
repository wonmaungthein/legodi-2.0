# LEGODI 2.0

## APP

1. Fork and Clone the repo.
2. Make sure you go inside the app folder and then `yarn` or `npm install`.
3. To run it use: `yarn start` / `npm start`

## Server
-To run the server use: `yarn run dev` or `npm run dev`
-The server running at port: 8000
-To run the test use: `yarn run test` or `npm run test`

### Linting
StandardJs has been setup as a linter in both app and server.
To run it use `npm run lint` to run it with automatic fixing use this command `npm run lint -- --fix`

### Commitzen
git commitzen has setup as a git commit in both app and server.
Instead of using `git commit` you should use `git cz`
When you commit with Commitizen, you'll be prompted to fill out any required commit fields at commit time. No more waiting until later for a git commit hook to run and reject your commit (though that can still be helpful). No more digging through CONTRIBUTING.md to find what the preferred format is. Get instant feedback on your commit message formatting and be prompted for required fields.


### Testing
To run all the test use the command **npm test**

> to run a specific test **npm test theNameOfTheFile** for example *npm test mock-api*
