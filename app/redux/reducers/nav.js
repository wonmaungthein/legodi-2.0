import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../../navigation/MainTabNavigator'

const initialState = RootNavigator.router.getStateForAction(NavigationActions.init());

export default (state = initialState, action) => {
    const NextState = RootNavigator.router.getStateForAction(action, state)
    return NextState || state
}