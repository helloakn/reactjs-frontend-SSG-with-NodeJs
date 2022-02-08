import React, { Component } from "react";
import styled from "styled-components";

import {Icon} from '../icons';

import { DefaultColor,IMAGE_Domain } from "../config";

export const MainContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:${props=>props.justifyContent?props.justifyContent:'flex-start'};
  align-items:${props=>props.alignItems?props.alignItems:'center'};
  width:${props=>props.width?props.width:'30%'};
  height:25vw;
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

  justify-content:flex-start;
  align-items:center;

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

  text-decoration:none;
  &:hover{
    color:${DefaultColor};
    background-color:#ffffff;
  }
  &:hover .clsIcon{
    color:${DefaultColor};
  }
`;
const ALink = styled.a`
    font-family:"Cuprum";
    font-size:16px;
    color:${DefaultColor};
    cursor:pointer;
    &:hover{
        color:#ffffff;
    }
`;
const Paragraph = styled.div`
    font-family:"Cuprum";
    font-size:16px;
    color:#ffffff;
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
  justify-content:space-between;
  align-items:center;
`;

export class ListItemSmall  extends Component{

    
   render(){
    let item = this.props.item;
   // console.log(item);
    let categories = item.categories.map((element,index)=>{
      return (index===0?<AButton key={"abuttoncategory"+element.id} href={"category/"+element.name.toLowerCase()} >{element.name}</AButton>:<AButton key={"abuttoncategory"+element.id} href={"category/"+element.name.toLowerCase()} marginLeft="5px">{element.name}</AButton>);
    });
    return (
         <MainContainer>
             <ImageContainer>
                <img alt="media" src={IMAGE_Domain+item.image} width="100%"/>
             </ImageContainer>
             <BodyContainer>
                <BodyContainerInner>
                    <HeadContainer> 
                    {categories}
                    </HeadContainer>
                    <TitleContainer>
                        <ALink href={"article/"+item.link} >{item.title}</ALink>
                    </TitleContainer>
                    <Contentontainer>
                        <Paragraph
                        dangerouslySetInnerHTML={{
                            __html: item.intro
                        }}
                        >
                        </Paragraph>
                    </Contentontainer>
                    <FooterContainer> 
                      <ReleaseDate>{item.created_at}</ReleaseDate>   
                      <AButton href={"article/"+item.link} >Read  &nbsp;<Icon  color="#ffffff" active="yes" icon={" fas fa-chevron-circle-right"} /></AButton>
                    </FooterContainer>
                </BodyContainerInner>
             </BodyContainer>
         </MainContainer>
    );
  }
   
}