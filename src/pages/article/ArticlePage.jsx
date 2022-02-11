
import React from 'react';

import './Article.css';
import {ArticlePageController} from './ArticlePageController';
import {
    DivMainContainer,
    DivMainContainerInner,
    DivMainBody,
    DivMainLeft,DivMainLeftInner,
    DivMainRight,
    Header,HeaderImage,HeaderContent,
    DivAuthorContainer,DivAuthorImage,DivAuthorInfo,ReleaseDate,

    Title,Caption,
    CategoryContainer,
    AButton,
    
    DivMainContainerBody,
    DivCodeContainer,
    DivCode
    
}
from './ArticlePageElement';

import {RelatedItem} from '../../components/Items';

import Gist from "react-gist";

import {APP_DOMAIN,API_Domain,IMAGE_Domain} from '../../components/config';

const ArticleDetailElements=(props)=>{
    let _element = props.element;
    let _key = props.keyid;
    /*
    _element.type => 
        1 for image, 
        2 for code, 
        3 for single code.
        4 for text, 
        5 for movie.
        
    */	
   //console.log('ArticleDetailElements');
   //console.log(_element);
  // console.log(_key);
    switch(_element.type){
        case '1': // image
            return (
                <div>
                    <Caption>{_element.title}</Caption>
                    <img src={_element.description} alt="article Detail" />
                </div>
            );
        case '2': // gist code
            return (
                <div>
                    <Caption>{_element.title}</Caption>
                    <Gist id={_element.description} />
                </div>
                
            );
        case '3': // single code
                return (
                    <DivCodeContainer>
                        <Caption>{_element.title}</Caption>
                        <DivCode dangerouslySetInnerHTML={{
                            __html: _element.description
                        }} >
                        </DivCode>
                    </DivCodeContainer>
                );
        case '4': // text
            return (
                <div>
                    <Caption>{_element.title}</Caption>
                    <div dangerouslySetInnerHTML={{
                        __html: _element.description
                    }} >
                    </div>
                </div>
            );
        
        default :
            return <RelatedItem item={_element} key={_key} />
    }
    
}
class ArticlePage extends ArticlePageController {
    
    render() {

        let article = this.state.article;
        let categories = article.categories.map((element,index)=>{
            return (index===0?<AButton href={APP_DOMAIN+"category/"+element.name} key={'abutton'+element.id}  >{element.name}</AButton>:<AButton marginLeft="20px" href={APP_DOMAIN+"category/"+element.name} key={'abutton'+element.id}>{element.name}</AButton>);
        });

        let latestArticles = this.state.latestArticles.map((element,i)=>{
            return (<RelatedItem item={element} key={"listiemsmall"+i} />);
        });

        let articleDetails = this.state.articleDetail.map((element,i)=>{
            // type => 1 for image, 2 for code, 3 for text, 4 for movie.	
            return (<ArticleDetailElements element={element} keyid={"articledetailelement"+i} key={"articledetailelement"+i} />);
        });

        return (
            <DivMainContainer>
                <DivMainContainerInner>
                    <Header>  
                        <HeaderImage>
                            <img alt="Article Cover" src={IMAGE_Domain+article.image} width="100%" />
                        </HeaderImage> 
                        <HeaderContent>
                            <Title>{article.title}</Title>
                            <CategoryContainer>
                                {categories}
                            </CategoryContainer>
                            <DivAuthorContainer>
                                <DivAuthorImage>
                                    <img alt="Author" src={IMAGE_Domain+article.author_profile_image} width="100%" />
                                </DivAuthorImage>
                                <DivAuthorInfo>
                                    <label>Author : {article.author_name}</label>
                                    <ReleaseDate>{article.created_at}</ReleaseDate>
                                </DivAuthorInfo>
                            </DivAuthorContainer>
                        </HeaderContent>
                    </Header>
                    
                    
                </DivMainContainerInner>

                <DivMainContainerBody>
                    <DivMainBody>
                        <DivMainLeft>
                            <DivMainLeftInner 
                                style={{backgroundColor:"#3e4048"}} 
                                className="divContent"
                            >
                                <div dangerouslySetInnerHTML={{
                                    __html: article.intro
                                }} >
                                </div>
                            </DivMainLeftInner>
                            <DivMainLeftInner 
                                
                                className="divContent"
                            >
                                {articleDetails}
                            </DivMainLeftInner>
                        </DivMainLeft>
                        <DivMainRight>
                            {latestArticles}<br/>
                        </DivMainRight>
                    </DivMainBody>
                </DivMainContainerBody>

                

            </DivMainContainer>
        );
    }
}



export {ArticlePage};