import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store";
import classes from "./Auth.module.css";

const Auth = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const loginHandler=()=>{
    dispatch(authAction.login())
  }

  return (
    <main className={classes.auth}>
      <section>
        {!auth.isLogin && (
          <form>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button onClick={loginHandler}>Login</button>
          </form>
        )}
        {auth.isLogin && <h1>My User Profile</h1>}
      </section>
    </main>
  );
};

export default Auth;
