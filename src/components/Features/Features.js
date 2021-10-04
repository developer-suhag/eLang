import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import BusinessEnglish from "../../images/bussiness-english.jpg";
import juniorProgram from "../../images/junior-program.jpg";
import languageTest from "../../images/language-tests.jpg";

const Features = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              className="animate__animated animate__fadeInLeft"
            >
              <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={languageTest}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Language Tests
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Generally, five types of language tests are given to
                      language reamers in order to make decisions: placement
                      tests, diagnostic tests, achievement tests, proficiency
                      tests and aptitude tests.
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ py: 2 }}>
                    <Link to="/courses">
                      <Button variant="outlined" size="small" color="error">
                        Learn More
                      </Button>
                    </Link>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          }
          {
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              className="animate__animated animate__fadeInUp"
            >
              <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={BusinessEnglish}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Business English Programs
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      This Specialization is designed to teach you to
                      communicate effectively in English in professional
                      contexts. You will expand your English vocabulary, improve
                      your ability to write and speak in English...
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ py: 2 }}>
                    <Link to="/courses">
                      <Button variant="outlined" size="small" color="error">
                        Learn More
                      </Button>
                    </Link>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          }
          {
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              className="animate__animated animate__fadeInRight"
            >
              <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={juniorProgram}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Junior Programs
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Junior Achievement is the world's largest organization
                      dedicated to educating students in grades K-12 about
                      entrepreneurship, work readiness and financial literacy
                      through...
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ py: 2 }}>
                    <Link to="/courses">
                      <Button variant="outlined" size="small" color="error">
                        Learn More
                      </Button>
                    </Link>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          }
        </Grid>
      </Box>
    </Container>
  );
};

export default Features;
