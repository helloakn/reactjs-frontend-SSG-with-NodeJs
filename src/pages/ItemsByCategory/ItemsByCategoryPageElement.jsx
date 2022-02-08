import styled from "styled-components";


import latestArticle from '../../assets/images/bg1.png';

import {DefaultColor} from '../../components/config';

export const DivMainContainer = styled.div`
  display:flex;
  flex-direction:column;
  width: 100%;
  justify-content:center;
  align-items:center;
  background-image:url(${latestArticle});
  background-position:fixed;
  background-size: cover;
  background-attachment: fixed !important;
  background-color:red;
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

export const Header = styled.div`
  
  background-color:#2A2A32;
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
`;


/**
 * color:#ffffff;
font-family:"Darker Grotesque";
font-size:16px;
 */
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

export const Alink = styled.a`
  color:${DefaultColor};
  cursor:pointer;
  &:hover{
    color:#ffffff;
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

