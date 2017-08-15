'use strict';

/* imports */
import { combineReducers } from 'redux';
import { notes } from './notes';
import { categories } from './categories';

console.log('========= NOTES APP =========');


export const notesApp = combineReducers({
    notes,
    categories,
});
