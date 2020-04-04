import { GALLERY_PENDING, GALLERY_FULFILLED, GALLERY_REJECTED } from "../../constants/actionTypes";

const initialTGalleryState = {
    gallery: [],
    error: {},
    loading: false
};

export const galleryReducer = (state = initialTGalleryState, action) => {
    switch (action.type) {
        case GALLERY_PENDING:
            return { ...state, loading: true };
        case GALLERY_FULFILLED:            
            return { ...state, gallery: action.payload, loading: false };
        case GALLERY_REJECTED:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};
