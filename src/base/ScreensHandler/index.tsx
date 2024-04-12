import React, {PropsWithChildren, useMemo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from './screens';

const INITIAL_ROUTE_NAME = 'splash';
type ScreensHandlerProps = PropsWithChildren<{}>;

// TODO : make it generic for all screens
const Stack = createNativeStackNavigator();
const ScreensHandler: React.FC<ScreensHandlerProps> = ({children}) => {
  const screenList = useMemo(() => {
    return screens();
  }, []);

  return (
    <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      {screenList?.map((screen, index) => (
        <Stack.Screen
          key={index}
          name={screen?.name as string}
          options={{
            animation: screen?.animation ?? 'ios',
            animationDuration: 150,
            headerShown: false,
            gestureEnabled: true,
          }}>
          {props =>
            screen?.component ? <screen.component {...props} /> : null
          }
        </Stack.Screen>
      ))}
    </Stack.Navigator>
  );
};
export default ScreensHandler;
