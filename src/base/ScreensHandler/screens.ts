import HomeScreen from '../../Screens/Home';
import SplashScreen from '../../Screens/Splash';
import {ScreensListType} from './types';

export function screens(): ScreensListType {
  const lists: ScreensListType = [
    {
      component: SplashScreen,
      name: 'splash',
      label: '',
    },
    {
      component: HomeScreen,
      name: 'home',
      label: 'Home',
      animation: 'ios',
    },
  ];

  return lists;
}
