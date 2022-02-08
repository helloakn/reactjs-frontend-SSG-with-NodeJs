import React from 'react';

import {HomePageController} from './HomePageController';
import {
    DivMainContainer,
    DivFloat,DivFloatBgImage,
    ULContainer,
    LIElement,
    HorizonalScrollContainer,
    ListItemContainer,
    ListItemRow,

    BannerContainer,BannerContainerLeft,
    DivMessage,DivAboutMe,
    ALink
}
    from './HomePageElement';

import {Icon} from '../../components/icons';

import akn from '../../assets/images/akn.png';
import logo from '../../components/logo.svg';
import {DefaultColor} from '../../components/config';

import {ListItemSmall} from '../../components/Items';
import {MobileItem} from '../../components/Items';

import {chunkArray} from '../../classes/ChunkArray';

class HomePage extends HomePageController {
   
    render() {
        let articleData = chunkArray(this.state.articles,3);

        let datas = articleData.map((element,index)=>{
            return (<ListItemRow key={"key"+index}>
                    {
                        element.map((elm,i)=>{
                            return (<ListItemSmall item={elm} key={"listiemsmall"+i} />)
                        })
                    }
                </ListItemRow>);
        });
        // let articles = this.state.articles;
        // //articles = chunkArray(articles,3);
        // let datas = articles.map((element,index)=>{
        //     return(<ListItemSmall item={element} key={"listiemsmall"+index} />);
        // });

        let mobileApplicationsElements = this.state.mobileApplications.map((element,index)=>{
            return( index===0?<MobileItem key={"mobileitem"+index} item={element} marginLeft="0px"/> : <MobileItem key={"mobileitem"+index} item={element} marginLeft="35px" />);
        });

        return (
            <DivMainContainer>
                <BannerContainer >
                    <BannerContainerLeft>
                       
                            <DivFloat 
                            flexDirection="row" 
                            justifyContent="flex-start" 
                            alignItems="flex-start" 
                            width="100%" 
                            height="30%"
                            >
                               {//comments
                                /*
                                left
                                */
                               }
                                <DivFloat 
                                    flexDirection="column" 
                                    justifyContent="flex-start" 
                                    alignItems="flex-start" 
                                    width="10%" 
                                >
    
                                </DivFloat>
                                <DivFloat 
                                    flexDirection="column" 
                                    justifyContent="flex-end" 
                                    alignItems="flex-start" 
                                    width="95%" 
                                >
                                    <div
                                    style={{color:DefaultColor,fontSize:30,fontFamily:"Dancing Script"}}
                                    >
                                        Hello!<br/>
                                    </div>
                                    <div
                                    style={{color:DefaultColor,marginTop:5,fontSize:30,fontFamily:"Dancing Script"}}
                                    >
                                        I’m Aung Kyaw Nyunt ( AKN ).</div>
                                    <div 
                                    style={{color:DefaultColor,marginTop:5,fontSize:25,fontFamily:"Darker Grotesque"}}
                                    >
                                        Software Engineer, DevOps/DevSecOps Engineer, <br/>
                                        Cloud Solution Architect as a freelancer.
                                    </div>
                                </DivFloat>
                            </DivFloat>

                            <DivFloat 
                            flexDirection="row" 
                            justifyContent="flex-start" 
                            alignItems="flex-start" 
                            width="100%" 
                            height="30%"
                            >
                               {//comments
                                /*
                                contact information
                                */
                               }
                                <DivFloat 
                                    flexDirection="column" 
                                    justifyContent="space-around" 
                                    alignItems="flex-start" 
                                    width="10%" 
                                >
                                    <Icon  icon={"fas fa-map-marker-alt"} />
                                    <Icon  icon={"fas fa-mobile-alt"} />
                                    <Icon  icon={"fas fa-mail-bulk"} />
                                    <Icon  icon={"fas fa-dice-d20"} />
                                </DivFloat>
                                <DivFloat 
                                    flexDirection="column" 
                                    justifyContent="space-around" 
                                    alignItems="flex-start" 
                                    width="95%" 
                                >
                                    <div
                                    style={{color:"#FFFFFF",fontSize:20,fontFamily:"Darker Grotesque"}}
                                    >
                                       No(26), Than Lan Street, Hlaing Township,Yangon City, Myanmar.
                                    </div>
                                    <div
                                    style={{color:"#FFFFFF",fontSize:20,fontFamily:"Darker Grotesque"}}
                                    >
                                       +95 9763764572
                                    </div>
                                    <div
                                    style={{color:"#FFFFFF",fontSize:20,fontFamily:"Darker Grotesque"}}
                                    >
                                       aungkyawnyunt2004@gmail.com
                                    </div>
                                    <div
                                    style={{color:"#FFFFFF",fontSize:20,fontFamily:"Darker Grotesque"}}
                                    >
                                       https://www.applix.net
                                    </div>
                                    
                                </DivFloat>
                            </DivFloat>




                            <DivFloat 
                            flexDirection="row" 
                            justifyContent="flex-start" 
                            alignItems="flex-start" 
                            width="100%" 
                            height="20%"
                            >
                               {//comments
                                /*
                                left
                                */
                               }
                                <DivFloat 
                                    flexDirection="column" 
                                    justifyContent="flex-start" 
                                    alignItems="flex-start" 
                                    width="10%" 
                                >
    
                                </DivFloat>
                                <DivFloat 
                                    flexDirection="column" 
                                    justifyContent="flex-end" 
                                    alignItems="flex-start" 
                                    width="95%" 
                                >
                                    <DivFloat 
                                        flexDirection="row" 
                                        justifyContent="flex-start" 
                                        alignItems="center" 
                                        width="95%" 
                                    >
                                        <ALink href="https://www.google.com" 
                                        bgColor="#000000"
                                        >
                                            Download CV
                                        </ALink>
                                        <ALink href="https://www.google.com" 
                                            bgColor={DefaultColor}
                                            borderColor="#000000"
                                            style={{marginLeft:20}}
                                        >
                                            Hire Me
                                        </ALink>
                                    </DivFloat>
                                    
                                    <div 
                                    style={{color:"#ffffff",marginTop:5,fontSize:20,fontFamily:"Darker Grotesque"}}
                                    >
                                       My attitude is to deliver high quality work by honest for either small or huge.
                                    </div>
                                </DivFloat>
                            </DivFloat>

                        </BannerContainerLeft>
                        <DivFloat  
                            width="40%" 
                            height="100%"
                            justifyContent="flex-start" 
                            alignItems="flex-end" 
                        >
                            <img src={akn} style={{marginLeft:0,height:'90%',marginBottom:0}} height="100%"  alt="logo" />
                        </DivFloat>
                </BannerContainer>


                <DivMessage>
                    <DivAboutMe>
                        <div style={{marginTop:20,color:DefaultColor,fontFamily:"Dancing Script",fontSize:30}}>
                            About Me
                        </div>
                        <p style={{color:"#ffffff",fontFamily:"Darker Grotesque",fontSize:16}}>
                        I'm a Software Engineer, DevOps Engineer, Cloud Solution Architect as a freelancer. 
                        <br/>AWS Cloud Services and a background as above Project Management with over 5 years of intensive work experience in an Agile environment and worked the Senior  Engineer level with over 10 yers.
                        Before my journey of freelance, I worked in Zote By Focus Innovation as Chief Technology Office position.
                        In my free time, I write article for my <label style={{color:DefaultColor}}>applix.net</label>.
                        </p>
                    </DivAboutMe>
                    <DivAboutMe style={{marginTop:20}}>
                        <div style={{color:DefaultColor,fontFamily:"Dancing Script",fontSize:30}}>
                            My Mission Statement
                        </div><br/>
                        <div style={{color:"#ffffff",fontFamily:"Darker Grotesque",fontSize:16}}>I Would ...</div>
                        <ULContainer>
                            <LIElement> &nbsp;&nbsp;&nbsp;Provide Schedule and Delivery On Time.</LIElement>
                            <LIElement> &nbsp;&nbsp;&nbsp;Provide Impact Analystic (To provide "Pros and Cons")</LIElement>
                            <LIElement> &nbsp;&nbsp;&nbsp;Provide Option ( example: I will provide two examples and give you the suggestions as well as "Pros and Cons", so you will have the right choice.)</LIElement>
                            <LIElement> &nbsp;&nbsp;&nbsp;Provide Documentation. ( PDF format from me <label style={{color:DefaultColor}}>or</label> you provide me confluence <label style={{color:DefaultColor}}>or</label> something ...)</LIElement>
                            <LIElement> &nbsp;&nbsp;&nbsp;I would provide future support for free. (depend on projects) </LIElement>
                        </ULContainer>
                    </DivAboutMe>
                </DivMessage>


                
                    <DivFloat  
                       
                        flexDirection="column" 
                        justifyContent="center" 
                        alignItems="center" 
                        width="100%" 
                    >
                       
                       

                            <DivFloat 
                                flexDirection="row" 
                                justifyContent="center" 
                                alignItems="center" 
                                width="80%" 
                                marginTop="50px"
                                marginBottom="20px"
                            >
                            <div>

                            <img src={logo}  className="App-logo" alt="logo" />
                                </div>
                                <div style={{borderBottom:"2px solid #ffffff",fontFamily:"Cuprum",fontSize:63,color:DefaultColor}}>
                                    Latest
                                </div>
                                <div style={{borderBottom:"2px solid "+DefaultColor,fontFamily:"Cuprum",fontSize:63,color:"#ffffff"}}>
                                    &nbsp;Article
                                </div>
                            </DivFloat>
                            <ListItemContainer>
                                {datas}
                            </ListItemContainer>
                    </DivFloat>

                <DivFloatBgImage  flexDirection="column"  justifyContent="flex-start" bgColor="#262628" width="100%">
                
                    <DivFloat  
                        flexDirection="row" 
                        justifyContent="center" 
                        alignItems="center" 
                        width="80%" 

                        marginTop="50px"
                        marginBottom="20px"
                    >
                        <div>
                            <img src={logo}  className="App-logo" alt="logo" />
                        </div>
                        <div style={{borderBottom:"2px solid #ffffff",fontFamily:"Cuprum",fontSize:63,color:DefaultColor}}>
                            Mobile
                        </div>
                        <div style={{borderBottom:"2px solid "+DefaultColor,fontFamily:"Cuprum",fontSize:63,color:"#ffffff"}}>
                            &nbsp;Applications
                        </div>
                    </DivFloat>

                    <DivFloat  
                        flexDirection="column" 
                        justifyContent="flex-start" 
                        alignItems="flex-start" 
                        width="80%" 
                        marginTop="20px"
                    >
                       <HorizonalScrollContainer style={{
                                   
                                }}>
                                   {mobileApplicationsElements}
                                   
                        </HorizonalScrollContainer>
                    </DivFloat>

                </DivFloatBgImage>
                
                

            </DivMainContainer>
        );
    }
}



export {HomePage};