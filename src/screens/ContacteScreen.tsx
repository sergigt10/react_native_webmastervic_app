import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {Header} from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import {Map} from '../components/Map';

interface Props extends DrawerScreenProps<any, any> {}

export const ContacteScreen = ({navigation}: Props) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={styles.globalBackground}>
            <Header navigation={navigation} />
            <ScrollView>
                <View
                    style={{
                        marginTop: insets.top + 10,
                    }}>
                    <Text style={styles.title}>Contacteu amb nosaltres</Text>
                </View>
                <View
                    style={{
                        ...styles.globalMargin,
                        ...styles.contactContent,
                    }}>
                    <Text style={styles.titleInformacio}>
                        <Icon
                            name="location-outline"
                            color={'#eee'}
                            size={20}></Icon>{' '}
                        Adreça
                    </Text>
                    <Text style={styles.descripcioInformacio}>
                        Rambla Tarradellas, 10, Vic 08500, Barcelona{'\n'}
                    </Text>
                    <Text style={styles.titleInformacio}>
                        <Icon
                            name="call-outline"
                            color={'#eee'}
                            size={20}></Icon>{' '}
                        Telèfon
                    </Text>
                    <Text style={styles.descripcioInformacio}>
                        (+34) 93 889 41 20 - (+34) 606 87 17 94{'\n'}
                    </Text>
                    <Text style={styles.titleInformacio}>
                        <Icon
                            name="mail-outline"
                            color={'#eee'}
                            size={20}></Icon>{' '}
                        Correu electrònic
                    </Text>
                    <Text style={styles.descripcioInformacio}>
                        info@webmastervic.com{'\n'}
                    </Text>
                    <Text style={styles.titleInformacio}>
                        <Icon
                            name="time-outline"
                            color={'#eee'}
                            size={20}></Icon>{' '}
                        Horaris
                    </Text>
                    <Text style={styles.descripcioInformacio}>
                        De dilluns a divendres de: 9h a 13h - 15h a 20h
                    </Text>
                </View>
                <View>
                    <Map />
                </View>
            </ScrollView>
        </View>
    );
};
