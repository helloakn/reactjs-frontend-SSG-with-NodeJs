import React, { Component } from "react";
import styled from "styled-components";

import {Icon} from '../icons';

import { DefaultColor } from "../config";

export const MainContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:${props=>props.justifyContent?props.justifyContent:'flex-start'};
  align-items:${props=>props.alignItems?props.alignItems:'center'};
  width:${props=>props.width?props.width:'47%'};
  height:39vw;
  background-color:${props=>props.bgColor?props.bgColor:DefaultColor};
  border: 1.01587px solid ${DefaultColor};
  border-radius:10px;
  @media screen and (max-width: 400px) {
    & {
      display:flex;
    }
  }
`;

export const ImageContainer = styled.div`
  width:100%;
  height:50%;
  background-color:silver;
  border-top-right-radius:10px;
  border-top-left-radius:10px;
  background-color:#000000;
  overflow:hidden;
`;
export const BodyContainer = styled.div`
  width:100%;
  height:48%;
  background-color:#33333C;
  display:flex;
  flex-direction:row;
  justify-content:center;
`;
export const BodyContainerInner = styled.div`
  width:90%;
  height:100%;
`;

export const HeadContainer = styled.div`
  width:100%;
  height:24%;
  display:flex;
  flex-direction:row;
`;
const AButton = styled.a`
font-family:"Cuprum";
font-size:16px;
  color:#ffffff;
  cursor:pointer;
  background-color:${DefaultColor};
  padding:5px 10px 5px 10px;
  border-radius:50px;
  margin-left:${props=>props.marginLeft?props.marginLeft:0};

  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;

  &:hover{
    color:${DefaultColor};
    background-color:#ffffff;
  }
`;
const ALink = styled.a`
    font-family:"Cuprum";
    font-size:20px;
    color:${DefaultColor};
    cursor:pointer;
    &:hover{
        color:#ffffff;
    }
`;
const Paragraph = styled.p`
    font-family:"Cuprum";
    font-size:16px;
    color:#ffffff;
`;
const HeadContainerLeft = styled.div`
  width:70%;
  height:100%;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
`;

export const HeadContainerRight = styled.div`
  width:30%;
  height:100%;
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  align-items:center;
`;
export const ReleaseDate = styled.label`
    font-family:"Cutive";
    font-size:14px;
    color:${DefaultColor};
`;
export const TitleContainer = styled.div`
  width:100%;
  height:12%;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
`;
export const Contentontainer = styled.div`
  width:100%;
  height:39%;
  overflow:hidden;
`;
export const FooterContainer = styled.div`
  width:100%;
  height:24%;
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  align-items:center;
`;

export class ListItem  extends Component{

    constructor(props){
        super(props);
        this.state ={
           
        }
    }
    
   render(){
   
     return (
         <MainContainer>
             <ImageContainer>
                <img src="media1.png" alt="media" width="100%"/>
             </ImageContainer>
             <BodyContainer>
                <BodyContainerInner>
                    <HeadContainer> 
                        <HeadContainerLeft> 
                            <AButton>Docker</AButton>
                            <AButton marginLeft="5px">DevOps</AButton>
                            <AButton marginLeft="5px">Server</AButton>
                        </HeadContainerLeft>
                        <HeadContainerRight> 
                            <ReleaseDate>March, 22, 2022</ReleaseDate>
                        </HeadContainerRight>  
                    </HeadContainer>
                    <TitleContainer>
                        <ALink>Docker Tutorial from zero to advance</ALink>
                    </TitleContainer>
                    <Contentontainer>
                        <Paragraph>
                        Docker Desktop delivers the speed, choice and security you need for designing and delivering these containerized applications on your desktop.
Docker is a container management service. The keywords of Docker ...
                        </Paragraph>
                    </Contentontainer>
                    <FooterContainer> 
                        <AButton >Read  &nbsp;<Icon  color="#ffffff" icon={"fas fa-chevron-circle-right"} /></AButton>
                    </FooterContainer>
                </BodyContainerInner>
             </BodyContainer>
         </MainContainer>
         );
   }
   
  }