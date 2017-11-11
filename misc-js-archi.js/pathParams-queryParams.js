
***You can use query parameters for filtering and path parameters for grouping..

::If there is a scenario to retrieve a record based on id, for example you need to get the details of the employee 
whose id is 15, then you can have resource with @PathParam.

GET /employee/{id}   //path parameters


::If there is a scenario where you need to get the details of all employees but only 10 at a time, you may use query param

GET /employee?start=1&size=10   // query parameters 
This says that starting employee id 1 get ten records.

I think that if the parameter identifies a specific entity you should use a path variable. For example, to get all the posts on my blog I request

GET: myserver.com/myblog/posts     // path parameters
to get the post with id = 123, I would request

GET: myserver.com/myblog/posts/123   // path parameters
but to filter my list of posts, and get all posts since Jan 1, 2013, I would request

GET: myserver.com/myblog/posts?since=2013-01-01    // query parameters 
In the first example "posts" identifies a specific entity (the entire collection of blog posts). In the second example, 
"123" also represents a specific entity (a single blog post). But in the last example, 
the parameter "since=2013-01-01" is a request to filter the posts collection not a specific entity. Pagination and ordering would be another good example, i.e.