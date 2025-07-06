import React from 'react'
import {Card as MuiCard} from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

function Card() {
  return (
     <MuiCard sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)', overflow: 'unset'}}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg"
          title="green iguana"
        />
        <CardContent sx={{p: 1.5,':last-child': {pb: 1.5}}}>
          <Typography>Huynh Van De MERN Stack</Typography>
        </CardContent>
        <CardActions sx={{p: '0 4px 8px 4px'}}>
          <Button startIcon={<GroupIcon/>} size="small">20</Button>
          <Button startIcon={<CommentIcon/>} size="small">15</Button>
          <Button startIcon={<AttachmentIcon/>} size="small">10</Button>
        </CardActions>
      </MuiCard> 
  )
}

export default Card
