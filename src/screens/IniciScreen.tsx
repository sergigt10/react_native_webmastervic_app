import React, {useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {GradientBackground} from '../components/GradientBackground';
import {useProjectes} from '../hooks/useProjectes';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {Header} from '../components/Header';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

interface Props extends DrawerScreenProps<any, any> {}

export const IniciScreen = ({navigation}: Props) => {
    const {serveisIndex, projectesIndex} = useProjectes();
    const insets = useSafeAreaInsets();

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <GradientBackground>
            <Header navigation={navigation} />
            <ScrollView>
                <Text
                    style={{
                        ...styles.title,
                        fontSize: 28,
                        top: insets.top,
                    }}>
                    Disseny web a mida i marketing digital
                </Text>
                <Text
                    style={{
                        ...styles.subTitle,
                        top: insets.top,
                    }}>
                    Més de 16 anys d'experiència
                </Text>
                <View
                    style={{
                        marginBottom: 20,
                    }}>
                    {/* Serveis */}
                    <HorizontalSlider
                        title="Serveis"
                        projectes={serveisIndex}
                    />
                    {/* Projectes destacats */}
                    <HorizontalSlider
                        title="Projectes destacats"
                        projectes={projectesIndex}
                    />
                </View>
            </ScrollView>
        </GradientBackground>
    );
};
