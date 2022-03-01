
import { Image } from '@chakra-ui/react'
import {Container,Avatar,Name,Description,Profile,Retangle,Logo} from './styles'

export  function MobileHeader()  {

  return (
    <Container >
      <Profile>
      <Avatar>LS</Avatar>
      </Profile>
      {/* <Logo> */}
      <Image src='icon.svg' alt='icon'/>
      {/* </Logo> */}
    </Container>
    )

}