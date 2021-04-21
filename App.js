import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Layout from './Layout';
import HomeBank from './HomeBank';


const navigator = createStackNavigator( // create a new constant to initialize the stack navigator
  {
    One: Layout, // Set the screen One as Layout file
    Two: HomeBank, // Set the screen Two as Homebank file
  },
  {
    initialRouteName: 'One', // Set the page One (Layout) as the default screen
    defaultNavigationOptions: {
      title: '',
      headerStyle: {
        backgroundColor: '#19181f'
      },
      //header: null
      headerTintColor: "#7159c1",
    }
  }
);


export default createAppContainer(navigator);
