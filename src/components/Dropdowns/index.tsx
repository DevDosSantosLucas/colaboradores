// import { Container } from "./styles";
import styled from '@emotion/styled'
import{Image} from '@chakra-ui/react'
 const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 16px ;

// height:100px;
width:90%;

background: #FFFFFF;

border: 2px solid #CAD6D1;
box-sizing: border-box;
border-radius: 8px;
`
const Label = styled.label`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 150%;
color: #587169;
`
export function Border(){
  return(
    <Container >
      <Label></Label>
      <Image src='./arrown-down.svg' alt='menu'/>
    </Container>
  )
}