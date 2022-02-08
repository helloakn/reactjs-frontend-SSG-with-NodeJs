import React from "react";
import styled from "styled-components";

import { DefaultColor,IMAGE_Domain } from "../config";

export const MainContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:${props=>props.justifyContent?props.justifyContent:'flex-start'};
  align-items:${props=>props.alignItems?props.alignItems:'center'};
  width:${props=>props.width?props.width:'20vw'};
  margin-left:${props=>props.marginLeft?props.marginLeft:'5px'};
  flex:none;
  @media screen and (max-width: 400px) {
    & {
      display:flex;
    }
  }
`;

export const ImageContainer = styled.div`
  width:100%;
  height:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  overflow:hidden;
`;
export const BodyContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
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

export function MobileItem  ({
  ...props
}) {
  let item = props.item;
  return (
         <MainContainer {...props}>
             <ImageContainer>
                <img alt="media" src={IMAGE_Domain+item.image} height="100%"/>
             </ImageContainer>
             <BodyContainer>
                <div style={{width:"100%",display:'flex',justifyContent:'center'}}>
                  <ALink href="#" >{item.title}</ALink>
                </div>
                <Paragraph>
                {item.description}
                </Paragraph>
                <div style={{width:"100%",display:'flex',flexDirection:'row',alignItems: 'center',justifyContent:'flex-start',fontFamily:"Cuprum",fontSize:20,color:"#ffffff"}}>
                  <div>Available On &nbsp;</div>
                  <div>
                    <ALink href="#" >Google PlayStore</ALink>
                  </div>
                </div>
             </BodyContainer>
         </MainContainer>
);
}