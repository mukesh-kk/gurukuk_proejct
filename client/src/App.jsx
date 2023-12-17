import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LoginScreen from "./screens/loginScreen/LoginScreen";

import useSessionStorage from "./utils/hooks";
import Dashboard from "./screens/dashboardScreen/Dashboard";
import SignupScreen from "./screens/signupScreen/SignupScreen";
import EditUserScreen from "./screens/editUserScreen/EditUserScreen";
import UserDetailScreen from "./screens/userDetailScreen/UserDetailScreen";
import { useState ,useEffect} from "react";
function App() {
  const [user, setUser] = useSessionStorage("user", {});


  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    // Add event listeners when the component mounts
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Remove event listeners when the component unmounts
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []); 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen setUser={setUser} isOnline={isOnline} />} />
          <Route path="/dashboard" element={<Dashboard user={user}  isOnline={isOnline}/>} />
          <Route path ="/signup" element={<SignupScreen user={user} isOnline={isOnline} />} />
          <Route path ="/editUser" element={<Outlet/>} >
          <Route path=":userId" element={<EditUserScreen  isOnline={isOnline}/>} />
          </Route>
          <Route path ="/user" element={<Outlet/>} >
          <Route path=":userId" element={<UserDetailScreen isOnline={isOnline} />} />
          </Route>
          <Route path="*" element={<p style={{textAlign:"center",margin:"20%"}}>Page not found</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
