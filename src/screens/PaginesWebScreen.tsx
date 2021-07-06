import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';
import {Header} from '../components/Header';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {InformacioCard} from '../components/InformacioCard';

interface Props extends DrawerScreenProps<any, any> {}

export const PaginesWebScreen = ({navigation}: Props) => {
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
                    <Text style={styles.title}>Disseny web a mida</Text>
                </View>
                <InformacioCard
                    title="Més de 15 anys fent webs a mida i posicionament"
                    descripcio1="Les necessitats de cada web són diferents. Al llarg dels anys hem treballat amb tota mena de clients (empreses, universitats, startups, institucions, congressos, professionals freelance, artistes, etc.), i és per això que adaptem el teu lloc web a les teves necessitats."
                    imatge="https://www.webmastervic.com/images/disseny-web-barcelona.jpg"
                />
                <InformacioCard
                    title="Una de les nostres especialitats:  botigues online a mida"
                    descripcio1="Les nostres botigues online a mida ofereixen solucions avançades que superen qualsevol CMS del mercat, com Prestashop o WooCommerce, i s'adapten específicament a les teves necessitats."
                    imatge="https://www.webmastervic.com/images/botigues-online-a-mida.jpg"
                />
                <InformacioCard
                    title="Desenvolupament web i programació per a cada necessitat"
                    descripcio1="Si la vostra empresa té necessitats especials que requereixen de programació avançada, som el teu soci tecnològic ideal i t’acompanyarem durant tot el procés, des de la primera idea i conceptualització fins a la promoció online i el manteniment del projecte."
                    imatge="https://www.webmastervic.com/images/programacio-web-vic.jpg"
                />
                <InformacioCard
                    title="Webs autogestionables"
                    descripcio1="Podràs modificar i gestionar el blog o el catàleg de la teva pàgina web mitjançant una simple i atractiva interfície. A més, podràs accedir a les estadístiques del web i veure entre altres coses, quantes visites rep la teva pàgina web."
                    imatge="https://www.webmastervic.com/images/disseny-web-granollers.jpg"
                />
                <InformacioCard
                    title="Altres serveis"
                    descripcio1="- Registre de dominis i hosting web, Correu electrònic, Certificats SSL."
                    descripcio2="- Disseny de logotips, Fotografia per a pàgines web."
                    descripcio3="- Connectors RP Prestashop."
                    imatge="https://www.webmastervic.com/images/hosting-vic.jpg"
                />
            </ScrollView>
        </View>
    );
};
