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

## APP navigation 
we've update the navigation function, we've created a helper file to reduce and simplify the code currentley there is two functions inside helper

1-GenerateNavigation
GenerateNavigation function created to reduce the code in MainTabNavigator and make it easy to use and unerstand
GenerateNavigation takes 5 parameters we can update it take more or less parameters

const generateNavigation = (routeStack, label, color, iosIcon, androidIcon) => {
  routeStack.navigationOptions = {
    tabBarLabel: label,
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        color={color}
        name={
          Platform.OS === 'ios'
            ? `${iosIcon}${focused ? '' : '-outline'}`
            : androidIcon
        }
      />
    )
  }
}

2-tabBarVisibility
We've created this function to hide the footer (tabBarVisibility) when we open Articles and Article page.
We can update this function to hide the footer from another screens just by the screen route name to the condition.

Control tab bar visibility at different screens

export const tabBarVisibility =  (navigation) => {
  let initialValue = true;
  navigation.state.routes.map(route => {
    const { routeName } = route;
    if (routeName === 'Article' || routeName === 'Articles') {
      return initialValue= false;
    }
  })
  !initialValue ? { tabBarVisible: false } : null;
}