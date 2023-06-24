import ModuleView from "../moduleView/moduleView";
import { IContent } from "./content";
import StarIcon from "@mui/icons-material/Star";

export const favorites: IContent = {
  id: "0",
  name: "Favorites",
  route: "/favorites",
  fullRoute: "/favorites",
  component: () => <ModuleView isFavorites={true}/>,
  icon: <StarIcon />,
};
