import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://img.icons8.com/cotton/64/000000/suitcase--v2.png"
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                Make Professional Resumes in minutes
              </Typography>
              <Typography variant="h5">
                {'StudyInc enables users to create unique & eye-catching resumes '}  
                {'from 100+ professional templates from diverse industries.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://img.icons8.com/cotton/64/000000/graph.png"
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                Find your dream job
              </Typography>
              <Typography variant="h5">
                {'StudyInc provides latest and quality jobs from prominent startups and enterprises.'} 
                {' No matter you are looking for internships, opportunities of career change, part-time jobs or full-time jobs, you can find them with us!'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://img.icons8.com/cotton/128/000000/clock--v2.png"
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Hire Top Talent
              </Typography>
              <Typography variant="h5">
                {'By registering, you will access to our free job-posting service. '}
                {'StudyInc devotes to helping companies hire the right talent. StudyInc provides recruitment and professional head hunting consultations'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);