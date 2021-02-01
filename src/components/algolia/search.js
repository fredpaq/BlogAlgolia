import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';


import AlgolSearch from './algolSearch'

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div  style={{textAlign:'center', marginBottom:'5%'}}>
      <Button variant="contained"  style={{color: 'red'}}  onClick={handleClickOpen}>
        Recherche par thème
      </Button>
      <Dialog 
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >    
        <Button variant= 'contained'  style={{color: 'red'}} onClick={handleClose} >
            fermer
        </Button>
        <AlgolSearch  />
      </Dialog>
  
    </div>
  );
}