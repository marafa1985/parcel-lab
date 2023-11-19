import { OrderDetailsProvider } from "context/OrderDetailsContext";
import { AppRouter } from "Components/particle/AppRouter/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <OrderDetailsProvider>
        <AppRouter />
      </OrderDetailsProvider>
    </BrowserRouter>
  );
}

export default App;
