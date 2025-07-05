import { experimental_extendTheme as extendTheme} from '@mui/material/styles';
import { cyan, deepOrange, orange, teal } from '@mui/material/colors';

const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        }
      }
    }
    ,
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light,
          },
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main,
            }
          },
          '& fieldset': {
            borderWidth: '1px !important',
          },

        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.light,
          '&.Mui-focused': {
            color: theme.palette.primary.main,
          },
          '&.Mui-error': {
            color: theme.palette.error.main,
          }
          ,
          fontSize: '0.875rem',
        })
      }
    },
  }
});

export default theme;