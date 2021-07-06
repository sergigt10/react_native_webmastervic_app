import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';
import {Header} from '../components/Header';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {InformacioCard} from '../components/InformacioCard';

interface Props extends DrawerScreenProps<any, any> {}

export const EmpresaScreen = ({navigation}: Props) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={styles.globalBackground}>
            <Header navigation={navigation} />
            <ScrollView
                style={{
                    marginBottom: 100,
                }}>
                <View
                    style={{
                        marginTop: insets.top + 10,
                    }}>
                    <Text style={styles.title}>Empresa</Text>
                </View>
                <InformacioCard
                    title="Empresa de disseny web i marketing online a Vic"
                    descripcio1="WebmasterVic neix al 2005 amb l’objectiu d’ajudar-vos a obrir les portes de la vostra empresa al món mitjançant una pàgina web amb avantguarda visual i tecnològica."
                    imatge="https://www.webmastervic.com/images/webmastervic2.jpg"
                />
                <InformacioCard
                    title="Combinació de web i marketing"
                    descripcio1="Com una de les empreses de disseny web amb més trajectòria a Vic, Webmastervic ofereix un servei integral a les empreses basat en l’enfocament estratègic especialitzat per a cada necessitat concreta."
                    imatge="https://www.webmastervic.com/images/marketing-vic.jpg"
                />
                <InformacioCard
                    title="Així treballem"
                    descripcio1="01. Anàlisi del projecte o pla de marketing."
                    descripcio2="02. Disseny web personalitzat i programació."
                    descripcio3="03. Marketing online i mantenimient."
                    imatge="https://www.webmastervic.com/images/disseny-web-personalitzat.jpg"
                />
            </ScrollView>
        </View>
    );
};
