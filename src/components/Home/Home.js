import { Button, Card, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useHistory } from "react-router";
import "./Home.css";

const Home = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/services");
  };
  return (
    <section className="hero-section">
      <Container sx={{ p: 8, paddingBottom: 0 }}>
        <h3 className="hero-title">
          Learn languages and contect with the world
        </h3>
        <Button
          onClick={handleClick}
          sx={{ marginTop: 4 }}
          color="success"
          className="hero-btn"
          variant="outlined"
        >
          Start Course
        </Button>
        <Box sx={{ flexGrow: 1, marginTop: 12 }}>
          <Grid
            container
            spacing={{ xs: 0, md: 0 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {
              <Grid item xs={2} sm={4} md={4}>
                <Card
                  sx={{
                    bgcolor: "#febf28",
                    display: "flex",
                    gap: 0,
                    borderRadius: 0,
                    alignItems: "center",
                    p: 6,
                  }}
                >
                  <h3 className="number">10</h3>

                  <h3 className="number-text">GLOBAL LOCATIONS</h3>
                </Card>
              </Grid>
            }
            {
              <Grid item xs={2} sm={4} md={4}>
                <Card
                  sx={{
                    bgcolor: "#ffb605",
                    display: "flex",
                    gap: 0,
                    borderRadius: 0,
                    alignItems: "center",
                    p: 6,
                  }}
                >
                  <h3 className="number">10</h3>

                  <h3 className="number-text">GLOBAL LOCATIONS</h3>
                </Card>
              </Grid>
            }
            {
              <Grid item xs={2} sm={4} md={4}>
                <Card
                  sx={{
                    bgcolor: "#f0aa03",
                    display: "flex",
                    gap: 0,
                    borderRadius: 0,

                    alignItems: "center",
                    p: 6,
                  }}
                >
                  <h3 className="number">10</h3>

                  <h3 className="number-text">GLOBAL LOCATIONS</h3>
                </Card>
              </Grid>
            }
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Home;
