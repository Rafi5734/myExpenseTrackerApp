import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import History from "./Components/History/History";
import Dashboard from "./Components/Dashboard/Dashboard";
import Calculator from "./Components/Calculator/Calculator";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <NavigationBar></NavigationBar>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="history" element={<PrivateRoute><History /></PrivateRoute>} />
            <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="calculator" element={<PrivateRoute><Calculator /></PrivateRoute>} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
