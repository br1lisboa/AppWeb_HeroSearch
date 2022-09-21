import { types } from "../types/types";

// el reducer recibe 2 params, el state, y el action (que tiene el type y un payload)

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            // este es el return del state, siempre es recomendable hacer una desestructuracion del state primero, para mantener los datos anteriores. 
            return {
                ...state,
                logged: true,
                user: action.payload
            }

        case types.logout:
            return {
                logged: false
            }

        default:
            return state;
    }

}