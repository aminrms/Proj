import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

type SplashScreenProps = PropsWithChildren<{}>;

const SplashScreen: React.FC = ({}) => {
  const navigation = useNavigation();
  return (
    <View
      onTouchStart={() => {
        navigation.navigate('home', {itemId: 1});
      }}>
      <Text style={{color: '#333'}}> Click Me</Text>
    </View>
  );
};

export default SplashScreen;
