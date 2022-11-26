import Login from "./pages/loginPage";
import NuPage from "./pages/nuPage";
import { useState } from "react";

function App() {
  const [loginPage, setPage] = useState(true);

  return (
    <>
      {loginPage === true ? (
        <Login setPage={setPage} />
      ) : (
        <NuPage setPage={setPage} />
      )}
    </>
  );
}

export default App;
