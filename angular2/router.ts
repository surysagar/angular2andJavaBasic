Base URL Tag

The Base URL tag must be set within the <head> tag of index.html:
<base href="/">


Route Definition Object

The Routes type is an array of routes that defines the routing for the application.

path - URL to be shown in the browser when application is on the specific route
component - component to be rendered when the application is on the specific route
redirectTo - redirect route if needed; each route can have either component or redirect attribute defined in the route (covered later in this chapter)
pathMatch - optional property that defaults to 'prefix'; determines whether to match full URLs or just the beginning. When defining a route with empty path string set pathMatch to 'full', otherwise it will match all paths.
children - array of route definitions objects representing the child routes of this route (covered later in this chapter).



Redirecting the Router to Another :

When your application starts, it navigates to the empty route by default. We can configure the router to redirect to a named route by default:
export const routes: Routes = [
  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: 'component-one', component: ComponentOne },



  Defining Links Between Routes::

  <a routerLink="/component-one">Component One</a>
  or 
  this.router.navigate(['/component-one']);



Linking to Routes with Parameters::

In the ProductList component you could display a list of products. Each product would have a link to the product-details route, passing the ID of the product:

  [routerLink]="['/product-details', product.id]">
