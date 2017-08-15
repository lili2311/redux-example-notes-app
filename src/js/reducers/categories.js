'use strict';

import { CATEGORIES_ADD_NEW } from '../action-types/categories-action-types';
import { categoriesAddNewStart } from '../action-creators/categories-action-creators';
import { updateObject } from '../utils/all';

/* reducer */
export function categories(
    state = {
        categories: [],
    },
    action) {
    switch (action.type) {
    case CATEGORIES_ADD_NEW: {
        const newCategories = state.categories.concat({
            id: action.id,
            name: action.payload,
        });
        return updateObject(state, { categories: newCategories });
    }
    default:
        return state;
    }
}

export function categoriesAddNew(category) {
    return (dispatch) => {
        dispatch(categoriesAddNewStart(category));
    };
}
