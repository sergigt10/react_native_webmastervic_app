import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {
    return (
        <View style={{flex: 1}}>
            <LinearGradient
                colors={['#e7754f', '#f3baa7', '#fcede9']}
                style={{...StyleSheet.absoluteFillObject}}
                start={{x: 0.2, y: 0.1}}
                end={{x: 0.5, y: 0.7}}
            />
            {children}
        </View>
    );
};
