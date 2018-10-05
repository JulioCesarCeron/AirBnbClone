import axios from 'axios';
import { AsyncStorage } from 'react-native';

const api = axios.create({
	baseURL: 'http://192.168.0.8:3333'
});

api.interceptors.request.use(async (config) => {
	try {
		const token = await AsyncStorage.getItem('@AirBnbApp:token');

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	} catch (error) {
		alert(error);
	}
});

export default api;
