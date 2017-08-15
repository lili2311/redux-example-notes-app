'use strict';

import { NOTE_SET_ARCHIVED, NOTE_ADD_NEW } from '../action-types/notes-action-types';
import { noteSetArchivedStart, noteAddNewStart } from '../action-creators/notes-action-creators';
import { updateObject, updateItemInArray } from '../utils/all';

let NOTE_ID = -1;

console.log('========= NOTES REDUCER =========');

/* reducer */
export function notes(
    state = {
        notes: [],
    },
    action) {
    switch (action.type) {
        case NOTE_SET_ARCHIVED: {
            // console.log("action.payload", action.payload)
            const newNotes = updateItemInArray(state.notes, action.payload.id, (note) => {
                return updateObject(note, { archived: action.payload.archived });
            });

            return updateObject(state, { notes: newNotes });
        }
        case NOTE_ADD_NEW: {
            NOTE_ID += 1;
            const newNotes = state.notes.concat({
                id: NOTE_ID,
                content: action.payload.content,
                archived: action.payload.archived,
                categories: [],
            });

            return updateObject(state, { notes: newNotes });
        }
        default:
            return state;
        }
}


/* thunks */
export function notesSetArchived(noteId, isArchived) {
    // console.log(`noteId = ${noteId}, isArchived = ${isArchived}`)
    return (dispatch) => {
        dispatch(noteSetArchivedStart({
            id: noteId,
            archived: isArchived,
        }));
    };
}

export function notesAddNew(content) {
    return (dispatch) => {
        // console.log(`NOTE_ID = ${NOTE_ID} | Content = ${content}`);
        dispatch(noteAddNewStart({
            archived: false,
            content,
        }));
    };
}
