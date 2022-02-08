import styled from "styled-components";


import {DefaultColor} from '../../components/config';
export {DefaultColor};
export const MainContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  width: 100%;
  overflow:auto;
  background-color:red;
  background-color:rgba(65, 81, 139, 0.54);
  background-color:#262628;
  @media screen and (max-width: 400px) {
    & {
      display:flex;
    }
  }
`;
export const MenuContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  width: 100%;
  height:100px;
  position:fixed;
  @media screen and (max-width: 400px) {
    & {
      display:flex;
    }
  }
`;
export const MenuSmall = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:flex-start;
  width: 100%;
  height:30%;
  background-color:${DefaultColor};
  @media screen and (max-width: 400px) {
    & {
      display:flex;
    }
  }
`;
  export const MenuInner = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-start;
    width: 80%;
    height:100%;
    @media screen and (max-width: 400px) {
      & {
        display:flex;
      }
    }
  `;
  export const MenuFloat = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width: ${props=>props.width};
    height:100%;
    background-color:${props=>props.bgColor};
    @media screen and (max-width: 400px) {
      & {
        display:flex;
      }
    }
  `;
export const MenuBig = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:flex-start;
  width: 100%;
  height:65%;;
  background-color:rgba(38, 38, 40, 0.58);
  @media screen and (max-width: 400px) {
    & {
      display:flex;
    }
  }
`;
export const MenuLine = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:flex-start;
  width: 100%;
  height:5%;
  background: linear-gradient(90deg, ${DefaultColor} 0%, #000000 100%);
  
  @media screen and (max-width: 400px) {
    & {
      display:flex;
    }
  }
`;

export const Alink = styled.a`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-start;
    color:#ffffff;
    font-family:"Eczar";
    font-size:${props=>props.fontSize?props.fontSize:"12px"};
    text-decoration:none;
  `;
  export const MainBody = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:flex-start;
    width:100%;
    margin-top:100px;
  `;


export const MainFooter = styled.div`
  display:flex;
  flex-direction:${props=>props.flexDirection?props.flexDirection:'row'};;
  justify-content:${props=>props.justifyContent?props.justifyContent:'space-between'};
  align-items:${props=>props.alignItems?props.alignItems:'center'};
  width:${props=>props.width?props.width:'100%'};
  margin-top:${props=>props.marginTop?props.marginTop:'0'};
  margin-bottom:${props=>props.marginBottom?props.marginBottom:'0'};
  background-color:${props=>props.bgColor};

  justify-content:center;
  background-color:#262628;
  width:100%;
  height:200px;


  @media screen and (max-width: 400px) {
    & {
      display:flex;
    }
  }
`;

export const MainFooterInner = styled.div`
  display:flex;
  flex-direction:${props=>props.flexDirection?props.flexDirection:'row'};;
  justify-content:${props=>props.justifyContent?props.justifyContent:'space-between'};
  align-items:${props=>props.alignItems?props.alignItems:'center'};
  width:${props=>props.width?props.width:'100%'};
  margin-top:${props=>props.marginTop?props.marginTop:'0'};
  margin-bottom:${props=>props.marginBottom?props.marginBottom:'0'};
  background-color:${props=>props.bgColor};

  justify-content:center;
  background-color:#262628;
  width:100%;
  height:200px;


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

export const GetInTouchCaption = styled.div`
  color:#FFFFFF;
  fontSize:20px;
  font-family:"Darker Grotesque";
  display:flex;
  flex-direction:row;
`;

export const WebsiteLink = styled.div`
  color:#ffffff;
  font-family:"Eczar";
  font-size:20px;
`;