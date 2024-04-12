import {ParamListBase, RouteProp} from '@react-navigation/native';
import {ScreenProps} from 'react-native-screens';

type ScreenNamesType = 'splash' | 'home';
interface ScreenComponentProps {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}
type ScreensListType = {
  component?: React.FC<ScreenComponentProps>;
  name?: ScreenNamesType;
  label?: string;
  animation?: ScreenProps['stackAnimation'];
}[];

export type {ScreenNamesType, ScreensListType, ScreenComponentProps};
