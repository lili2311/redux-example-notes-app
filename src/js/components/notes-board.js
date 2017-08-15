/* imports */
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { notesApp } from '../reducers/notes-app';

import { categoriesAddNew } from '../reducers/categories';
import { notesAddNew, notesSetArchived } from '../reducers/notes';

console.log('========= REDUX BOARD COMPONENT  =========');

const store = createStore(
    notesApp,
    compose(
        applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);

export const notesBoard = {
    name: 'I am a notesBoard',
};


store.dispatch(categoriesAddNew('banana'));
store.dispatch(categoriesAddNew('apple'));


store.dispatch(notesAddNew('I am a big banana'));

store.dispatch(notesSetArchived(0, true));

store.dispatch(notesAddNew('Onion bits'));

// store.dispatch(notesSetArchived(1, true));
