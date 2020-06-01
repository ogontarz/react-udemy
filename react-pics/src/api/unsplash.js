import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID fSYLx-qPi6trlK2xHHhz9_Vqlk7FcAi9AUhITlV04iM'
	}
});
