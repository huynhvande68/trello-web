import React from 'react'
import Box from '@mui/material/Box'
import Card from './Card/Card'

const COLUMN_HEADER_HEIGHT = '50px';
const COLUMN_FOOTER_HEIGHT = '55px';

function ListCards({cards}) {
  return (
    <Box sx={{
      p:'0 5px',
      m:'0 5px',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      overflowY: 'auto',
      overflowX: 'hidden',
      maxHeight: (theme) => `calc(
      ${theme.trello.boardContentHeight} - 
      ${theme.spacing(5)} -
      ${COLUMN_HEADER_HEIGHT} -
      ${COLUMN_FOOTER_HEIGHT}
      )`,
      '&::-webkit-scrollbar': {
      width: '6px',
      height: '6px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ced0da',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#bfc2cf',
      }}}>
      {cards?.map(card => <Card key={card._id} card={ card } />)}
      

    </Box>
  )
}

export default ListCards
