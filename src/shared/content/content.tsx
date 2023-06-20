import StarIcon from "@mui/icons-material/Star";
import ModuleView from "../moduleView/moduleView";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ChildCareIcon from "@mui/icons-material/ChildCare";

import LocationCityIcon from "@mui/icons-material/LocationCity";
import MapIcon from "@mui/icons-material/Map";
import HouseIcon from "@mui/icons-material/House";
import SignpostIcon from "@mui/icons-material/Signpost";
import LandscapeIcon from "@mui/icons-material/Landscape";

type IAuthCheck = () => boolean;

export interface IContentWithoutFullPath {
  id: number;
  name: string;
  route: string;
  isAuth: boolean | IAuthCheck;
  component: () => JSX.Element;
  icon: JSX.Element;
  modules?: IContentWithoutFullPath[];
}

export interface IContent {
  id: number;
  name: string;
  route: string;
  isAuth: boolean | IAuthCheck;
  fullRoute: string;
  component: () => JSX.Element;
  icon: JSX.Element;
  modules?: IContent[];
}

const addFullPath = (
  content: IContentWithoutFullPath[],
  prefix = ""
): IContent[] => {
  return content.reduce<IContent[]>((acc, categoryOriginal) => {
    const category: IContent = {
      ...categoryOriginal,
      fullRoute: prefix + categoryOriginal.route,
      modules: [],
    };

    if (categoryOriginal.modules && categoryOriginal.modules.length > 0) {
      category.modules = addFullPath(categoryOriginal.modules, category.route);
    }

    return acc.concat(category);
  }, []);
};

const flatten = (content: IContent[]): IContent[] => {
  return content.reduce<IContent[]>((acc, categoryOriginal) => {
    const category: IContent = {
      ...categoryOriginal,
    };

    if (!category.modules || category.modules.length === 0) {
      return acc.concat(category);
    }

    return acc.concat(category, flatten(category.modules));
  }, []);
};

export const content: IContent[] = addFullPath([
  {
    id: 0,
    name: "Favoriten",
    route: "/favorites",
    isAuth: true,
    component: () => <ModuleView name="Favoriten" />,
    icon: <StarIcon />,
  },
  {
    id: 1,
    name: "Parent 1",
    route: "/parent-one",
    isAuth: true,
    component: () => <ModuleView name="Parent 1" />,
    icon: <Diversity1Icon />,
    modules: [
      {
        id: 10,
        name: "Child 1",
        route: "/child-one",
        isAuth: true,
        component: () => <h1>Child 1</h1>,
        icon: <ChildCareIcon />,
      },
      {
        id: 11,
        name: "Child 2",
        route: "/child-two",
        isAuth: true,
        component: () => <h1>Child 2</h1>,
        icon: <ChildCareIcon />,
      },
    ],
  },
  {
    id: 2,
    name: "Parent 2",
    route: "/parent-two",
    isAuth: true,
    component: () => <ModuleView name="Parent 2" />,
    icon: <LocationCityIcon />,
    modules: [
      {
        id: 20,
        name: "Child 1",
        route: "/child-one",
        isAuth: true,
        component: () => <h1>Child 1</h1>,
        icon: <HouseIcon />,
      },
      {
        id: 21,
        name: "Child 2",
        route: "/child-two",
        isAuth: true,
        component: () => <h1>Child 2</h1>,
        icon: <MapIcon />,
      },
      {
        id: 21,
        name: "Child 3",
        route: "/child-three",
        isAuth: true,
        component: () => <h1>Child 3</h1>,
        icon: <SignpostIcon />,
      },
    ],
  },
  {
    id: 3,
    name: "Parent 3",
    route: "/parent-three",
    isAuth: true,
    component: () => <h1>Parent 3</h1>,
    icon: <LandscapeIcon />,
    modules: [],
  },
]);

export const flatContent = flatten(content);
