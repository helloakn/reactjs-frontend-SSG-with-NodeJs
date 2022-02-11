
import React from 'react';

import {ItemsByCategoryPageController} from './ItemsByCategoryPageController';
import {
    DivMainContainer,
    DivFloat,Header,ListItemRow
}
    from './ItemsByCategoryPageElement';

import {DefaultColor} from '../../components/config';
import {chunkArray} from '../../classes/ChunkArray';
import {ListItemSmall,EmptyItem} from '../../components/Items';


class ItemsByCategoryPage extends ItemsByCategoryPageController {
    
    render() {
        let detail = this.state.detail;
        let articleData = chunkArray(this.state.articles,3);
        let datas = articleData.map((element,index)=>{
            return (<ListItemRow key={"key"+index}>
                    {
                        element.length===3?
                            element.map((elm,i)=>{
                                return (<ListItemSmall item={elm} key={"listiemsmall"+i} />)
                            })
                        :
                            (
                                element.length===2?
                                [element,2].map((ee,ii)=>{
                                   return(ii===0?
                                        element.map((elm,i)=>{
                                             return (<ListItemSmall item={elm} key={"listiemsmall"+i} />)
                                        })
                                    :
                                    <EmptyItem key={"emptyitem"+ii}  />
                                   )
                                })
                                :
                                [1,2].map((eee,iii)=>{
                                    return( <EmptyItem key={"emptyitems"+iii} />)
                                })
                            )   
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