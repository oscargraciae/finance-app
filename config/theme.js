import { extendTheme, theme as chakraTheme } from '@chakra-ui/react'

const theme = extendTheme({
  ...chakraTheme,
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    // global: {
    //   body: {
    //     // bg: '#f9fbfd',
    //     bg: '#FFFFFF',
    //     color: '#1a1f36'
    //   }
    // }
  },
  colors: {
    ...chakraTheme.colors,
    black: '#16161D',
    _primary: '#353097',
    _secondary: '#81ac05',
    error: '#B00020',
    background: '#f9fbfd',
    surface: '#FFFFFF',
    borders: '#d9e3eb',
    text: '#71757D',
    subtext: '#717171',
    primaryLight: '#E9F9EF',
    secondaryLight: '#E9F9EF',
    primary: {
      50: '#ebebff',
      100: '#c7c5f1',
      200: '#a19ee1',
      300: '#7c78d4',
      400: '#5751c7',
      500: '#3e37ad',
      600: '#302b87',
      700: '#221f62',
      800: '#13123d',
      900: '#070519'
    },
    secondary: {
      50: '#f3fedf',
      100: '#dffbb3',
      200: '#ccf787',
      300: '#b8f458',
      400: '#a4f02b',
      500: '#8bd714',
      600: '#6ba70b',
      700: '#4c7705',
      800: '#2c4800',
      900: '#0c1900'
    }
  },
  // breakpoints,
  components: {
    Badge: {
      baseStyle: {
        fontSize: 12,
        textTransform: 'capitalize'
      }
    },
    Link: {
      variants: {
        primary: {
          fontWeight: 'semibold',
          _hover: {
            textDecoration: 'none',
            color: 'primary'
          }
        },
        secondary: {
          fontWeight: 'semibold',
          color: 'text',
          _hover: {
            textDecoration: 'none',
            color: 'subtext'
          }
        }
      }
    },
    Button: {
      baseStyle: {
        // borderRadius: '4px'
        borderRadius: 'md',
        _focus: {
          boxShadow: 'none'
        }
      },
      // sizes: {
      //   lg: {
      //     fontSize: 'xs',
      //     h: '56px',
      //     px: '32px'
      //   }
      // },
      variants: {
        primary: {
          bg: 'primary',
          borderColor: '#05AF3C',
          color: '#FFF',
          fontSize: '14px',
          paddingX: '18px',
          paddingY: '10px',
          _hover: {
            bg: '_primary'
          }
        },
        'primary-large': {
          bg: 'primary',
          borderColor: '#05AF3C',
          color: '#FFF',
          fontSize: '16px',
          padding: '10px 32px',
          fontWeight: 700,
          _hover: {
            bg: '_primary'
          }
        },
        'default-outline': {
          bg: 'transparent',
          borderColor: '#9a9a9a',
          borderWidth: 1,
          color: '#333',
          fontSize: '12px'
          // _hover: {
          //   bg: "_primary",
          // },
        },
        'primary-outline': {
          bg: 'transparent',
          borderColor: 'primary',
          borderWidth: 1,
          color: 'primary',
          _hover: {
            bg: '_primary',
            color: '#FFFFFF'
          }
        },
        secondary: {
          bg: 'secondary',
          borderColor: '#05AF3C',
          color: '#FFF',
          _hover: {
            bg: '_secondary'
          }
        }
      }
    },
    Input: {
      baseStyle: {
        field: {
          borderRadius: '4px',
          _focus: {
            borderColor: '#3e37ad',
            outline: 0,
            boxShadow: 'none'
          },
          boxShadow: 'none'
        }
      },
      variants: {
        outline: () => ({
          field: {
            _focus: {
              borderColor: '#3e37ad',
              borderWidth: 1,
              outline: 0,
              boxShadow: 'none'
            },
            _hover: {
              borderColor: '#3e37ad',
              borderWidth: 1
            }
          }
        }),
        app: {
          field: {
            borderRadius: '3px',
            border: '1px solid #ccc',
            _focus: {
              borderColor: '#3e37ad',
              borderWidth: 1,
              outline: 0
            }
          }
        }
      }
    }
  }
})

export default theme
