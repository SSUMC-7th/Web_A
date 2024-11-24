import MainRoute from "@/route/route";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
        <Provider store={store}>
          <MainRoute />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
