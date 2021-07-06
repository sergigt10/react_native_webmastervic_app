import {useState, useEffect} from 'react';
import {Projectes} from '../interfaces/listInterface';

export const useProjectes = () => {
    const [serveisIndex, setServeisIndex] = useState<Projectes[]>([]);
    const [projectesIndex, setProjectesIndex] = useState<Projectes[]>([]);
    const [projectes, setProjectes] = useState<Projectes[]>([]);

    const serveis = [
        {
            id: '1',
            link: 'PaginesWebScreen',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/serveis_portada/serveis_1.jpg?1.1',
        },
        {
            id: '2',
            link: 'PaginesWebScreen',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/serveis_portada/serveis_2.jpg?1',
        },
        {
            id: '3',
            link: 'PaginesWebScreen',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/serveis_portada/serveis_3.jpg?1',
        },
        {
            id: '4',
            link: 'PaginesWebScreen',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/serveis_portada/serveis_4.jpg?1',
        },
        {
            id: '5',
            link: 'PaginesWebScreen',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/serveis_portada/serveis_5.jpg?1',
        },
        {
            id: '6',
            link: 'MarketingDigitalScreen',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/serveis_portada/serveis_6.jpg?1',
        },
        {
            id: '7',
            link: 'MarketingDigitalScreen',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/serveis_portada/serveis_7.jpg?1',
        },
        {
            id: '8',
            link: 'MarketingDigitalScreen',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/serveis_portada/serveis_8.jpg?1',
        },
    ];

    const projectesDestacats = [
        {
            id: '1',
            link: 'https://www.canmestres.es/',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes_portada/can_mestres.jpg',
        },
        {
            id: '2',
            link: 'https://www.altoplast.com/',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes_portada/altoplast.jpg',
        },
        {
            id: '3',
            link: 'https://www.sportclinic.cat/',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes_portada/sportclinic.jpg',
        },
        {
            id: '4',
            link: 'https://www.alacermas.com/',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes_portada/alacermas.jpg',
        },
        {
            id: '5',
            link: 'https://kwokkabarcelona.com',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes_portada/kwokka.jpg',
        },
        {
            id: '6',
            link: 'https://www.tapsapvc.com/',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes_portada/tapsa.jpg',
        },
        {
            id: '7',
            link: 'https://www.c2cyclingcoach.com/',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes_portada/c2cycling.jpg',
        },
        {
            id: '8',
            link: 'https://www.iurisgrup2164.com/',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes_portada/iuris.jpg',
        },
        {
            id: '9',
            link: 'https://www.claravalls.com/',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes_portada/clara_valls.jpg',
        },
    ];

    const projectesTots = [
        {
            id: '4',
            link: 'https://www.altoplast.com/',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes_portada/altoplast.jpg',
        },
        {
            id: '2',
            link: 'https://www.kokorovic.com/',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes/kokoro.jpg',
        },
        {
            id: '3',
            link: 'https://www.alacermas.com/',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes_portada/alacermas.jpg',
        },
        {
            id: '11',
            link: 'https://www.iurisgrup2164.com/',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes_portada/iuris.jpg',
        },
        {
            id: '5',
            link: 'https://www.claravalls.com/',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes_portada/clara_valls.jpg',
        },
        {
            id: '6',
            link: 'https://www.isidresayos.com/',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes/isidre_sayos.jpg',
        },
        {
            id: '7',
            link: 'https://www.feixasaulet.cat/',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes/feixas_aulet.jpg',
        },
        {
            id: '8',
            link: 'https://www.sportclinic.cat/',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes_portada/sportclinic.jpg',
        },
        {
            id: '9',
            link: 'https://www.enerbio.es/',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes/enerbio.jpg',
        },
        {
            id: '10',
            link: 'https://www.c2cyclingcoach.com/',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes_portada/c2cycling.jpg',
        },
        {
            id: '1',
            link: 'https://www.tapsapvc.com/',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes_portada/tapsa.jpg',
        },
        {
            id: '12',
            link: 'https://www.kivicom.com/',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes/kivicom.jpg',
        },
        {
            id: '13',
            link: 'https://www.canmestres.es/',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes_portada/can_mestres.jpg',
        },
        {
            id: '14',
            link: 'https://kwokkabarcelona.com',
            imatge_path:
                'https://www.webmastervic.com/images/app_mobil/projectes_portada/kwokka.jpg',
        },
    ];

    useEffect(() => {
        setServeisIndex(serveis);
        setProjectesIndex(projectesDestacats);
        setProjectes(projectesTots);
    }, []);

    return {
        serveisIndex,
        projectesIndex,
        projectes,
    };
};
