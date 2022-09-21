// este es el componente que provee la info a toda mi app

import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

import { types } from "../types/types"

// ya no es necesario por que nuestro init realiza esta funcion de carga primera
// const initialState = {
//     logged: false
// }

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    return {
        logged: !!user,
        user: user
    }
}

// la prop children hace que reciba todos los componentes la funcion
export const AuthProvider = ({ children }) => {

    // el useReducer recibe por parametro el reducer y el estado inicial
    const [authState, dispatch] = useReducer(authReducer, {}, init)

    const login = (name = ' ') => {

        const user = {
            ID: 'ABC',
            name: name
        }

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user))

        dispatch(action)
    }

    const logout = () => {
        localStorage.removeItem('user')
        const action = { type: types.logout }
        dispatch(action)
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login,
            logout
        }}>

            {children}

        </AuthContext.Provider>
    )
}

// 1ro - el AuthContext
// 2do - el AuthProvider
// 3ro - el useReducer para manejar los estados gloables