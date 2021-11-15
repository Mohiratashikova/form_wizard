import "./App.css";
import FormContainer from "./components/FormContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";

axios.defaults.baseURL =
  "https://us-central1-form-c4eaf.cloudfunctions.net/api";
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
