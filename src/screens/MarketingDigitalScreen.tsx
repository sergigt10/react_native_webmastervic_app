import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {Header} from '../components/Header';
import {InformacioCard} from '../components/InformacioCard';

interface Props extends DrawerScreenProps<any, any> {}

export const MarketingDigitalScreen = ({navigation}: Props) => {
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
                    <Text style={styles.title}>Marketing online</Text>
                </View>
                <InformacioCard
                    title="El nostre avantatge: empresa de marketing digital professional"
                    descripcio1="Comptem amb un equip de professionals especialitzats en diversos camps del marketing digital i les seves disciplines complementàries per seguir la millor estratègia."
                    imatge="https://www.webmastervic.com/images/estrategia-web.jpg"
                />
                <InformacioCard
                    title="Continguts de qualitat per a una millor imatge de marca"
                    descripcio1="Redacció de continguts per a pàgines web, blogs, xarxes socials, newsletters, e-mailing, campanyes de publicitat online, infografies, etc."
                    imatge="https://www.webmastervic.com/images/contingut-web2.jpg"
                />
                <InformacioCard
                    title="Redueixi els costos amb un bon posicionament natural (SEO)"
                    descripcio1="A Webmastervic optimitzem les pàgines web dels nostres clients amb un posicionament i visibilitat inmillorable. Per a qualsevol pàgina web és imprescindible situar-se en les primeres posicions de resultats de recerca davant una consulta específica, ja que és la millor manera de captar nous clients."
                    imatge="https://www.webmastervic.com/images/hosting-vic.jpg"
                />
                <InformacioCard
                    title="Optimització contínua de les campanyes SEM"
                    descripcio1="El Search Engine Marketing (SEM) o marketing en cercadors és una eina molt eficaç per aconseguir resultats efectius de forma ràpida."
                    imatge="https://www.webmastervic.com/images/posicionament-sem.jpg"
                />
                <InformacioCard
                    title="Avui dia és indispensable ser visible a Internet i a les xarxes"
                    descripcio1="Les xarxes socials estan molt presents a les nostres vides. Cada vegada són més les persones que les utilitzen, interactuen en elles, comparteixen continguts, fan nous amics i fins i tot compren a través d’elles."
                    imatge="https://www.webmastervic.com/images/community-management.jpg"
                />
                <InformacioCard
                    title="Integra la teva botiga Prestashop a la primera marketplace mundial"
                    descripcio1="Vendre dins d'Amazon és una de les formes d'aconseguir vendes i fer enlairar el vostre negoci online."
                    imatge="https://www.webmastervic.com/images/marketplace-amazon2.jpg"
                />
            </ScrollView>
        </View>
    );
};
