import ModeSelect from '~/components/ModeSelect'
import Box from '@mui/material/Box';
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
import Profiles from './Menus/Profiles';

function AppBar() {
  return (
    <Box px={2} sx={{
        height: (theme) =>theme.trello.appBarHeight, 
        width: '100%',
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between',}}>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AppsIcon sx={{color: 'primary.main'}}/>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <SvgIcon sx={{color: 'primary.main'}} component={trelloLogo} inheritViewBox/>
            <Typography variant='span' sx={{fontSize:'1.2rem', fontWeight:'bold', color:'primary.main'}}>Trello</Typography>
          </Box>

          <Workspaces/>
          <Recent/>
          <Starred/>
          <Templates/>
          <Button variant="outlined">Create</Button>

        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TextField id="outlined-search" label="Search..." type="search" size='small' />
          <Tooltip title="Notifications">
            <Badge color="secondary" variant="dot" invisible={false} sx={{cursor: 'pointer'}}>
            <NotificationsNoneIcon sx={{color: 'primary.main'}} fontSize='small'/>
            </Badge>
          </Tooltip>
          <Tooltip title="Help">
            <Badge color="secondary" variant="dot" invisible={true} sx={{cursor: 'pointer'}}>
            <HelpOutlineIcon sx={{color: 'primary.main'}} fontSize='small'/>
            </Badge>
          </Tooltip>
          <ModeSelect/>
          <Profiles/>
        </Box>
    </Box>
  )
}

export default AppBar
