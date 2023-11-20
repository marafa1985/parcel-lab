import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Components/particle/AppRouter/AppRouter";
import { OrderDetailsContextProvider } from "./context/OrderDetailsContext";

function App() {
  return (
    <BrowserRouter>
      <OrderDetailsContextProvider>
        <AppRouter />
      </OrderDetailsContextProvider>
    </BrowserRouter>
  );
}

export default App;
