import vaultTypes from './vault.types'

const INITIAL_STATE = {
    vault: [],
}

const vaultReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case vaultTypes.SET_USER_VAULT:
            return {
                ...state,
                vault: action.payload
            }
        default:
            return state
    }
}

export default vaultReducer