import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MenuLateral} from './src/navigator/MenuLateral';

import {LogBox, StatusBar} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
    return (
        <NavigationContainer>
            <MenuLateral />
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
                barStyle="dark-content"
            />
        </NavigationContainer>
    );
};

export default App;
