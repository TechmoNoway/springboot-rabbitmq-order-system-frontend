import { Route, Routes } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";

function App() {
  return (
    <>
      <main>
        <Routes>
          {/* Public Routes */}
          {/* <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SigninForm />} />
            <Route path="/sign-up" element={<SignupForm />} />
          </Route> */}

          {/* Private Routes */}
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
