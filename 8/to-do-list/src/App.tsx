import { BrowserRouter } from "react-router-dom";
import MainRoute from "./route/route";
import { ToastProvider } from "./components/ui/toast";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
      <ToastProvider>
        <MainRoute />
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
