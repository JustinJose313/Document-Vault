import { combineReducers } from "redux";
import userReducer from "./User/user.reducer";
import vaultReducer from "./Vault/vault.reducer";

export default combineReducers({
  user: userReducer,
  vault: vaultReducer,
});
