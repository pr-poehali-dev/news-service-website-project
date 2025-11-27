
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SubscriptionPage from "./components/SubscriptionPage";
import EmployeeProfile from "./components/EmployeeProfile";
import EmployeeRegistry from "./components/EmployeeRegistry";
import MikhailProfile from "./pages/MikhailProfile";
import AdminPanel from "./pages/AdminPanel";
import NotificationsPage from "./pages/NotificationsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/employee-profile" element={<EmployeeProfile />} />
          <Route path="/employee-registry" element={<EmployeeRegistry />} />
          <Route path="/mikhail-nefedov" element={<MikhailProfile />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;