import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Layout from './Layout';
import ScreenTransition from './ScreenTransition';

const navigator = createStackNavigator(
  {
    One: Layout,
    Two: ScreenTransition,
  },
  {
    initialRouteName: 'One',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

//testing

export default createAppContainer(navigator);
