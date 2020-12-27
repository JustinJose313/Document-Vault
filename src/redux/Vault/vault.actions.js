import vaultTypes from './vault.types'

export const addVaultStart = vaultData => ({
    type: vaultTypes.ADD_NEW_VAULT_START,
    payload: vaultData
})

export const getUserVault = uid => ({
    type: vaultTypes.GET_USER_VAULT_START,
    payload: uid,
})

export const setUserVault = vault => ({
    type: vaultTypes.SET_USER_VAULT,
    payload: vault
})