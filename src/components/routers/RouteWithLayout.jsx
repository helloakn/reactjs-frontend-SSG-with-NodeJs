
import { Route } from "react-router-dom";

// export function RouteWithLayout({
//     component: Component, 
//     layout: Layout, 
//     ...properties
//   }) {
//     return (
//       <Route {...properties} render={(props) =>
//         <Layout  {...properties} {...props}>
//           <Component {...properties} {...props} />
//         </Layout>
//       } />
//     );
//   }

export function RouteWithLayout({
    component: Component, 
    layout: Layout, 
    ...properties
  }) {
    return (
      <Route {...properties} render={(props) =>
        <Layout  {...properties} {...props} component={Component} />
      } />
    );
  }