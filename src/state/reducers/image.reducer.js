import { IMAGE_PENDING, IMAGE_FULFILLED, IMAGE_REJECTED } from "../../constants/actionTypes";

const initialImageState = {
    image: {},
    error: {},
    loading: false
};

export const imageReducer = (state = initialImageState, action) => {
    switch (action.type) {
        case IMAGE_PENDING:
            return { ...state, loading: true };
        case IMAGE_FULFILLED:
            return { ...state, image: action.payload, loading: false };
        case IMAGE_REJECTED:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};
