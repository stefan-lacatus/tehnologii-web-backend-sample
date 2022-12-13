/**
 * This file contains the declarations of the routes for
 * accessing and managing the blog
 */
import * as blogController from '../controller/blogs.js';

// The routes are declared as an array of objects
// For each one, we specify the method type, the url pattern and the function that handles that route
export const routes = [
  {
    method: 'GET',
    url: '/api/blogs',
    handler: blogController.getAllBlogs,
  },
  {
    method: 'GET',
    url: '/api/blogs/:id',
    handler: blogController.getBlog,
  },
  {
    method: 'POST',
    url: '/api/blogs',
    handler: blogController.addBlog,
  },
  {
    method: 'PUT',
    url: '/api/blogs/:id',
    handler: blogController.updateBlog,
  },
  {
    method: 'DELETE',
    url: '/api/blogs/:id',
    handler: blogController.deleteBlog,
  },
];
