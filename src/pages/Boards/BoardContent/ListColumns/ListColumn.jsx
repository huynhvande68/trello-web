import React from 'react'
import Box from '@mui/material/Box'
import Column from './Column/Column'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import Button from '@mui/material/Button'

function ListColumn() {
    


  return (
    <Box sx={{
      height: '100%',
      width: '100%',
      bgcolor:'inherit',
      overflowX: 'auto',
      overflowY: 'hidden',
      display: 'flex',
      '&::-webkit-scrollbar-track':{
        m: 2,
      }
      }}>
      <Column/>
      <Column/> 
      <Column/>
      {/* Box add new column */}
      <Box sx={{
        minWidth: '200px',
        maxWidth: '200px',
        mx: 2,
        borderRadius: '6px',
        height: 'fit-content',
        bgcolor: '#ffffff3d'
      }}>
        <Button sx={{color:'white',width:'100%', justifyContent: 'center', py: 1}} startIcon={<NoteAddIcon/>}>
          Add new column
        </Button>
      </Box> 
    </Box>
  )
}

export default ListColumn
