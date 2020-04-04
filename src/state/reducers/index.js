import { combineReducers } from 'redux';

import { filterReducer } from "./filter.reducer";
import { galleryReducer } from "./gallery.reducer";
import { imageReducer } from "./image.reducer";

export default combineReducers({
    filterReducer,
    galleryReducer,
    imageReducer
});

