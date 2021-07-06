import React, {useState, useEffect} from 'react';
import {
    Text,
    View,
    Dimensions,
    ScrollView,
    Button,
    TouchableOpacity,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';
import Carousel from 'react-native-snap-carousel';
import {useProjectes} from '../hooks/useProjectes';
import {ProjectesImatge} from '../components/ProjectesImatge';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {Header} from '../components/Header';

interface Props extends DrawerScreenProps<any, any> {}

export const ProjectesScreen = ({navigation}: Props) => {
    const insets = useSafeAreaInsets();
    const {projectes} = useProjectes();

    const [dimensions, setDimensions] = useState({
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    });

    return (
        <ScrollView style={styles.globalBackground}>
            <Header navigation={navigation} />
            <View
                style={{
                    marginTop: insets.top + 10,
                }}>
                <Text style={styles.title}>Projectes</Text>
            </View>
            <View
                style={{
                    marginTop: 5,
                    flex: 1,
                }}
                onLayout={() => {
                    setDimensions({
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height,
                    });
                }}>
                <Carousel
                    data={projectes}
                    renderItem={({item}: any) => (
                        <ProjectesImatge
                            projecte={item}
                            width={300}
                            height={320}
                        />
                    )}
                    sliderWidth={dimensions.width}
                    sliderHeight={dimensions.height}
                    slideStyle={{height: 340}}
                    itemWidth={300}
                    inactiveSlideOpacity={0.9}
                    loop={true}
                />
            </View>
            <View
                style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    height: 70,
                }}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('ContacteScreen')}
                    style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Contacta'ns</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};
