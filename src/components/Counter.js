import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const disp = useDispatch();
  const toggleCounterHandler = () => {
    disp({ type: "reset" }); 
  };

  const increase = () => {
    disp({ type: "increment" });
  };

  const increase5 = () => {
    disp({ type: "increment5" });
  };

  const decrease = () => {
    disp({ type: "decrement" });
  };

  const decrease5 = () => {
    disp({ type: "decrement5" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increase}>Increment</button>
        <button onClick={decrease}> Decrement</button>
      </div>
      <div>
        <button onClick={increase5}>Increment by 5</button>
        <button onClick={decrease5}> Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
