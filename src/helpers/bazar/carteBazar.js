import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Img from "gatsby-image"
import Box from '@material-ui/core/Box'


const useStyles = makeStyles((theme) => ({
  media: {
    paddingTop: '10%', // 16:9   
  },
}))
 
const CarteBazar =  ({bazar, k})=> {

const classes = useStyles()
const title= k.pageContext.title
console.log(title)


	return (
		<>
		{bazar.nodes.map((node) => {
			if (title === node.title){

			return (
				<Card style={{marginTop: '2em', backgroundColor: '#FFF6B5', boxShadow: '10px 5px 5px black'}} key={node.id} >
					<FavoriteIcon style={{color: 'red'}}/>
					<Box style={{alignItems: 'center', textAlign: 'center', color:'red'}}>
						<p>{node.slug}</p>
					{/* {node.image  === null ? '' : <Img fluid={node.image.fluid} />}  */}
					{node.image !== null &&(<Img fixed={node.image.fixed} className= {classes.media}/>)}
					</Box>
				</Card>
			);
			}
		})
		}
 		</>
	);
}

export default CarteBazar