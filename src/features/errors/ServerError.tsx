import { Button, Divider, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link, useLocation } from "react-router-dom";

export default function ServerError() {
  const { state } = useLocation();

  return (
    <Container component={Paper}>
      {state?.error ? (
        <>
          <Typography variant="h3" color="error" gutterBottom>
            {state.error.title}
          </Typography>
          <Divider />
          <Typography>
            {state.error.detail || "Internal server error"}
          </Typography>
        </>
      ) : (
        <Typography variant="h3" gutterBottom>
          Server error
        </Typography>
      )}
      <Button
        fullWidth
        size="large"
        sx={{ marginTop: "1rem" }}
        component={Link}
        to={"/catalog"}
      >
        Go back to catalog page
      </Button>
    </Container>
  );
}
