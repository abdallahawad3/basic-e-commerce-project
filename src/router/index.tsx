import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import HomePage from "../pages";
import AboutPage from "../pages/About";
import ProductPage from "../pages/ProductPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Route>
    </>
  )
);

export default router;
