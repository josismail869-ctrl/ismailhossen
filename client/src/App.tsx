import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { Toaster } from "sonner";
import { Route, Switch } from "wouter";
import { trpc } from "./lib/trpc";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Vip from "./pages/vip";

export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [httpBatchLink({ url: "/api/trpc" })],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/vip" component={Vip} />
          <Route component={NotFound} />
        </Switch>
        <Toaster theme="dark" position="bottom-right" />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
