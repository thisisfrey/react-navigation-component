import { Box, Typography } from "@mui/material";
import Breadcrumbs from "src/shared/Breadcrumbs/Breadcrumbs";
import ContentBox from "src/shared/ContentBox/ContentBox";

export default function ChildTwo() {
  return (
    <Box>
      <Breadcrumbs
        links={[
          { name: "Parent 1", link: "/parent-one" },
          {
            name: "Child 2",
          },
        ]}
      />
      <Box>
        <ContentBox
          title="Child Two"
          subtitle="Child Two Subtitle"
          content={content()}
        />
        <ContentBox title="Title" subtitle="Subtitle" content={content()} />
      </Box>
    </Box>
  );
}

const content = (): JSX.Element => {
  return <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quidem voluptates, placeat est perspiciatis velit consequatur, quam maxime minus voluptatum consequuntur fuga cumque non nesciunt voluptas labore sapiente mollitia officia?</Typography>;
};
