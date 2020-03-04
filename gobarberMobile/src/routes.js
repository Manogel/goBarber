import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createStackNavigator } from 'react-navigation-stack';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        SignUp,
      },
      {
        // initialRouteName: userLogged ? 'Main' : 'Main',
      }
    )
  );

export default Routes;
