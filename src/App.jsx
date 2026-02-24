import React, { Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Product from "./pages/Product";
import ProductsPage from "./pages/ProductsPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDetailContext from "./context/UserDetailContext";

const App = () => {
  const queryClient = new QueryClient();
  const [userDetails, setUserDetails] = useState({
    orders: [],
    token: null,
  });

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/products">
                  <Route index element={<ProductsPage />} />
                  <Route path=":productId" element={<Product />} />
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
};

export default App;
