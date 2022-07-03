import { userActions } from '../actions/users';

const initialState = {
    data: JSON.parse(localStorage.getItem("user"))
};

/**
 * Reducer de acciones de usuario
 */
const userReducer = (state = initialState, action) => {

    let newState = null;

    switch (action.type) {
        case userActions.types.CREATE:
            newState = { data: action.user };
            break;
        case userActions.types.LOGIN:
            newState = { data: action.user };
            break;
        case userActions.types.LOGOUT:
            newState = null;
            break;
        default:
            newState = state;
    }

    return newState;
};

export default userReducer;