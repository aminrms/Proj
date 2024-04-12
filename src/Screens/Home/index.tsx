import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import {ScreenComponentProps} from '../../base/ScreensHandler/types';
import {useNavigation} from '@react-navigation/native';

type HomeScreenProps = ScreenComponentProps & PropsWithChildren<{}>;
const HomeScreen: React.FC<HomeScreenProps> = ({route}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onTouchStart={() => {
        navigation.navigate('splash');
      }}>
      <Text style={{color: 'red'}}>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
