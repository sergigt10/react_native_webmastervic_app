import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {ProjectesScreen} from '../screens/ProjectesScreen';
import {ContacteScreen} from '../screens/ContacteScreen';
import {IniciScreen} from '../screens/IniciScreen';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            tabBarOptions={{
                activeTintColor: '#E25324',
                labelStyle: {
                    marginBottom: Platform.OS === 'ios' ? 0 : 10,
                },
                style: {
                    position: 'absolute',
                    backgroundColor: 'rgba(249,220,211, 0.96)',
                    borderWidth: 0,
                    elevation: 0,
                    height: Platform.OS === 'ios' ? 80 : 60,
                },
            }}>
            <Tab.Screen
                name="Inici"
                component={IniciScreen}
                options={{
                    tabBarLabel: 'Inici',
                    tabBarIcon: ({color}) => (
                        <Icon color={color} size={25} name="home-outline" />
                    ),
                }}
            />
            <Tab.Screen
                name="Projectes"
                component={ProjectesScreen}
                options={{
                    tabBarLabel: 'Projectes',
                    tabBarIcon: ({color}) => (
                        <Icon color={color} size={25} name="code-outline" />
                    ),
                }}
            />
            <Tab.Screen
                name="Contacte"
                component={ContacteScreen}
                options={{
                    tabBarLabel: 'Contacte',
                    tabBarIcon: ({color}) => (
                        <Icon color={color} size={25} name="call-outline" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
