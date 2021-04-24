import ProtectedRoute from "./auth/protected-route";
import Homepage from "./pages/homepage.component";

const App = () => {
  // if(isLoading){
  //   // display some sort of loader
  // }

  return (
    <>
      <ProtectedRoute path="/" component={Homepage} />
    </>
  );
}

export default App;
