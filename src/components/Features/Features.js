import { Card, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Features = () => {
  return (
    <Container sx={{ py: 8, bgcolor: "primary.main" }}>
      <h3>Feautes</h3>
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
                  height: 200,
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
                  height: 200,
                  bgcolor: "#ffb605",
                  display: "flex",
                  gap: 0,
                  borderRadius: 0,
                  alignItems: "center",
                  p: 6,
                }}
              >
                <h3 className="number">94</h3>

                <h3 className="number-text">PROGRAMS & COURSES</h3>
              </Card>
            </Grid>
          }
          {
            <Grid item xs={2} sm={4} md={4}>
              <Card
                sx={{
                  height: 200,
                  bgcolor: "#f0aa03",
                  display: "flex",
                  gap: 0,
                  borderRadius: 0,

                  alignItems: "center",
                  p: 6,
                }}
              >
                <h3 className="number">14</h3>

                <h3 className="number-text">YEARS OF EXPERIENCE</h3>
              </Card>
            </Grid>
          }
        </Grid>
      </Box>
    </Container>
  );
};

export default Features;
