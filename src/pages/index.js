import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { navigate, graphql } from "gatsby"

import AlgoliaBoxSearch from '../components/algolia/search'



const useStyles = makeStyles((theme
  ) => ({
  root: {
    display: 'flex'
  },
  paper: {
    display: 'flex',
    padding: theme.spacing(2),
    color: 'white',
    backgroundColor:'gray',
    height: '15vh',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    textShadow: '1px 1px 2px black',
  },
  paper1: {
    display: 'flex',
    padding: theme.spacing(2),
    color: 'white',
    backgroundColor:'gray',
    fontSize: '1.5rem',
    textShadow: '1px 1px 2px black',
    height: '30vh',
    alignItems: 'center',
    justifyContent: 'center'
  },
}));

export default function IndexPage() {
  const classes = useStyles();

  return (
  <Container >
    <Box  m={5} borderTop={1} borderLeft={1}  >
        <h1 style={{textAlign: 'center', color:'gray'}}>Exemple de Recherche avec contentful  et algolia  </h1>
    </Box>
    <Box style={{marginTop: '10vh'}}>
      <AlgoliaBoxSearch />
    <Grid container spacing={2} 
    direction='row-reverse' 
    justify="center"
    alignItems="center">
        <Grid item xs={4}  >
          <Paper className={classes.paper1 } style={{backgroundColor:'#FFF6B5'}}
          onClick={()=>(navigate('/cuisine/9'))}>
           cuisine
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper1} style={{backgroundColor:'#5240A8'}}
          onClick={()=>(navigate('/informatique/4'))}>
            Informatique
          </Paper>
        </Grid>
        <Grid item xs= {6}>
          <Paper className={classes.paper} style={{backgroundColor:'#A58EF5'}}
          onClick={()=>(navigate('/phylosophie/5'))}>
            phylosophie
          </Paper>
        </Grid> 
    </Grid>
    </Box>
  </Container>
  );
  
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`