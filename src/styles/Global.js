import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    :root{
        font-size: 62.5%;
    }

    body{
        background-color: #141414;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;

    }

`