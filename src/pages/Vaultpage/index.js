import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserVault, setUserVault } from "../../redux/Vault/vault.actions";
import AddDocument from "./../../components/AddDocument";

const mapstate = ({ vault, user }) => ({
  vault: vault.vault,
});

const Vault = () => {
  const { vaultID } = useParams();
  const { vault } = useSelector(mapstate);
  const dispatch = useDispatch();

  console.log(vault);
  useEffect(() => {
    dispatch(getUserVault(vaultID));

    return () => {
      dispatch(setUserVault({}));
    };
  }, []);
  return (
    <div>
      <AddDocument docs={vault.data} />
    </div>
  );
};

export default Vault;
