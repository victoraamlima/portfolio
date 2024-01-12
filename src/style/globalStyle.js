import { createGlobalStyle } from "styled-components"

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

    // body::-webkit-scrollbar {
    //     width: 15px;
    // }

    // body::-webkit-scrollbar-thumb {
    //     background-color: #FF4D03;
    // }
`

export { GlobalStyle }
