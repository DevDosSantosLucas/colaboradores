
import styled from '@emotion/styled'
import{Image} from '@chakra-ui/react'
import { useState } from 'react'


interface userProps {
name?:string;
image?:string
department?:string;
// branch: string;
role?: string;
status?:string;
}



export function Border(
  {name,image,department,role,status}
  :userProps){
  const [isOpen,setOpen] = useState(false)


   const Container = styled.div`
display: flex;
align-items: center;
flex-direction: row;

flex-wrap: wrap;

width:90%;
margin:  8px 0 ;

background: ##FFFFFF;

border-style: solid;
border-color: ${isOpen?'#B5F1DD':'#CAD6D1'};
box-sizing: border-box;
border-radius: 8px;
`
const Contents = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 16px ;
width:50%;
`
const Label = styled.label`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 150%;
color: #587169;
`

const Profile = styled.div` 
display: flex;
align-items: center;
justify-content:center;
`

const Box = styled.div`
margin:10px;
padding:6px;

display:flex;
align-items:center;
justify-content: center;

border: 2px solid #B5F1DD;
border-radius: 8px;
width:100%;
`
const ActionButtom = styled.button`
padding:10px;
border :none;
background: #FFFFFF;
` 
  function handleInfos(){
    setOpen(!isOpen)
  }


  return(

    <Container>
      
    <Contents>
     <Label>Nome Completo</Label>
     <Profile>
      <Image style={{marginRight:'10px',width: '32px',
        height: '32px', borderRadius: '50%' }}
        src={image} alt='profile'/>
      <Label>{name}</Label>
      </Profile>

    </Contents>
    <Contents>
    {!isOpen?(
      <button onClick={handleInfos}>
       <Image src='./arrow-down.svg' alt='arrow down'/>
      </button>
      )
      :(
        <button onClick={handleInfos}>
        <Image src='./arrow-up.svg' alt='arrow up'/>
       </button>
      )}
    </Contents>
    {isOpen && <>
    <Contents>
      <Label>Departamento</Label>
      <Label>{department}</Label>
    </Contents>

    <Contents>
      <Label>Cargo</Label>
      <Label>{role}</Label>
    </Contents>    <Contents>
      <Label>Unidade</Label>
      <Label>123456789</Label>
    </Contents>
    <Contents>
      <Label>Unidade</Label>
      <Label>Unidade</Label>
    </Contents>
    <Contents>
      <Label>Status</Label>
      <Label>{status}</Label>
    </Contents>
    <Contents />

      <Box>
    <ActionButtom onClick ={()=>{}}>
    <Image src='./plus.svg' alt='plus'/>
      <Label>Ações</Label>
    </ActionButtom>
    </Box>
    </>}
  </Container>
  )
}