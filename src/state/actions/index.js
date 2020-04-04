import { GALLERY, IMAGE, FILTER_CHANGED } from "../../constants/actionTypes";
import galleryService from "../../services/gallery.service";

export const getImages = request => async dispatch => {
    dispatch({
        type: GALLERY,
        payload: galleryService.getGallery(request)
    });
}

export const getImageById = request => async dispatch => {
    dispatch({
        type: IMAGE,
        payload: galleryService.getImage(request)
    });
}

export const filterChanged = filter => {
    return {
        type: FILTER_CHANGED,
        payload: filter
    };
}
