import "./App.css";
import { CounterContainer } from "./containers/CounterContainer";
import { ProfileContainer } from "./containers/ProfileContainer";
import { TodosContainer } from "./containers/TodosContainer";

function App() {
  return (
    <>
      <CounterContainer />
      <TodosContainer />;
      <ProfileContainer />
    </>
  );
}

export default App;
