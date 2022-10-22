const redux = require("redux");

const counterReduer = (state = { counter: 0 }, action) => {
  if (action.type === "INC") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "INC5") {
    return {
      counter: state.counter + 5,
    };
  }

  if (action.type === "DEC") {
    return {
      counter: state.counter - 1,
    };
  }

  return {
    counter: state.counter,
  };
};

const store = redux.createStore(counterReduer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "INC" });

store.dispatch({ type: "INC5" });

store.dispatch({ type: "DEC" });
