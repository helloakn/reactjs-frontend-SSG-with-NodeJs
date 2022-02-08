
import React from 'react';

import {ItemsByCategoryPageController} from './ItemsByCategoryPageController';
import {
    DivMainContainer,
    DivFloat,Header,ListItemRow
}
    from './ItemsByCategoryPageElement';

import {DefaultColor} from '../../components/config';
import {chunkArray} from '../../classes/ChunkArray';
import {ListItemSmall} from '../../components/Items';


class ItemsByCategoryPage extends ItemsByCategoryPageController {
    
    render() {
        let detail = this.state.detail;
        let articleData = chunkArray(this.state.articles,3);
        let datas = articleData.map((element,index)=>{
            return (<ListItemRow key={"key"+index}>
                    {
                        element.map((elm,i)=>{
                            return (<ListItemSmall item={elm} key={"listiemsmall"+i} />)
                        })
                    }
                </ListItemRow>
            );
        });

        return (
            <DivMainContainer>
               
               <Header >
                    
                           
                                
                                <DivFloat 
                                    flexDirection="column" 
                                    justifyContent="flex-end" 
                                    alignItems="flex-start" 
                                    width="80%" 
                                >
                                    <br/><br/>
                                    <div
                                    style={{color:DefaultColor,fontSize:30,fontFamily:"Dancing Script"}}
                                    >
                                        {detail.name} Tutorials<br/>
                                    </div>
                                    
                                    <div 
                                    style={{color:DefaultColor,marginTop:5,fontSize:25,fontFamily:"Darker Grotesque"}}
                                    >
                                           {detail.description}
                                    </div><br/>
                                </DivFloat>
                </Header>
                <DivFloat  
                                flexDirection="column" 
                                justifyContent="flex-start" 
                                alignItems="flex-start" 
                                width="80%" 
                            >
                               {datas}
                            
                </DivFloat>

            </DivMainContainer>
        );
    }
}



export {ItemsByCategoryPage};