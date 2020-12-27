import { firestore } from "./../../firebase/utils";

export const handleAddVault = (vault) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("vault")
      .doc()
      .set(vault)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleGetUserVault = (uid) => {
  return new Promise((resolve, reject) => {
    let ref = firestore.collection("vault").orderBy("createdDate");

    ref = ref.where("vaultAdminUserUID", "==", uid);

    ref
      .get()
      .then((snap) => {
        const data = [
          ...snap.docs.map((doc) => {
            return {
              ...doc.data(),
              documentID: doc.id,
            };
          }),
        ];
        resolve({ data });
      })
      .catch((err) => {
        reject(err);
      });
  });
};
