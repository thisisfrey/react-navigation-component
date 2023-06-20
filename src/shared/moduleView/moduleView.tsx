import Tile from "../../shared/tile/tile";
import { content, IContent } from "../../shared/content/content";
import { useState, useEffect } from "react";

interface IModuleView {
  name: string;
}

function ModuleView({ name }: IModuleView) {
  const [modules, setModules] = useState<IContent[] | undefined>([]);

  useEffect(() => {
    const category = content.find((el) => {
      return el.name === name;
    });
    setModules(category?.modules);
  }, [name]);

  return (
    <>
      {modules?.map((module, index) => (
        <Tile
          key={index}
          title={module.name}
          icon={module.icon}
          favoriteId={module.id}
        />
      ))}
      {modules?.length === 0 && <h1>No children</h1>}
    </>
  );
}

export default ModuleView;
