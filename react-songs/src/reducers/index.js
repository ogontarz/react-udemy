import { combineReducers } from 'redux';

const songReducer = () => {
	return [
		{ title: 'No Scrubs', duration: '4:05' },
		{ title: 'All Star', duration: '3:30' },
		{ title: 'Macarena', duration: '3:58' },
		{ title: 'I Want It That Way', duration: '2:45' }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songReducer,
	selectedSong: selectedSongReducer
});
