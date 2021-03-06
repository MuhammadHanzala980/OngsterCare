const data = require('../response.json')

let initialState = {
    user: null
}

const getDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER": {
            return {
                ...state, 
                user: action.payload
            }
        }

        case "LOGOUT_USER": {
            return {
                ...state, 
                user: null
            }
        }
        default: {
            return state
        }
    }
}

export default getDataReducer;