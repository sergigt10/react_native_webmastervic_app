import React from 'react';

import {
    createDrawerNavigator,
    DrawerContentComponentProps,
    DrawerContentOptions,
    DrawerContentScrollView,
} from '@react-navigation/drawer';

import {
    Image,
    Text,
    useWindowDimensions,
    View,
    TouchableOpacity,
} from 'react-native';
import {styles} from '../theme/appTheme';

import {EmpresaScreen} from '../screens/EmpresaScreen';
import {PaginesWebScreen} from '../screens/PaginesWebScreen';
import {MarketingDigitalScreen} from '../screens/MarketingDigitalScreen';
import {ProjectesScreen} from '../screens/ProjectesScreen';
import {ContacteScreen} from '../screens/ContacteScreen';
import {IniciScreen} from '../screens/IniciScreen';
import {Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
    const {width} = useWindowDimensions();

    return (
        <Drawer.Navigator
            drawerStyle={{
                backgroundColor: '#f3baa7',
            }}
            drawerType={width >= 768 ? 'permanent' : 'front'}
            drawerContent={props => <MenuInterno {...props} />}>
            <Drawer.Screen name="IniciScreen" component={IniciScreen} />
            <Drawer.Screen name="EmpresaScreen" component={EmpresaScreen} />
            <Drawer.Screen
                name="PaginesWebScreen"
                component={PaginesWebScreen}
            />
            <Drawer.Screen
                name="MarketingDigitalScreen"
                component={MarketingDigitalScreen}
            />
            <Drawer.Screen name="ProjectesScreen" component={ProjectesScreen} />
            <Drawer.Screen name="ContacteScreen" component={ContacteScreen} />
        </Drawer.Navigator>
    );
};

const MenuInterno = ({
    navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
    return (
        <DrawerContentScrollView>
            {/* Parte del avatar */}
            <View style={styles.avatarContainer}>
                <Image
                    source={require('../assets/logo_secondary.png')}
                    style={styles.avatar}
                />
            </View>

            {/* Opciones de menú */}
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('IniciScreen')}>
                    <Text style={styles.menuTexto}>Inici</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('EmpresaScreen')}>
                    <Text style={styles.menuTexto}>Empresa</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('PaginesWebScreen')}>
                    <Text style={styles.menuTexto}>Pàgines web</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() =>
                        navigation.navigate('MarketingDigitalScreen')
                    }>
                    <Text style={styles.menuTexto}>Marketing digital</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('ProjectesScreen')}>
                    <Text style={styles.menuTexto}>Projectes</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('ContacteScreen')}>
                    <Text style={styles.menuTexto}>Contacte</Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={styles.menuBoton}
                        onPress={() => {
                            Linking.openURL(
                                'https://www.facebook.com/webmastervic/',
                            );
                        }}>
                        <Icon name="logo-instagram" color={'#000'} size={25}>
                            {'\n'}
                        </Icon>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuBoton}
                        onPress={() => {
                            Linking.openURL(
                                'https://www.instagram.com/webmastervic/',
                            );
                        }}>
                        <Icon name="logo-facebook" color={'#000'} size={25}>
                            {'\n'}
                        </Icon>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuBoton}
                        onPress={() => {
                            Linking.openURL(
                                'https://es.linkedin.com/company/webmastervic-disseny-web',
                            );
                        }}>
                        <Icon name="logo-linkedin" color={'#000'} size={25}>
                            {'\n'}
                        </Icon>
                    </TouchableOpacity>
                </View>
            </View>
        </DrawerContentScrollView>
    );
};
