export const theme = {
  colors: {
    primaryColor: {
      primary: '#185AA1',
      primaryDark: '#1F478B',
      primaryLight: '#2588C9',
      primaryLighter: '#99D6F1'
    },
    secondaryColor: {
      secondary: '#BB4981',
      secondaryDark: '#8B426E',
      secondaryLight: '#CA5FA0',
      secondaryLighter: '#F7C2D2'
    },
    statusColor: {
      success: '#28A745',
      error: '#DC3545',
      warning: '#FFC107',
      info: '#30BEDD'
    },
    neutralColors: {
      gray: '#CFD2D4',
      grayLight: '#E1E3E6',
      grayLighter: '#F5F8FA',
      grayDark: '#909599',
      grayDarker: '#57667A'
    },
    typographyColors: {
      black: '#152536',
      gray: '#68717A',
      grayLight: '#A0A4A7',
      white: '#FFFFFF'
    },
    backgroundColor: { lightVersion: '#F8F9FA', darkVersion: '#343A40' }
  },
  grid: {
    container: '117rem',
    gutter: '3rem'
  },
  font: {
    weight: {
      regular: 400,
      bold: 700,
      extraBold: 800
    },
    families: {
      inter:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      manrope:
        "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },

    sizes: {
      '1': '10px',
      '2': '12px',
      '3': '14px',
      '4': '16px',
      '5': '17px',
      '6': '20px',
      '7': '21px',
      '8': '24px',
      '9': '28px',
      '10': '32px',
      '11': '40px'
    }
  },
  border: {
    radius: '24px'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
}
