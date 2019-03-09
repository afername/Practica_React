import { createAction } from 'redux-act';

import { moviesActions } from './moviesActions';
import { showsActions } from './showsActions';

export { moviesActions, showsActions };

export const setLocale = createAction('SET_LOCALE');