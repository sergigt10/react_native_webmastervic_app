import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {FadeInImage} from './FadeInImage';

interface Props {
    title: string;
    descripcio1: string;
    descripcio2?: string;
    descripcio3?: string;
    imatge: string;
}

export const InformacioCard = ({
    title,
    descripcio1,
    descripcio2,
    descripcio3,
    imatge,
}: Props) => {
    return (
        <View style={{...styles.globalMargin, marginBottom: 50}}>
            <Text style={{...styles.titleInformacio, color: '#323232'}}>
                {title}
            </Text>
            <Text
                style={{
                    ...styles.descripcioInformacio,
                    color: '#323232',
                    marginTop: 7,
                }}>
                {descripcio1}
            </Text>
            {descripcio2 && (
                <Text
                    style={{...styles.descripcioInformacio, color: '#323232'}}>
                    {descripcio2}
                </Text>
            )}
            {descripcio3 && (
                <Text
                    style={{...styles.descripcioInformacio, color: '#323232'}}>
                    {descripcio3}
                </Text>
            )}
            <FadeInImage style={styles.imageInformacio} uri={imatge} />
        </View>
    );
};
