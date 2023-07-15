import { Routes, Route } from "react-router-dom";
import { flatContent } from "src/shared/content/ContentX";
import { favorites } from "src/shared/content/FavoritesX";
import Home from "src/modules/Home/Home";

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
        <Route path={`${page.path}`} element={page.element} key={index} />
      ))}
      {flatContent.map((el) => (
        <Route path={el.fullRoute} element={el.component()} key={el.id} />
      ))}
      <Route path={favorites.fullRoute} element={favorites.component()} />
    </Routes>
  );
};

export default Routing;
