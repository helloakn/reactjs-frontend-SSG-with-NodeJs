/*
example

*/

import styled from "styled-components";

export const MainContainer = styled.div.attrs(props => ({
    
  }))`
  display:flex;
  flex-direction:column;
  width:100px;
  height:100px;
  justify-content:center;
  align-items:center;
  cursor:pointer;

  
  &:hover .something{
    background-color:#6DAEC2;
    color:green;
  }
  &:hover .lab{
    color:#ffffff;
  }
  &:hover .caption{
    color:#1F3351;
  }
`;
export const Caption = styled.div`
  font-size:14px;
  font-family:Fjord;
  cursor:pointer;
  color:${props=>props.active?"#1F3351":"#6DAEC2"};
  padding-top:10px;
  
`;
export const IconContainer = styled.div`
  display:flex;
  flex-direction:row;
  width:50%;
  height:50%;
  background-color:${props=>props.active?"#6DAEC2":"#F0F6F8"};
  justify-content:center;
  align-items:center;
  border-radius: 10px;
  cursor:pointer;
  
`;
export const Ico = styled.i`
  color:${props=>props.active?"#ffffff":"#6DAEC2"};
  font-size:20px;
  
`;

export function FontIcon({
    ...props
  }) {
    return (
      <MainContainer>
        <IconContainer {...props}  className="something">
            <Ico className={props.icon+" lab"} {...props}></Ico>
        </IconContainer>
        <Caption {...props}  className="caption">{props.caption}</Caption>
      </MainContainer>
    );
  }