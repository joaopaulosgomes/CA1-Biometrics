import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Layout from './Layout';
import HomeBank from './HomeBank';

const navigator = createStackNavigator(
  {
    One: Layout,
    Two: HomeBank,
  },
  {
    initialRouteName: 'One',
    defaultNavigationOptions: {
      title: '',
      headerStyle: {
        backgroundColor: "#19181f"
      },
      headerTintColor: "#7159c1",
    },
  }
);

//testing

export default createAppContainer(navigator);
