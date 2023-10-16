import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementbyAmount,
  reset,
} from "../redux/counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.count);
  return (
    <div
      style={{ height: "70vh" }}
      className="d-flex justify-content-center align-items-center w-100 "
    >
      <div className="d-flex justify-content-center border rounded align-items-center flex-column w-25 p-5">
        <h1>{count}</h1>
        <div className="d-flex justify-content-between w-100 mt-5 mb-3">
          <button
            onClick={() => dispatch(decrement())}
            className="btn btn-warning me-1"
          >
            DECREMENT
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="btn btn-danger me-1"
          >
            RESET
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="btn btn-success"
          >
            INCREMENT
          </button>
        </div>
        <button
          onClick={() => dispatch(incrementbyAmount(5))}
          className="btn btn-primary"
        >
          INCREMENT BY AMOUNT
        </button>
      </div>
    </div>
  );
}

export default Counter;
