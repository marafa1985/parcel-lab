import { OrderDetailsContextProvider } from "context/OrderDetailsContext";
import { AppRouter } from "components/particle/AppRouter/AppRouter";
import { BrowserRouter } from "react-router-dom";

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
