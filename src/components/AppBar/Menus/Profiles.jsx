import React from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider' 
import ListItemIcon from '@mui/material/ListItemIcon' 
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'



function Profiles() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl) 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  } 
  const handleClose = () => {
    setAnchorEl(null) 
  } 

  return (
    <Box>
      <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}
              src='https://avatars.githubusercontent.com/u/86212381?v=4'
              alt='Profile Avatar'
            />
          </IconButton>
        </Tooltip>
      <Menu
        id="basic-menu-profiles"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profiles',
        }}
      >
        <MenuItem onClick={handleClose} sx={{ display: 'flex', gap: 1 }}>
          <Avatar sx={{width:'30px', height:'30px'}}/> Profile
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ display: 'flex', gap: 1 }}>
          <Avatar sx={{width:'30px', height:'30px'}} /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose} >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profiles
