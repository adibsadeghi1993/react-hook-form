import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    box-sizing:border-box;
    margin:0;
    padding:0
}

@font-face {
     font-family: 'iranSans';
     font-style: normal;
     font-weight: 300;
     src: url('../assets/fonts/IRANSans.ttf'); 
     
   }

   *{
       
        font-family: "iranSans" !important;
   }


`;

export default GlobalStyles;
