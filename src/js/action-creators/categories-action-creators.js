'use strict';

import { CATEGORIES_ADD_NEW } from '../action-types/categories-action-types';

export function categoriesAddNewStart(res) {
	// console.log("categoriesAddNewStart, res=", res)
    return {
        type: CATEGORIES_ADD_NEW,
        payload: res,
    };
}
