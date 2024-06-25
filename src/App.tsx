import ProtectedRoute from "./components/pages/protected-route-page"
import HomePage from "./components/pages/home-page"
import LogInPage from "./components/pages/log-in-page"
import SignUpPage from "./components/pages/sign-up-page"
import DashboardPage from "./components/pages/dashboard-page"
import ProductPage from "./components/pages/product-page"
import { Routes, Route } from "react-router-dom"

import "./app.scss"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/product" element={<ProductPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
