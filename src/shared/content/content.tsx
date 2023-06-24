import ModuleView from "../moduleView/moduleView";
// module imports
import ChildOne from "../../modules/ParentOne/ChildOne";
import ChildTwo from "../../modules/ParentOne/ChildTwo";
import FirstChild from "../../modules/ParentTwo/FirstChild";
import SecondChild from "../../modules/ParentTwo/SecondChild";
import ThirdChild from "../../modules/ParentTwo/ThirdChild";
import ParentThree from "../../modules/ParentThree/ParentThree";
// icons
import Diversity1Icon from "@mui/icons-material/Diversity1";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MapIcon from "@mui/icons-material/Map";
import HouseIcon from "@mui/icons-material/House";
import SignpostIcon from "@mui/icons-material/Signpost";
import LandscapeIcon from "@mui/icons-material/Landscape";

export interface IContent {
  id: string;
  name: string;
  route: string;
  fullRoute: string;
  component: () => JSX.Element;
  icon: JSX.Element;
  modules?: IContent[];
}

export interface IContentWithoutFullPath {
  id: string;
  name: string;
  route: string;
  component: () => JSX.Element;
  icon: JSX.Element;
  modules?: IContentWithoutFullPath[];
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
    id: "1",
    name: "Parent 1",
    route: "/parent-one",

    component: () => <ModuleView name="Parent 1" />,
    icon: <Diversity1Icon />,
    modules: [
      {
        id: "100",
        name: "Child 1",
        route: "/child-one",
        component: () => <ChildOne />,
        icon: <ChildCareIcon />,
      },
      {
        id: "110",
        name: "Child 2",
        route: "/child-two",
        component: () => <ChildTwo />,
        icon: <ChildCareIcon />,
      },
    ],
  },
  {
    id: "2",
    name: "Parent 2",
    route: "/parent-two",

    component: () => <ModuleView name="Parent 2" />,
    icon: <LocationCityIcon />,
    modules: [
      {
        id: "20",
        name: "Child 1",
        route: "/child-one",
        component: () => <FirstChild />,
        icon: <HouseIcon />,
      },
      {
        id: "21",
        name: "Child 2",
        route: "/child-two",
        component: () => <SecondChild />,
        icon: <MapIcon />,
      },
      {
        id: "22",
        name: "Child 3",
        route: "/child-three",
        component: () => <ThirdChild />,
        icon: <SignpostIcon />,
      },
    ],
  },
  {
    id: "3",
    name: "Parent 3",
    route: "/parent-three",
    component: () => <ParentThree />,
    icon: <LandscapeIcon />,
    modules: [],
  },
]);

export const flatContent = flatten(content);
