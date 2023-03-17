// action type
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

// action create func
export const incrase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const incraseby = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

// state type
type CounterState = {
  count: number;
};
// initial state
const initialState: CounterState = {
  count: 10,
};

// type
type CounterAction =
  | ReturnType<typeof incrase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof incraseby>;
// reducer
function counter(
  state: CounterState = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case INCREASE:
      return {
        count: state.count + 1,
      };
    case DECREASE:
      return {
        count: state.count - 1,
      };
    case INCREASE_BY:
      return {
        count: state.count + action.payload,
      };
    default:
      return {
        count: state.count,
      };
  }
}

export default counter;
