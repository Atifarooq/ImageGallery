import { GALLERY, IMAGE } from "../../constants/actionTypes";
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
