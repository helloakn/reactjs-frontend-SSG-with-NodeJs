

import { Component } from 'react';

// import img1 from '../../assets/images/property/img1.jpg';
// import img2 from '../../assets/images/property/img2.jpg';
// import img3 from '../../assets/images/property/img3.jpg';

class ArticlePageController extends Component {
    constructor(props) {
        super(props);
        this.state ={
            article : {
                id:1,
                title:'this is title',
                image:'this is image',
                intro:'this is intro',
                link:'this is link',
                description:'this is description',
                categories:[]
            },
            articleDetail :[],
            articlelink:this.props.match.params.articlelink,
            latestArticles : [],
            categories : []
        };

        // Variables
        
        // end Variable
        document.title = "Application Library";
        
    }
    
    componentDidMount() {
        let articlelink = "http://localhost:8000/www/getarticledetail/" + this.state.articlelink;
        fetch(articlelink)
        .then(res => res.json())
        .then(
          (result) => {
         //     console.log(result.data.latestArticles);
            //me.setState({
             //   "latestArticles":result.data.latestArticles
           // });
           this.setState({
            detail:result.data.detail,
               "article":result.data.article,
               "articleDetail":result.data.articleDetail,
               "latestArticles" : result.data.latestArticles,
               "categories" : result.data.category,
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

export {ArticlePageController};