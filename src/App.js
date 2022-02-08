import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import {RouteWithLayout} from './components/routers';
import {MainLayout} from './layouts';
import {
  HomePage,
  ItemsByCategoryPage,
  ArticlePage,
  
  NotFoundPage
} from './pages';

//ArticlePage
function Dashboard(){
  return(
      <Router>
        <Switch>

          <RouteWithLayout path="/" 
            exact 
            activeRoute={"Home"}
            pageTitle="Home::."
            component={HomePage} 
            layout={MainLayout} 
          />

          <RouteWithLayout path="/category/:categorylink" 
            exact 
            activeRoute={"category"}
            pageTitle="Category::."
            component={ItemsByCategoryPage} 
            layout={MainLayout} 
          />

          <RouteWithLayout path="/article/:articlelink" 
            exact 
            activeRoute={"article"}
            pageTitle="Article::."
            component={ArticlePage} 
            layout={MainLayout} 
          />

          <Route path="*" component={NotFoundPage} />

        </Switch>
      </Router>
  );
}

function App() {
  return ( 
    <>
      <Dashboard/>
    </>
  );
}

export default App;
