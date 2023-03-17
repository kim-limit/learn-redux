import { useDispatch, useSelector } from "react-redux";
import { Counter } from "../components/Counter";
import { RootState } from "../modules";
import { decrease, incrase, incraseby } from "../modules/counter";

export const CounterContainer = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(incrase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  const onIncreaseBy = (diff: number) => {
    dispatch(incraseby(diff));
  };

  return (
    <div>
      <Counter
        count={count}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onIncreaseBy={onIncreaseBy}
      />
    </div>
  );
};
