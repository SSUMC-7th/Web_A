import { BrowserRouter } from "react-router-dom";
import MainRoute from "./route/route";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
      <MainRoute />
    </BrowserRouter>
  );
}

export default App;
