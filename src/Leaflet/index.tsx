import React from 'react';
import {
    Map,
    TileLayer,
    LayersControl,
    ScaleControl
} from 'react-leaflet';

import Earthquakes from './Earthquakes';
import { tileLayers } from './constants';
import styles from './index.module.sass';

const Leaflet = () => {
    return (
        <Map center={[0, 0]} zoom={3} className={styles.map}>
            <LayersControl position="topright">
                {tileLayers.map(({ id, name, attribution, url, checked }) => (
                    <LayersControl.BaseLayer
                        key={id}
                        name={name}
                        checked={checked}>
                        <TileLayer attribution={attribution} url={url} />
                    </LayersControl.BaseLayer>
                ))}

            </LayersControl>

            <Earthquakes />
            <ScaleControl />

        </Map>
    );
};

export default Leaflet;
