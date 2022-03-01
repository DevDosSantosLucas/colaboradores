
import { Image } from '@chakra-ui/react'
import {Container,Avatar,Name,Description,Profile,Retangle,Logo} from './styles'

export  function Header()  {

  return (
  <Retangle>
    <Container >
      <Logo>
      <Image src='icon.svg' alt='icon'/>
      </Logo>
      <Profile>
      <Avatar>LS</Avatar>
      <div>
      <Name>Lucas dos Santos</Name>
      <Description>meus dados</Description>
      </div>
      </Profile>
    </Container>
    </Retangle>
    )

}