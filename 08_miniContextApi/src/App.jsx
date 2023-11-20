
import Profile from "./Components/Profile";
import { SignIn } from "./Components/Signin";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <SignIn />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
