import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  checkUserSession,
  signOutUserStart,
} from "../../redux/User/user.actions";
import { useDispatch, useSelector } from "react-redux";
import './homepage.scss'

const mapState = (state) => ({
  currentUser: state.user.currentUser,
});
const Homepage = () => {
  const { currentUser } = useSelector(mapState);
  const history = useHistory()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  const signOut = () => {
    dispatch(signOutUserStart());
  };
  return (
    <div className='container'>
      <h3>Home Page</h3>
      {!currentUser && (
        <>
          <h1 style={{marginBottom: '50px'}}>Hello , <span>Guest</span> </h1>
          
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </>
      )}
      {currentUser && (
        <>
          <h1 style={{marginBottom: '50px'}}>Hello , <span>{currentUser.displayName}</span> </h1>
          <button onClick={() => signOut()}>Sign Out</button>
          <button onClick={() => history.push(`/vault/${currentUser.id}`)}>Go to Vault</button>
        </>
      )}
    </div>
  );
};

export default Homepage;
