import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`


@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(''),
       url('/fonts/inter-v8-latin-regular.woff2') format('woff2')
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local(''),
       url('/fonts/inter-v8-latin-700.woff2') format('woff2')
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: local(''),
       url('/fonts/inter-v8-latin-800.woff2') format('woff2')
}

@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local(''),
       url('/fonts/manrope-v11-latin-700.woff2') format('woff2')
}


@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local(''),
       url('/fonts/inter-v8-latin-300.woff2') format('woff2'),
}


@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local(''),
       url('/fonts/inter-v8-latin-500.woff2') format('woff2'),
}


@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local(''),
       url('/fonts/inter-v8-latin-600.woff2') format('woff2'),
}





  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -mox-osx-font-smoothing: grayscale;
  }

  html {
  overflow-x: hidden
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.families.inter};
      font-size: ${theme.font.sizes['4']};
    }
  `}
`

export default GlobalStyles
