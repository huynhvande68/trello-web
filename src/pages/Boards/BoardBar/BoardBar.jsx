import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatters'

function BoardBar(props) {
  const { board } = props;

  const MENU_STYLE = {
    color: 'white',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '4px',
    '.MuiSvgIcon-root':{
      color: 'white',
    },
    '&:hover':{
      backgroundColor: 'primary.50',
    }
  }


  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        borderBottom: '1px solid rgb(128, 134, 133)',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      }}>
      
      <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
          <Chip
            sx={MENU_STYLE}
            icon={<DashboardIcon fontSize='small'/>} 
            label={board?.title || "Board Title"}
            clickable
          />

          <Chip
            sx={MENU_STYLE}
            icon={<VpnLockIcon fontSize='small'/>} 
            label={capitalizeFirstLetter(board?.type || "Public")}
            clickable
          />

          <Chip
            sx={MENU_STYLE}
            icon={<AddToDriveIcon fontSize='small'/>} 
            label="Add to Google Drive"
            clickable
          />

          <Chip
            sx={MENU_STYLE}
            icon={<BoltIcon fontSize='small'/>} 
            label="Automation"
            clickable
          />

          <Chip
            sx={MENU_STYLE}
            icon={<FilterListIcon fontSize='small'/>} 
            label="Filters"
            clickable
          />
      </Box>

      <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
        <Button 
          startIcon={<PersonAddIcon/>} 
          variant="outlined"
          sx={{
            borderColor: 'white',
            color: 'white',
            '&:hover': {
              borderColor: 'white',
            }
          }}
          >
          Invite
        </Button>

        <AvatarGroup max={6} sx={{
          gap: 1,
          '& .MuiAvatar-root': {
            width: 34, 
            height: 34, 
            fontSize: '0.875rem',
            border: 'none',
            cursor: 'pointer',
            '&:first-of-type': {
              bgcolor: '#a4b0be',
            }
          },
          '& .MuiAvatar-root:hover': {
            transform: 'scale(1.1)',
            transition: 'transform 0.3s ease-in-out'},
          
          
          }}>
          <Tooltip title="Remy Sharp">
            <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg" />
          </Tooltip>
          <Tooltip title="Remy Sharp">
            <Avatar alt="Remy Sharp" src="https://media.vanityfair.com/photos/575026f2c0f054944b554e89/master/w_2560%2Cc_limit/506802698.jpg" />
          </Tooltip>
          <Tooltip title="Remy Sharp">
            <Avatar alt="Remy Sharp" src="https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c80785965eeae4617e03f16f874f447eb6b28335381c246a4e68546b973fe7d4e7fef54f9efb0c8972265f49d8f86164867992/Jeff_Bezos.jpg" />
          </Tooltip>
          <Tooltip title="Remy Sharp">
            <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg" />
          </Tooltip>
          <Tooltip title="Remy Sharp">
            <Avatar alt="Remy Sharp" src="https://media.vanityfair.com/photos/575026f2c0f054944b554e89/master/w_2560%2Cc_limit/506802698.jpg" />
          </Tooltip>
          <Tooltip title="Remy Sharp">
            <Avatar alt="Remy Sharp" src="https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c80785965eeae4617e03f16f874f447eb6b28335381c246a4e68546b973fe7d4e7fef54f9efb0c8972265f49d8f86164867992/Jeff_Bezos.jpg" />
          </Tooltip>
          <Tooltip title="Remy Sharp">
            <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg" />
          </Tooltip>
          <Tooltip title="Remy Sharp">
            <Avatar alt="Remy Sharp" src="https://media.vanityfair.com/photos/575026f2c0f054944b554e89/master/w_2560%2Cc_limit/506802698.jpg" />
          </Tooltip>
          <Tooltip title="Remy Sharp">
            <Avatar alt="Remy Sharp" src="https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c80785965eeae4617e03f16f874f447eb6b28335381c246a4e68546b973fe7d4e7fef54f9efb0c8972265f49d8f86164867992/Jeff_Bezos.jpg" />
          </Tooltip>
          <Tooltip title="Remy Sharp">
            <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg" />
          </Tooltip>
          <Tooltip title="Remy Sharp">
            <Avatar alt="Remy Sharp" src="https://media.vanityfair.com/photos/575026f2c0f054944b554e89/master/w_2560%2Cc_limit/506802698.jpg" />
          </Tooltip>
          <Tooltip title="Remy Sharp">
            <Avatar alt="Remy Sharp" src="https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c80785965eeae4617e03f16f874f447eb6b28335381c246a4e68546b973fe7d4e7fef54f9efb0c8972265f49d8f86164867992/Jeff_Bezos.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>

    </Box>
  );
}

export default BoardBar
