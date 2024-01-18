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

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
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

    // body::-webkit-scrollbar {
    //     width: 15px;
    // }

    // body::-webkit-scrollbar-thumb {
    //     background-color: #FF4D03;
    // }
`

export { GlobalStyle }
