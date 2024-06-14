
import HomePage from "./components/pages/home-page"
import LogInPage from "./components/pages/log-in-page"
import SignInPage from "./components/pages/sign-in-page"
import DashboardPage from "./components/pages/dashboard-page"
import { Routes, Route } from "react-router-dom"

import "./App.scss"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </>
  )
}

export default App
