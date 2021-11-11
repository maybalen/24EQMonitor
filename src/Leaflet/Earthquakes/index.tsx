import React, { FC, useEffect } from 'react';
import L, { LatLng, GeoJSON } from 'leaflet';
import { useLeaflet } from 'react-leaflet';

import Spinner from '../../Spinner';
import useEarthquakesFetcher from './hooks';

import { onEachFeature } from './utils';
import { geojsonMarkerOptions } from '../utils';
import { IFeature } from './models';

let geojson: GeoJSON;

const Earthquakes: FC = () => {

    const [earthquakes, loading] = useEarthquakesFetcher();
    const { map } = useLeaflet();

    useEffect(() => {
        if (map && map.hasLayer(geojson)) map.removeLayer(geojson);

        geojson = L.geoJSON(earthquakes.features, {
            onEachFeature,
            pointToLayer: (feature: IFeature, latlng: LatLng) => {
                const magnitude = feature.properties.mag;
                return L.circleMarker(latlng, geojsonMarkerOptions(magnitude));
            }
        });

        if (map) geojson.addTo(map);
    }, [earthquakes, map]);

    if (loading) return <Spinner />;

    return null;
};

export default Earthquakes;
