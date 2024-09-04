import AuthLayout from "./components/auth/layout";
import { Routes, Route } from "react-router-dom";
import AuthLogin from "./pages/Auth/login";
import AuthRegister from "./pages/Auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/Admin/dashboard";
import AdminOrders from "./pages/Admin/orders";
import AdminSidebar from "./components/admin-view/sidebar";
import AdminFeatures from "./pages/Admin/features";
import ShoppingLayout from "./components/shopping-view/layout";
import ShoppingAccount from "./pages/Shopping-view/account";
import ShoppingCheckout from "./pages/Shopping-view/checkout";
import ShoppingHome from "./pages/Shopping-view/home";
import ShoppingListing from "./pages/Shopping-view/listing";

function App() {
  return (
    <>
      <h1>Header Component</h1>
      <Routes>
        {/* Parent Route */}
        <Route path="/auth" element={<AuthLayout />}>
          {/* Nested Routes (Note the paths are relative) */}
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/admin" element={<AdminLayout/>}>
        <Route path="dashboard" element={<AdminDashboard/>}/>
        <Route path="features" element={<AdminFeatures/>}/>
        <Route path="orders" element={<AdminOrders/>}/>
        <Route path="products" element={<AdminSidebar/>}/>
        </Route>

        <Route path="/shop" element={<ShoppingLayout/>}>
        <Route path="account" element={<ShoppingAccount/>}/>
        <Route path="checkout" element={<ShoppingCheckout/>}/>

        <Route path="home" element={<ShoppingHome/>}/>
        <Route path="listing" element={<ShoppingListing/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
