import { all, call } from "redux-saga/effects";
import userSagas from "./User/user.sagas";
import vaultSagas from "./Vault/vault.sagas";
export default function* rootSaga() {
  yield all([call(userSagas), call(vaultSagas)]);
}
