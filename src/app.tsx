// @refresh reload
import "./app.css";
import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>Create JD App</Title>
          <Suspense>
            <QueryClientProvider client={queryClient}>
              {props.children}
            </QueryClientProvider>
          </Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
