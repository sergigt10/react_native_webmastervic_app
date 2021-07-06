import React from 'react';
import {Projectes} from '../interfaces/listInterface';
import {View, Text, FlatList} from 'react-native';
import {styles} from '../theme/appTheme';
import {ProjectesImatge} from './ProjectesImatge';

interface Props {
    title?: string;
    projectes: Projectes[];
}

export const HorizontalSlider = ({title, projectes}: Props) => {
    return (
        <View style={{height: title === 'Serveis' ? 230 : 300, top: 60}}>
            {title && <Text style={styles.title}>{title}</Text>}
            <FlatList
                data={projectes}
                renderItem={({item}: any) => (
                    <ProjectesImatge
                        title={title!}
                        projecte={item}
                        width={140}
                        height={200}
                    />
                )}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};
