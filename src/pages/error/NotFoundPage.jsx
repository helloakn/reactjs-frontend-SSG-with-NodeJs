
import styled from "styled-components";

import { DefaultColor,IMAGE_Domain,APP_DOMAIN } from "../../components/config";

export const DivMainContainer = styled.div`
  display:flex;
  flex-direction:column;
  width: 100%;
  height:100vh;
  background-color:#3c3c3c;
  justify-content:center;
  align-items:center;
  color:#788EBA;

  font-family:"Cuprum";
  font-size:30px;
  & h1{
        color:#ffffff;
  }
  & label{
        font-size:20px;
        color:gray;
}
  & a{
          color:#788EBA;
          cursor:pointer;
  }
  & a:hover{
          color:#ffffff;
  }
`;

export const DivMsg = styled.div`
  
  font-size:30px;
  
`;



function NotFoundPage (){
   
        return (
           
          <DivMainContainer>
                <img src={IMAGE_Domain+"404.jpg"} width="400" alt="404 page"/>
                <h1>4 zero 4</h1><br/>
                <DivMsg>What you're looking for may have been misplaced in long Term Memory!</DivMsg><br/>
                <label>Mama is waiting you.</label><br/>
                <a href="https://www.aungkyawnyunt.com">SO, Let's go to the home!</a>
          </DivMainContainer>
        );
}



export {NotFoundPage};