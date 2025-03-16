import { BrowserRouter } from "react-router";
import Router from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import defaultOptions from "src/configs/reactQuery";
import Layouts from "./layouts/Layouts";

function App() {
  const queryClient = new QueryClient({
    defaultOptions,
  });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layouts>
          <Router />
        </Layouts>
        <ReactQueryDevtools />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
