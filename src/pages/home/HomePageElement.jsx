import styled from "styled-components";


import latestArticle from '../../assets/images/bg1.png';
import mobileAppImg from '../../assets/images/bg2.png';

import {DefaultColor} from '../../components/config';

export const DivMainContainer = styled.div`
  display:flex;
  flex-direction:column;
  width: 100%;
  justify-content:center;
  align-items:center;
  background-color:#2A2A32;
  background-attachment: fixed !important;
  
`;

export const BannerContainer = styled.div`
  display:flex;
  justify-content:center;
  background-color:#2A2A32;
  width:80%; 
  height:100%;

  padding-top:50px;
  @media screen and (max-width: 400px) {
    & {
      display:flex;
    }
  }
`;

export const BannerContainerLeft = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center; 
  align-items:flex-start;
  width:60%;
  @media screen and (max-width: 400px) {
    & {
      display:flex;
    }
  }
`;

export const DivMessage = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center; 
  align-items:center;
  width:100%;

  background-image:url(${mobileAppImg});
  background-position:fixed;
  background-size: contain;
  background-attachment: fixed !important;

  @media screen and (max-width: 400px) {
    & {
      display:flex;
    }
  }
`;

export const DivAboutMe = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center; 
  align-items:flex-start;
  width:80%;
  @media screen and (max-width: 400px) {
    & {
      display:flex;
    }
  }
`;

export const DivFloat = styled.div`
  display:flex;
  flex-direction:${props=>props.flexDirection?props.flexDirection:'row'};;
  justify-content:${props=>props.justifyContent?props.justifyContent:'space-between'};
  align-items:${props=>props.alignItems?props.alignItems:'center'};
  width:${props=>props.width?props.width:'100%'};
  height:${props=>props.height?props.height:'100%'};
  margin-top:${props=>props.marginTop?props.marginTop:'0'};
  margin-bottom:${props=>props.marginBottom?props.marginBottom:'0'};
  background-color:${props=>props.bgColor};
  @media screen and (max-width: 400px) {
    & {
      display:flex;
    }
  }
`;

export const DivFloatBgImage = styled.div`
  display:flex;
  flex-direction:${props=>props.flexDirection?props.flexDirection:'row'};;
  justify-content:${props=>props.justifyContent?props.justifyContent:'space-between'};
  align-items:${props=>props.alignItems?props.alignItems:'center'};
  width:${props=>props.width?props.width:'100%'};
  height:${props=>props.height?props.height:'100%'};
  background-color:${props=>props.bgColor};

  background-image:url(${latestArticle});
  background-position:fixed;
  background-size: contain;
  background-attachment: fixed !important;

`;

export const ULContainer = styled.ul`
  list-style: none;
`;

export const LIElement = styled.li`
  color:#ffffff;
  padding:5px;
  font-family:"Darker Grotesque";
  font-size:16px;
  &::before{
    content: "♥";
    color:${DefaultColor};
    font-weight: bold; 
    display: inline-block;
    width: 1em;
    margin-left: -45px;
  }
`;

export const HorizonalScrollContainer = styled.div`
    width:100%;
    display:flex;
    marginTop:50;
    marginBottom:20;
    overflow-x: auto;
`;

export const ListItemContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  width:80%;
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

export const ALink = styled.a`
  background-color:${props=>props.bgColor?props.bgColor:"#000000"};
  border:1px solid ${props=>props.borderColor?props.borderColor:DefaultColor};
  color:#ffffff;
  padding:10px;
  border-radius:10px;
  text-decoration:none;
`;


 