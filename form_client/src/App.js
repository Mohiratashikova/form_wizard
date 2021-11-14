import "./App.css";
import FormContainer from "./components/FormContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/form-c4eaf/us-central1/api";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <FormContainer />
        </header>
      </div>
    </Provider>
  );
}

export default App;
