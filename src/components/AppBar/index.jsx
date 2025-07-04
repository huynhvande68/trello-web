import { useState } from 'react'
import ModeSelect from '~/components/ModeSelect'
import Box from '@mui/material/Box'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as trelloLogo } from '~/assets/trello.svg'
import SvgIcon from '@mui/icons-material/Apps'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from './Menus/Profiles'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'


function AppBar() {
  const[searchValue, setSearchValue] = useState('')
  return (
    <Box px={2} sx={{
        height: (theme) =>theme.trello.appBarHeight, 
        width: '100%',
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        overflowY: 'hidden',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'),
        }}>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AppsIcon sx={{color: 'white'}}/>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <SvgIcon sx={{color: 'white'}} component={trelloLogo} inheritViewBox/>
            <Typography variant='span' sx={{fontSize:'1.2rem', fontWeight:'bold', color:'white'}}>Trello</Typography>
          </Box>

          <Box sx={{display: {xs: 'none',md: 'flex'}, gap:1}}>
            <Workspaces/>
            <Recent/>
            <Starred/>
            <Templates/>
            <Button 
              sx={{color:'white',border: 'none', '&:hover': {border: 'none'}}} 
              variant="outlined" 
              startIcon={<LibraryAddIcon/>}>Create
            </Button>
          </Box>

        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TextField 
            id="outlined-search" 
            label="Search" 
            type="text" 
            size='small' 
            value={searchValue}
            onChange = {(e) => setSearchValue(e.target.value)}
            sx={{
              minWidth: '120px', 
              maxWidth:'170px',
              '& label': {color: 'white'},
              '& input': {color: 'white'},
              '& label.Mui-focused': {color: 'white'},
              '& .MuiOutlinedInput-root': {
                '& fieldset': {borderColor: 'white'},
                '&:hover fieldset': {borderColor: 'white'},
                '&.Mui-focused fieldset': {borderColor: 'white'},
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize='small' sx={{color: 'white'}}/>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <CloseIcon 
                    fontSize='small' 
                    sx={{color: searchValue ? 'white' : 'transparent', cursor: 'pointer'}}
                    onClick = {(e) => setSearchValue('')}  
                  />
                </InputAdornment>
              ),
            }}
          />
          <Tooltip title="Notifications">
            <Badge color="warning" variant="dot" invisible={false} sx={{cursor: 'pointer'}}>
            <NotificationsNoneIcon sx={{color: 'white'}} fontSize='small'/>
            </Badge>
          </Tooltip>
          <Tooltip title="Help">
            <Badge color="secondary" variant="dot" invisible={true} sx={{cursor: 'pointer'}}>
            <HelpOutlineIcon sx={{color: 'white'}} fontSize='small'/>
            </Badge>
          </Tooltip>
          <ModeSelect/>
          <Profiles/>
        </Box>
    </Box>
  )
}

export default AppBar
