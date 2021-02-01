import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import HitPreview from './unit'
import Box from '@material-ui/core/Box'

const searchClient = algoliasearch('GPYFWR2GYP', 'ca6217513b4118071b82959efa7cc693');


export default function AlgolSearch () {

  return (
    <InstantSearch searchClient={searchClient} indexName="blogAlgolia" style={{textAlign: 'center'}} >
       
        <Box p={5}>
        <p style={{fontStyle: 'italic', color:'grey'}}>
          RECHERCHE PAR THEME CUISINE  PHYLOSOPHIE  INFORMATIQUE
        </p>
          <SearchBox style={{width:'5rem'}}/>
        </Box>
        <Hits hitComponent={HitPreview} />
    </InstantSearch>

  )    
}