import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Details from "@/pages/Details";
import Exhibition from "@/pages/Exhibition";
import Minigame from "@/pages/Minigame";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/details" component={Details} />
      <Route path="/exhibition" component={Exhibition} />
      <Route path="/minigame" component={Minigame} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
