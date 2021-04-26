import ProtectedRoute from "./auth/protected-route";
import Homepage from "./pages/homepage.component";
import {SocketContext, socket} from './context/socket';

const App = () => {
  return (
    <>
      <SocketContext.Provider value={socket}>
        <ProtectedRoute path="/" component={Homepage} />
      </SocketContext.Provider>
    </>
  );
}

export default App;
