import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import StudyInc_White from './/StudyIncLogo-White (1).jpg';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
//import StudyIncLogo200 from '/src/StudyIncLogo200';


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
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
            {/* <MenuIcon /> */}
          {/* </IconButton> */}

          <div>
              <img src={StudyInc_White}
              width="50%"
              height="50%"
              className={classes.logo}
              // box-shadow= "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
              alt="logo" /> 
              </div> 
        
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
            {'Achievments'}
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
              href="/"
            >
              {'Sign In'}
            </Link>

            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="/"
            >
              {'Sign Up'}
            </Link>
          {/* </div> */}
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