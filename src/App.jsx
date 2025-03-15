import { BrowserRouter } from "react-router";
import Router from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import defaultOptions from "src/configs/reactQuery";

const queryClient = new QueryClient({
  defaultOptions,
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
        <ReactQueryDevtools />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
