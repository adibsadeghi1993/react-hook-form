import styled from "styled-components"

type Props={
    width?:string
}

 export const Container=styled.div<Props>`
  width:${(props)=>props.width?"95%":"90%"};
  margin:0 auto;
  padding:0 20px;
 
`