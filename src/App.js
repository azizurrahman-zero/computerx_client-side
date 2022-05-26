import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blogs from "./Pages/Blogs/Blogs";
import AddPart from "./Pages/Dashboard/AddPart";
import AddReview from "./Pages/Dashboard/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Payment from "./Pages/Dashboard/Payment";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
import RequireAdmin from "./Pages/LogIn/RequireAdmin";
import RequireAuth from "./Pages/LogIn/RequireAuth";
import SignUp from "./Pages/LogIn/SignUp";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Pages/Shared/Footer";
import NavBar from "./Pages/Shared/NavBar";
import NotFound from "./Pages/Shared/NotFound";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />}></Route>
          <Route path="/dashboard/add-review" element={<AddReview />}></Route>
          <Route path="/dashboard/my-orders" element={<MyOrders />}></Route>
          <Route path="/dashboard/payment/:id" element={<Payment />}></Route>
          <Route
            path="/dashboard/make-admin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/manage-orders"
            element={
              <RequireAdmin>
                <ManageOrders />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/add-part"
            element={
              <RequireAdmin>
                <AddPart />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/my-portfolio" element={<MyPortfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
