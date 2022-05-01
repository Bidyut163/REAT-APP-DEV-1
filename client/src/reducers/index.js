import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import errors from './errors';

export default combineReducers({
    auth: auth,
    user: user,
    errors: errors,
});
