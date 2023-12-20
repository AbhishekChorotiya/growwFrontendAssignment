import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payments from "./components/paymentspage/payments";
import Checkout from "./components/checkout/checkout";
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from "react-query";
import Confirm from "./components/order_confirmation/confirm";

function App() {

  const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        refetchIntervalInBackground:false,
        refetchOnMount:false,
        refetchOnWindowFocus:false,
        refetchOnReconnect:false,
        staleTime:Infinity,
        retry:0,
        cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      },
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Checkout />} />
          <Route path="/payment" element={<Payments />} />
          <Route path="/confirmation" element={<Confirm />} />
          
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
