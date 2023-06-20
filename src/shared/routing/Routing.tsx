import { Routes, Route } from "react-router-dom";
import { flatContent } from "../../shared/content/content";

const Routing = () => {
  return (
    <Routes>
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
