import { useDispatch } from "react-redux";
import CalculateButton from "./Components/Stats/CalculateButton/CalculateButton";
import Stats from "./Components/Stats/Stats";
import Table from "./Components/Table/Table";
import { fetchUsers } from "./redux/AC/actionCreators";
import './app.scss'

function App() {

  const dispatch = useDispatch();

  const getUsersHandler = ()=> {
    dispatch(fetchUsers());
  }

  return (
    <div className="App">
      <Table/>
      <div className="create">
        <CalculateButton callback={getUsersHandler}/>
      <Stats/>
      </div>

    </div>
  );
}

export default App;
