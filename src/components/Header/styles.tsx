import styled from '@emotion/styled'

export const Container = styled.header`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 50% 0px 16px;

// position: static;
// // width: 1920px;
// height: 61px;
// left: 0px;
// top: 0px;
position: static;
// width: 360px;
height: 61px;
left: 0px;
top: 0px;
  
background: #FFFFFF;

border-bottom: 1px solid #EAEFED;
// flex: none;
// order: 0;
// align-self: stretch;
// flex-grow: 0;
// margin: 0px 0px;
`

export const Avatar= styled.span`
display: flex;
flex-direction: row;
align-items: center;
justify-content:center;
padding: 8px;

position: static;
width: 32px;
height: 32px;
left: 0px;
top: 0px;

background: #B5F1DD;
border-radius: 80px;

// flex: none;
// order: 0;
// flex-grow: 0;
// margin: 0px 10px;
`

export const Name = styled.span`
position: static;
width: 110px;
height: 14px;
left: 0px;
top: 0px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 100%;

display: flex;
align-items: center;

color: #34423D;

// flex: none;
// order: 0;
// flex-grow: 0;
// margin: 2px 0px;
`
export const Description = styled.span` position: static;
width: 110px;
height: 14px;
left: 0px;
top: 0px;

/* Heading/14 SB XXS */

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 100%;
/* identical to box height, or 14px */

display: flex;
align-items: center;

/* Neutral Colors/Black */

color: #34423D;


/* Inside auto layout */

// flex: none;
// order: 0;
// flex-grow: 0;
// margin: 2px 0px;
`

export const Logo = styled.div`
border-color:#EAEFED;
padding-right:2%;
border-right-style: solid;
`
export const Border =styled.div`
/* Rectangle Copy */


position: static;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

/* Neutral Colors/Neutral1 */

background: #EAEFED;

/* Inside auto layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 10px 0px;`

export const Profile = styled.div`
display:flex;
align-items:center;
`

export const Retangle = styled.div`
/* Rectangle 2 */

position: absolute;
width: 256px;
left: 0px;
top: 0px;
bottom: 0px;

background: #FFFFFF;
border: 1px solid #EAEFED;
/* Level 1 */

box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
`