import React from 'react';

import "./MainLayoutCss.css";

import {MainLayoutController} from './MainLayoutController';
import 
    {
        DefaultColor,

        MainContainer,
        MenuContainer,
        MenuSmall,
            MenuInner,MenuFloat,
        MenuBig,
        MenuLine,
        Alink,
        MainBody,DivFloat,
        MainFooter,
        MainFooterInner,
        GetInTouchCaption,
        WebsiteLink
    } 
from './MainLayoutElement';

//import logo from '../../logo.svg';
import logo from '../../components/logo.svg';
import {Icon} from '../../components/icons';

// =============================== VARIABLE ==================================



// =============================== END VARIABLE ==============================

class MainLayout extends MainLayoutController {
    
   
    render(){
        //  alertconsole.log('main state');
       // console.log(this.state);
      //  console.log('end main state');
        let menuData = this.state.menu.map((element,index)=>{
            return (<Alink key={'alinkmenu'+element.id} fontSize="16px" href={"category/"+element.name.toLowerCase()} target="new">{element.name}</Alink>);
        });

        let Component = this.props.component;
        let props = this.props;
        return(
            <MainContainer>
                <MenuContainer>
                    <MenuSmall>
                        <MenuInner>
                            <MenuFloat  width="30%">
                                <Alink href="https://github.com/helloakn" target="new">GitHub</Alink>
                                <Alink href="https://www.upwork.com/freelancers/~014bcfc74386c7a188" target="new">UpWork</Alink>
                                <Alink href="https://www.linkedin.com/in/aung-kyaw-nyunt-02755313a/" target="new">Linkedin</Alink>
                                <Alink href="https://www.facebook.com/mr.aungkyawnyunt" target="new">Facebook</Alink>
                            </MenuFloat>
                            <MenuFloat  width="15%">
                                <Alink href="http://www.google.com" target="new">#Green</Alink>
                                <Alink href="http://www.google.com" target="new">#Orange</Alink>
                                <Alink href="http://www.google.com" target="new">#Blue</Alink>
                            </MenuFloat>
                        </MenuInner>
                    </MenuSmall>
                    <MenuBig>
                        <MenuInner>
                            <MenuFloat width="13%">
                                <a href="https://www.aungkyawnyunt.com" style={{display:"flex",flexDirection:'row',alignItems:'center',textDecoration:"none"}}> 
                                    <img src={logo} height="70%" className="App-logo" alt="logo" />
                                    <WebsiteLink >application.net</WebsiteLink>
                                </a>
                            </MenuFloat>
                            <MenuFloat width="40%">
                            <Alink  fontSize="16px" href="#" target="new">Home</Alink>
                                {menuData}
                            </MenuFloat>
                        </MenuInner>
                    </MenuBig>
                    <MenuLine></MenuLine>
                </MenuContainer>

{/* --- Begin MainBody */}
                <MainBody>
                   <Component {...props} parentmenucallback={this.setParentMenuCallBack} />
                </MainBody>
{/* --- End MainBody */}

{/* --- Begin Footer */}
                <MainFooter>
                    <MainFooterInner  
                        flexDirection="row" 
                        justifyContent="flex-start" 
                        alignItems="flex-start" 
                        width="80%" 
                    >
                        <DivFloat justifyContent="center" flexDirection="column"  bgColor="#262628" width="50%" height="100%">
                            
                            <img src={logo} height="50%" className="App-logo" alt="logo" />
                            <div style={{color:"#ffffff",fontFamily:"Darker Grotesque"}}>
                            &#169; All right Reserved. Inspired Codes...
                            </div>
                        </DivFloat>
                        <DivFloat justifyContent="flex-start"  flexDirection="column"  bgColor="262628" width="50%" height="200px">
                            
                                <div style={{width:"50%",marginTop:20,color:DefaultColor,fontFamily:"Dancing Script",fontSize:30}}>
                                    Get In Touch<br/>
                                </div>
                                <DivFloat 
                                    flexDirection="row" 
                                    justifyContent="flex-start" 
                                    alignItems="flex-start" 
                                    width="50%" 
                                    height="60%"
                                >
                                        <DivFloat 
                                            flexDirection="column" 
                                            justifyContent="space-around" 
                                            alignItems="flex-start" 
                                            width="10%" 
                                        >
                                            <Icon  icon={"fas fa-mobile-alt"} />
                                            <Icon  icon={"fas fa-mail-bulk"} />
                                            <Icon  icon={"fas fa-dice-d20"} />
                                        </DivFloat>
                                        <DivFloat 
                                            flexDirection="column" 
                                            justifyContent="space-around" 
                                            alignItems="flex-start" 
                                            width="95%" 
                                            height="100%"
                                        >
                                            
                                            <GetInTouchCaption>
                                                +95 9763764572
                                            </GetInTouchCaption>
                                            <GetInTouchCaption>
                                                aungkyawnyunt2004@gmail.com
                                            </GetInTouchCaption>
                                            <GetInTouchCaption>
                                                <Alink href="#">Facebook</Alink> , 
                                                <Alink href="#">Twitter</Alink> , 
                                                <Alink href="#">Linkedin</Alink>
                                            </GetInTouchCaption>
                                            
                                        </DivFloat>
                            </DivFloat>
                        </DivFloat>
                        
                    </MainFooterInner>
                </MainFooter>
{/* --- END Footer */}
            </MainContainer>
        )
    }
}
export {MainLayout};
