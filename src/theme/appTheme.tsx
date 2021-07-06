import {StyleSheet} from 'react-native';

export const colores = {
    primary: '#E25324',
};

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    globalBackground: {
        backgroundColor: '#ea8665',
        // #ea8665
    },
    logo: {
        width: 219,
        height: 38,
    },
    title: {
        fontSize: 25,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 120,
        height: 120,
    },
    menuContainer: {
        marginVertical: 20,
        marginHorizontal: 50,
    },
    menuBoton: {
        marginVertical: 10,
    },
    menuTexto: {
        fontSize: 20,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: '#E25324',
        borderRadius: 18,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 200,
    },
    appButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
    titleInformacio: {
        fontSize: 20,
        color: '#eee',
        fontWeight: 'bold',
        textAlign: 'justify',
    },
    descripcioInformacio: {
        fontSize: 17,
        color: '#eee',
        textAlign: 'justify',
    },
    imageInformacio: {
        marginTop: 20,
        alignSelf: 'center',
        width: '100%',
        height: 250,
        borderRadius: 18,
    },
    contactContent: {
        backgroundColor: '#E25324',
        borderRadius: 18,
        padding: 20,
        marginBottom: 20,
        flex: 1,
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
