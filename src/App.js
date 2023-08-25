import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { LoginPage, SignUpPage, HomePage } from "./pages/index.jsx";
import { Navbar, RequireAuth } from "./components";
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
    { path: "/bookmarks", element: <HomePage /> },
    { path: "/profile/:userId", element: <HomePage /> },
    { path: "/search", element: <HomePage /> },
    { path: "/post/:postId", element: <HomePage /> }
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
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
