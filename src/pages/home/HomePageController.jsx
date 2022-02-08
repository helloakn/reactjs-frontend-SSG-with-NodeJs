import { Component } from 'react';


class HomePageController extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isOpenSlider:true,
            activeBannerTab : 'forsale',
            articles : [
                
            ],
            mobileApplications : [
                
            ],
        };

        // Variables
        
        // end Variable
        document.title = "Application Library";

        
        
    }

    componentDidMount() {
        fetch("http://localhost:8000/www/gethomedata/")
        .then(res => res.json())
        .then(
          (result) => {
            //me.setState({
             //   "latestArticles":result.data.latestArticles
           // });
           this.setState({
               "articles":result.data.latestArticles,
               "mobileApplications":result.data.mobileAppLists
           });
            this.props.parentmenucallback(result.data.category);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
            });
          }
        ) 
    }
    
    
}

export {HomePageController};