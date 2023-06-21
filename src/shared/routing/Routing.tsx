import { Routes, Route } from "react-router-dom";
import { flatContent } from "../../shared/content/content";
import Home from "../../modules/home/home";

const pages = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
];

const Routing = () => {
  return (
    <Routes>
      {pages.map((page, index) => (
        <Route
          data-cy={`route-${page.name}`}
          path={`${page.path}`}
          element={page.element}
          key={index}
        />
      ))}
      {flatContent.map((page) => (
        <Route
          data-cy={`route-${page.name}`}
          path={`${page.fullRoute}`}
          element={page.component()}
          key={page.id}
        />
      ))}
    </Routes>
  );
};

export default Routing;
