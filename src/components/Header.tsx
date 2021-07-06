import React from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
    navigation: any;
}

export const Header = ({navigation}: Props) => {
    const insets = useSafeAreaInsets();

    return (
        <View
            style={{
                ...styles.globalMargin,
                marginTop: insets.top + 20,
            }}>
            <View
                style={{
                    flexDirection: 'row',
                }}>
                <TouchableOpacity
                    style={{
                        marginTop: -5,
                        marginLeft: -6,
                    }}
                    onPress={() => navigation.toggleDrawer()}>
                    <Icon name="menu-outline" color={'#000'} size={50}></Icon>
                </TouchableOpacity>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <TouchableOpacity
                        style={{
                            marginTop: -5,
                            marginLeft: -6,
                        }}
                        activeOpacity={1}
                        onPress={() => navigation.navigate('IniciScreen')}>
                        <Image
                            source={require('../assets/logo.png')}
                            style={{...styles.logo, marginRight: 20}}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
