'use strict';

import { NOTE_SET_ARCHIVED, NOTE_ADD_NEW } from '../action-types/notes-action-types';

export function noteSetArchivedStart(res) {
    return {
        type: NOTE_SET_ARCHIVED,
        payload: res,
    };
}

export function noteAddNewStart(res) {
    return {
        type: NOTE_ADD_NEW,
        payload: res,
    };
}

