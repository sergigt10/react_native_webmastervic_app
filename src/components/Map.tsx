import React from 'react';
import MapView, {Marker} from 'react-native-maps';

export const Map = () => {
    return (
        <>
            <MapView
                style={{height: 300}}
                initialRegion={{
                    latitude: 41.923669,
                    longitude: 2.251485,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003,
                }}>
                <Marker
                    coordinate={{
                        latitude: 41.923669,
                        longitude: 2.251485,
                    }}
                    title="Webmastervic"
                    description="Pàgines Web"
                />
            </MapView>
        </>
    );
};
