import { FILTER_CHANGED } from "../../constants/actionTypes";

const initialFilterState = {
    filter: {
        section: 'hot',
        sort: 'viral',
        window: 'day'
    }
};

export const filterReducer = (state = initialFilterState, action) => {
    switch (action.type) {
        case FILTER_CHANGED:
            return { ...state, filter: action.payload };
        default:
            return state;
    }
};
