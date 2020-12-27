import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { emailSignInStart } from "../../redux/User/user.actions";
import { motion } from "framer-motion";
const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const SignIn = () => {
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (currentUser) {
      resetForm();
      history.push("/");
    }
  }, [currentUser]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5 }}
    >
      <div className="header">
        <h1>Sign In</h1>
        <a onClick={() => history.goBack()}>Go Back</a>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">E-mail</label>
        <br />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label htmlFor="">Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Log In</button>
      </form>
    </motion.div>
  );
};

export default SignIn;
