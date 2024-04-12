import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

interface HomeScreenProps extends PropsWithChildren {}
const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'red'}}>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
