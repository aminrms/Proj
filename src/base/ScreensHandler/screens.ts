import {ReactNode} from 'react';
import SplashScreen from '../../Screens/Splash';
import HomeScreen from '../../Screens/Home';

type ScreenNamesType = 'splash' | 'home';

type ScreensListType = {
  component?: React.FC;
  name?: ScreenNamesType;
  label?: string;
  animation?: 'ios' | 'default';
}[];
export function screens(): ScreensListType {
  const lists: ScreensListType = [
    {
      component: SplashScreen,
      name: 'splash',
      label: '',
      animation: 'default',
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
