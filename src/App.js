import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { LoginPage, SignUpPage, HomePage, ErrorPage } from "./pages/index.jsx";
import { Navbar, NavigationBar, RequireAuth } from "./components";
import { Toaster } from "react-hot-toast";

function App() {
  const location = useLocation();
  const isAuthPage = ["/login", "/signup"].includes(location.pathname);

  const routes = [
    {
      path: "/",
      element: (
        <RequireAuth>
          <HomePage />
        </RequireAuth>
      )
    },
    {
      path: "/explore",
      element: (
        <RequireAuth>
          <HomePage />
        </RequireAuth>
      )
    },
    {
      path: "/bookmarks",
      element: (
        <RequireAuth>
          <HomePage />
        </RequireAuth>
      )
    },
    {
      path: "/profile/:userId",
      element: (
        <RequireAuth>
          <HomePage />
        </RequireAuth>
      )
    },
    {
      path: "/search",
      element: (
        <RequireAuth>
          <HomePage />
        </RequireAuth>
      )
    },
    {
      path: "/post/:postId",
      element: (
        <RequireAuth>
          <HomePage />
        </RequireAuth>
      )
    }
  ];

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        {routes.map(({ path, element }, idx) => (
          <Route path={path} element={element} key={idx} />
        ))}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Toaster />
      {!isAuthPage && <NavigationBar />}
    </>
  );
}

export default App;
