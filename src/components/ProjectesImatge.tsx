import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import {Projectes} from '../interfaces/listInterface';
import {useNavigation} from '@react-navigation/core';

interface Props {
    title?: string;
    projecte: Projectes;
    height?: number;
    width?: number;
}

export const ProjectesImatge = ({
    title,
    projecte,
    width = 300,
    height = 420,
}: Props) => {
    const navigation = useNavigation();
    {
        title === 'Serveis' ? (height = 150) : height;
    }
    return (
        <TouchableOpacity
            onPress={() => {
                title === 'Serveis'
                    ? navigation.navigate(projecte.link)
                    : Linking.openURL(projecte.link);
            }}
            activeOpacity={0.9}
            style={{
                width,
                height,
                marginHorizontal: 5,
                marginTop: 5,
            }}>
            <View style={styles.imageContainer}>
                <Image
                    source={{uri: projecte.imatge_path}}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
    },
});
