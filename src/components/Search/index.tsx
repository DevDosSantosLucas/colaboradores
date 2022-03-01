// import { Container } from "./styles";
import styled from '@emotion/styled'
import{Image} from '@chakra-ui/react'

export function Search(){

  const Container = styled.div`
  display: flex;
  // flex-direction: collumn;
  justify-content: flex-start;
  align-items: center;
  padding: 16px ;
  margin: 16px 0;
  
  // height:100px;
  width:90%;
  
  background: #FFFFFF;
  
  border: 2px solid #CAD6D1;
  box-sizing: border-box;
  border-radius: 8px;
  `
  const Input = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #587169;
  `
  const Label = styled.label`
  
  position: relative;
  width: 97px;
  // height: 10%;
  // left: 4px;
  bottom: 30px;
  
  
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1px;
  
  display: flex;
  align-items: start;

  
  color: #A3B8B0;
  background-color:#FFFFFF;
  `

  return(
    <>
    <Container >
    <Label>Pesquisar Por</Label>

      <Image src='./searchIcon.svg' alt='Search'/>
      <Input>Pesquise por Nome ou cpf</Input>
    </Container>
    </>
  )
}