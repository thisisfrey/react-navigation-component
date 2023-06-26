import Breadcrumbs from "src/shared/Breadcrumbs/Breadcrumbs";


export default function ChildOne() {
  return (
    <div>
      <Breadcrumbs
        links={[
          { name: "Parent 1", link: "/parent-one" },
          {
            name: "Child 1",
          },
        ]}
      />
      <h3>ChildOne</h3>
    </div>
  );
}
