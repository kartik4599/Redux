import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

import { counterAction } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const disp = useDispatch();
  const toggleCounterHandler = () => {
    disp(counterAction.toggle());
  };

  const increase = () => {
    disp(counterAction.increment(1));
  };

  const increase5 = () => {
    disp(counterAction.increment(5));
  };

  const decrease = () => {
    disp(counterAction.decrement(1));
  };

  const decrease5 = () => {
    disp(counterAction.decrement(5));
  };

  return (
    <main className={classes.counter}>
      {counter.showCounter && (
        <div>
          <h1>Redux Counter</h1>
          <div className={classes.value}>{counter.counter}</div>
        </div>
      )}
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
