import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import NavBarLayout from "./routes/NavBarLayout";
import Home from "./routes/Home/Home";
import Services from "./routes/Services/Services";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBarLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
