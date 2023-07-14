import { Box, Typography } from "@mui/material";
import Breadcrumbs from "src/shared/Breadcrumbs/Breadcrumbs";
import ContentBox from "src/shared/ContentBox/ContentBox";

export default function ChildOne() {
  return (
    <Box>
      <Breadcrumbs
        links={[
          { name: "Parent 1", link: "/parent-one" },
          {
            name: "Child 1",
          },
        ]}
      />

      <ContentBox
        title="Child One"
        content={<Typography variant="body1">Child One</Typography>}
      />
    </Box>
  );
}
