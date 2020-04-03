import { combineReducers } from 'redux';

import { galleryReducer } from "./gallery.reducer";
import { imageReducer } from "./image.reducer";

export default combineReducers({
    galleryReducer,
    imageReducer
});

