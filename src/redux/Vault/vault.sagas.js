import { all, call, takeLatest, put } from "redux-saga/effects";
import vaultTypes from "./vault.types";
import { auth } from "./../../firebase/utils";
import { getUserVault, setUserVault } from "./vault.actions";
import { handleAddVault, handleGetUserVault } from "./vault.helper";

export function* addVault({ payload }) {
  try {
    const timestamp = new Date();
    yield handleAddVault({
      ...payload,
      vaultAdminUserUID: auth.currentUser.uid,
      createdDate: timestamp,
    });

    yield put(getUserVault(auth.currentUser.uid));
  } catch (err) {
    console.log(err);
  }
}

export function* onAddVaultStart() {
  yield takeLatest(vaultTypes.ADD_NEW_VAULT_START, addVault);
}

export function* getUserVaultStart({ payload }) {
  try {
    const vault = yield handleGetUserVault(payload);
    yield put(setUserVault(vault));
  } catch (err) {
    console.log(err);
  }
}

export function* onGetUserVaultStart() {
  yield takeLatest(vaultTypes.GET_USER_VAULT_START, getUserVaultStart);
}

export default function* productsSagas() {
  yield all([call(onAddVaultStart), call(onGetUserVaultStart)]);
}
