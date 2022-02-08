import { Component } from 'react';

class MainLayoutController extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            menu: [],
        }
        // Variables
        
        // end Variable
    
        this.setParentMenuCallBack = this.setParentMenuCallBack.bind(this);
    }

    

    
    setParentMenuCallBack = (childData) =>{
        this.setState({menu: childData})
    }

}

export {MainLayoutController};