import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./layout/Home";
import Services from "./layout/Services";
import Company from "./layout/Company";
import Careers from "./layout/Careers";
import NotFound from "./routes/NotFound/NotFound";
import CareerDetailsLayout from "./routes/Careers/CareerDetails/CareerDetailsLayout";
import CareerDetailsError from "./routes/Careers/CareerDetails/CareerDetailsError";
import { careerDetailsLoader } from "./loaderfunctions/careerDetailsLoader";
import DetailsTabContent from "./routes/Careers/CareerDetails/Tabs/DetailsTabContent/DetailsTabContent";
import RequirementsTabContent from "./routes/Careers/CareerDetails/Tabs/RequirementsTabContent/RequirementsTabContent";
import ResponsibilitiesTabContent from "./routes/Careers/CareerDetails/Tabs/ResponsibilitiesTabContent/ResponsibilitiesTabContent";
import { blogPostsLoader } from "./loaderfunctions/blogPostsLoader";
import { lazy, Suspense } from "react";
import RootLayout from "./layout/RootLayout";
import BlogPostDetail from "./routes/Blog/BlogPostDetail/BlogPostDetail";
import { postDetailLoader } from "./loaderfunctions/postDetailLoader";
import BlogPostDetailError from "./routes/Blog/BlogPostDetail/BlogPostDetailError";
import ContactLayout from "./layout/ContactLayout";

const Blog = lazy(() => import("./layout/Blog"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="company" element={<Company />} />
        <Route path="careers" element={<Careers />}></Route>
        <Route
          path="careers/:id"
          loader={careerDetailsLoader}
          errorElement={<CareerDetailsError />}
          element={<CareerDetailsLayout />}
        >
          <Route
            path="details"
            loader={careerDetailsLoader}
            element={<DetailsTabContent />}
          />
          <Route
            path="requirements"
            loader={careerDetailsLoader}
            element={<RequirementsTabContent />}
          />
          <Route
            path="responsibilities"
            loader={careerDetailsLoader}
            element={<ResponsibilitiesTabContent />}
          />
        </Route>

        <Route
          path="blog"
          element={
            <Suspense fallback={<>Loading...</>}>
              <Blog />
            </Suspense>
          }
          loader={blogPostsLoader}
        />

        <Route
          path="blog/:id"
          element={<BlogPostDetail />}
          errorElement={<BlogPostDetailError />}
          loader={postDetailLoader}
        />

        <Route path="contact" element={<ContactLayout />} />

        <Route path="*" element={<NotFound />} />
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
