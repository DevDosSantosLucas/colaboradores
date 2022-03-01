import { stringify } from "querystring";
import { useEffect, useState } from "react";
import { Border } from "../components/Border";
import { Menu } from "../components/Menu";
import { Search } from "../components/Search";
import api from "../services/api";
import { Container, Title,Separator } from "../styles/collaborators";

export default  function Collaborators(){
  const [agents,setAgents] = useState([])

  useEffect(()=>{
    async function getApi(){
      const response = await api.get("/agents");
      // console.log('teste:',response.json())
      // const data =  stringfy(response)
      setAgents(response.data.items)
      return response.data.items;
      }
    getApi()
  },[])

  const data= [1,2,3,4,5,6,7,8,9,10]

  return(
  <>
    <Title>Colaboradores</Title>

    <Container >
      <Menu />
      <Search />
      <Separator />
      {/* { agents?.map(x=>{
        return(
          <div>x</div>
        )
      })} */}
      {agents && agents.map(agent =>{
        return(
        <Border 
        key ={agent.agent_id}
        name= {agent.name}
 
        image= {agent.image}
        department ={agent.department} 
        // branch": "Farmácia Pedido Pago",
        role={agent.role}
        status={agents.status}
        />
        )
        })
      }
      {/* <div>{stringify(agents)}</div> */}
    </Container>
    </>
  )
}