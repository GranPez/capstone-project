import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import StudyInc_White from './/StudyIncLogo-White (1).jpg';


const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-around',
  },
  left: {
    display: 'flex',
    fontSize: 12,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(1),
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(1),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>

              
            <div className={classes.left} />         
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.left}
            href="/"
          >
            {'Home Page'}
          </Link>
          <div className={classes.left} />         
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.left}
            href="/src/components/Resume/ProfessionalDesignationForm.js"
          >
            {'Professional Designation'}
          </Link>

          <div className={classes.left} />
          <Link
            color="inherit"
            variant="h6"
            underline="none"
            className={classes.left}
            href="/src/components/Resume/EducationList.js"
          >
            {'Education'}
          </Link>

          <div className={classes.left} />        
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.left}
            href="/src/components/Resume/QualificationsList.js"
          >
            {'Qualifications'}
          </Link>

          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.left}
            href="/src/components/Resume/CoreCompetenciesList.js"
          >
            {'Core Competencies'}
          </Link>

          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.left}
            href="/src/components/Resume/WorkExperienceList.js"
          >
            {'Work Experience'}
          </Link>

          <div className={classes.left} />        
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.left}
            href="/src/components/Resume/AchievmentsList.js"
          >
            {'Achievements'}
          </Link>

          <div className={classes.left} />        
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.left}
            href="/src/components/Resume/ContactList.js"
          >
            {'Contact'}
          </Link>

          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.left}
            href="/src/components/Resume/ReferenceList.js"
          >
           {'Reference'}
          </Link>

          <div className={classes.left} />        
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.left}
            href="/src/components/Resume/TellMeAboutYouForm.js"
          >
            {'About Me'}
          </Link>

          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.left}
            href="/src/components/Resume/Video.js"
          >
            {'Video'}
          </Link>

          

         

          <div className={classes.right} />
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/src/SignIn.js"
            >
              {'Sign In'}
            </Link>

            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="/src/SignUp.js"
            >
              {'Sign Up'}
            </Link>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);