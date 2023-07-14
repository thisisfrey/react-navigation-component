import { Paper, Typography } from "@mui/material";

export interface IContentBoxProps {
  title?: string | undefined;
  subtitle?: string | undefined;
  content: JSX.Element | undefined;
  // Optional property to set width of paper component, e.g. 50%, fit-content
  width?: string | undefined;
}

const ContentBox = ({
  title,
  subtitle,
  content,
  width = "100%",
}: IContentBoxProps): JSX.Element => {
  return (
    <Paper variant="outlined" elevation={0} sx={{ p: 2, mt: 1, mb: 1, width }}>
      {title && <Typography variant="h5">{title}</Typography>}
      {subtitle && (
        <Typography variant="subtitle1" color="rgba(0, 0, 0, 0.6)">
          {subtitle}
        </Typography>
      )}
      {content}
    </Paper>
  );
};

export default ContentBox;
