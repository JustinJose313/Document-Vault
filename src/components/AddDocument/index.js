import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addVaultStart } from "../../redux/Vault/vault.actions";
import CKEditor from 'ckeditor4-react'
import Document from "../Document";

const AddDocument = ({ docs }) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  const resetform = () => {
    setTitle("");
    setNotes("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addVaultStart({
        title,
        notes,
      })
    );

    resetform();
  };
  return (
    <div className="container">
      <div className="header">
        <h1>Add Document</h1>
        <a onClick={() => history.goBack()}>Go Back</a>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>Add Notes</label>
        <CKEditor
          onChange={(e) => setNotes(e.editor.getData())}
        />
        <br />
        <button type="submit">Add Document</button>
      </form>

      <div className="vaultWrap">
        {Array.isArray(docs) &&
          docs.slice(0).reverse().map((doc, index) => {
            return <Document key={index} data={doc} />;
          })}
      </div>
    </div>
  );
};

export default AddDocument;
