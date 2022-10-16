import { Button, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container component={Paper}>
      <Typography gutterBottom variant="h3">
        Oops - Not found
      </Typography>
      <Button
        size="large"
        fullWidth
        sx={{ marginTop: "1rem" }}
        component={Link}
        to={"/catalog"}
      >
        Go back to catalog page
      </Button>
    </Container>
  );
}
