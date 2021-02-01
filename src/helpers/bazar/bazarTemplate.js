import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import CarteBazar from './carteBazar'



const useStyles = makeStyles((theme) => ({
  root: {
     display: 'flex',
     justifyContent: 'center',		
    // alignContent:'center',
    backgroundColor: '	#808080',
  },
  // overwriteBottom: {
  //   backgroundColor: '	#9E9547',
  //   color:'#FFF6B5',
  // },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}))



const BazarTemplate =  ( k)=> {

const classes = useStyles();

const data = useStaticQuery(graphql`   
{
 bazar: allContentfulAlgolia {
    nodes {
      title
      id
      slug
      image {
        fixed( width:200, height:200){
          ...GatsbyContentfulFixed
        }

      }
    }
    totalCount
  }
}
`)  

// console.log(k)
  return(
    <div className={classes.root}>
      <Grid item='true' xs={12} sm={6}  > 
      <Box style={{ textAlign: 'center', marginTop:'1em'}}>
      <img alt="" src="https://avatars.githubusercontent.com/u/75025115?s=460&u=a3c407ef44ca0e0ac7bb597514e39db168594180&v=4" style={{ borderRadius: '50%', width:'5em'}}/>
      <h3 style={{color: '#FFF6B5', textShadow: '1px 1px 2px black'}}>C est le  bazar !!!</h3>
      </Box>
      <Box style={{ margin:'1em'}}>
      <CarteBazar
      bazar= {data.bazar} 
      k={k}
      /> 
      </Box>
      </Grid>
    </div>
  );
}

export default BazarTemplate