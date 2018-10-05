import React from 'react';
import Routes from './routes';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

MapboxGL.setAccessToken(
	'pk.eyJ1IjoianVsaW9jZXJvbiIsImEiOiJjam1xbmdrbHcwMTkxM3BtbjRrMG00dnk2In0.boasO8SPlp7P3IXWtr_NRA'
);

const App = () => <Routes />;

export default App;
