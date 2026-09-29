import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { Toaster } from "sonner";
import { Route, Switch } from "wouter";
import { trpc } from "./lib/trpc";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import WorkspaceKnowledge from "./pages/workspace/knowledge";
import WorkspaceMembership from "./pages/workspace/membership";
import WorkspaceOverview from "./pages/workspace/overview";
import WorkspaceSessions from "./pages/workspace/sessions";

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
          <Route path="/workspace" component={WorkspaceOverview} />
          <Route path="/workspace/sessions" component={WorkspaceSessions} />
          <Route path="/workspace/knowledge" component={WorkspaceKnowledge} />
          <Route path="/workspace/membership" component={WorkspaceMembership} />
          <Route component={NotFound} />
        </Switch>
        <Toaster theme="dark" position="bottom-right" />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
