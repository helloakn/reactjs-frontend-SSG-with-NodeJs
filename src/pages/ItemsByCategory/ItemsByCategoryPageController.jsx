import { Component } from 'react';

// import img1 from '../../assets/images/property/img1.jpg';
// import img2 from '../../assets/images/property/img2.jpg';
// import img3 from '../../assets/images/property/img3.jpg';

class ItemsByCategoryPageController extends Component {
    constructor(props) {
        super(props);
        this.state ={
            detail:{
                id:"1",
                name:"name",
                description:"description",
                image:"image",
                created_at:"created_at",
            },
            articles : [
               
            ],
            categoryLink:this.props.match.params.categorylink,
        };

        // Variables
        
        // end Variable
        document.title = "Application Library";
        

    }
    componentDidMount() {
        let categoryLink = "http://localhost:8000/www/getcategorydetail/" + this.state.categoryLink;
        fetch(categoryLink)
        .then(res => res.json())
        .then(
          (result) => {
            //me.setState({
             //   "latestArticles":result.data.latestArticles
           // });
           this.setState({
               "detail" : result.data.categoryDetail,
               "articles":result.data.articles
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

export {ItemsByCategoryPageController};