import styled from "styled-components";


import latestArticle from '../../assets/images/bg1.png';

import {DefaultColor} from '../../components/config';

export const DivMainContainer = styled.div`
  display:flex;
  flex-direction:column;
  width: 100%;
  justify-content:center;
  align-items:center;
  
`;
export const DivMainContainerInner = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width: 100%;
  background-image:url(${latestArticle});
  background-position:fixed;
  background-size: cover;
  background-attachment: fixed !important;
  
`;



export const Header = styled.div`
  width:80%;

  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  margin-top:30px;
  margin-bottom:30px;
`;

export const HeaderImage = styled.div`
  width:50%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  margin-bottom:10px;
`;

export const HeaderContent = styled.div`
  width:45%;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  
`;

export const DivAuthorContainer = styled.div`
  width:100%;
  margin-top:10px;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  
`;
export const DivAuthorImage = styled.div`
  width:100px;
  height:100px;
`;
export const DivAuthorInfo = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  margin-left:20px;
  color:#788EBA;
`;
export const ReleaseDate = styled.label`
  
`;
/**
 * color:#ffffff;
font-family:"Darker Grotesque";
font-size:16px;
 */
export const Title = styled.h1`
  font-family:"Cuprum";
  font-size:30px;
  color:#788EBA;
`
export const Caption = styled.h2`
  font-family:"Cuprum";
  font-size:20px;
  color:#788EBA;
`

export const CategoryContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  margin-bottom:10px;
`

export const Alink = styled.a`
  color:${DefaultColor};
  cursor:pointer;
  &:hover{
    color:#ffffff;
  }
`;

export const AButton = styled.a`
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

export const HorizonalScrollContainer = styled.div`
    width:100%;
    display:flex;
    marginTop:50;
    marginBottom:20;
    overflow-x: auto;
`;
 

export const ListItemRow = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:flex-start;
  margin-top:50px;
  margin-bottom:20px;
`;


export const DivMainContainerBody = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:flex-start;
  background-color:#3A3D46;
`;


export const DivMainBody = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
`;
export const DivMainLeft = styled.div`
  width:65%;
  background-color:#3A3D46;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-end;
`;
export const DivMainLeftInner = styled.div`
  width:83%;
  margin-right:2%;
  color:#ffffff;
  font-family:"Darker Grotesque";
  font-size:20px;
  margin-top:20px;
`;
export const DivMainRight = styled.div`
  width:35%;
  background-color:#43454D;
`;

export const DivCodeContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  margin-bottom:5px;
`;

export const DivCode = styled.div`
  display:flex;
  flex-direction:row;
  background-color:#EAEBF0;
  font-family:"ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace";
  font-size:14px;
  font-weight:bold;
  color:#24292f;
  padding:10px;
  width:90% !important;
  border-radius:5px;
`;