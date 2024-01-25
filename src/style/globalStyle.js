import { createGlobalStyle } from "styled-components"
import breakpoints from "./responsive.js"

const GlobalStyle = createGlobalStyle`
    html{
     height: 100vh;
     font-size: 10px;
    }

    li {
     list-style-type: none;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    * {
      scrollbar-width: auto;
      scrollbar-color: #2651B6 #50a0d1;
    }
    
    *::-webkit-scrollbar {
      width: 15px;
    }
    
    *::-webkit-scrollbar-track {
      background: #50a0d1;
    }
    
    *::-webkit-scrollbar-thumb {
      background-color: #2651B6;
      border-radius: 10px;
    }
    
    @media (max-width: ${breakpoints.large1}px) {
      html {
        font-size: 7.5px;
      }
    }

    @media (max-width: ${breakpoints.large2}px) {
      html {
        font-size: 6px;
      }
    }

    @media (max-width: ${breakpoints.medium1}px) {
      body {
        scrollbar-width: 0px !important;
      }
    
      body::-webkit-scrollbar {
        width: 0px !important;
      }
    }
`

export { GlobalStyle }
