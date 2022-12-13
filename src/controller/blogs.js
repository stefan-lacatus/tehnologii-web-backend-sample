/**
 * This file contains the actual implementation of the routes
 * for managing blog posts
 */
let blogs = [
  {
    id: 1,
    title: 'This is an experiment',
  },
  {
    id: 2,
    title: 'Fastify is pretty cool',
  },
  {
    id: 3,
    title: 'Just another blog, yea!',
  },
];

// Handlers
export const getAllBlogs = async (req, reply) => {
  return blogs;
};

export const getBlog = async (req, reply) => {
  const id = Number(req.params.id); // blog ID
  const blog = blogs.find((blog) => blog.id === id);
  return blog;
};

export const addBlog = async (req, reply) => {
  const id = blogs.length + 1; // generate new ID
  const newBlog = {
    id,
    title: req.body.title,
  };

  blogs.push(newBlog);
  return newBlog;
};

export const updateBlog = async (req, reply) => {
  const id = Number(req.params.id);
  blogs = blogs.map((blog) => {
    if (blog.id === id) {
      return {
        id,
        title: req.body.title,
      };
    }
  });

  return {
    id,
    title: req.body.title,
  };
};

export const deleteBlog = async (req, reply) => {
  const id = Number(req.params.id);

  blogs = blogs.filter((blog) => blog.id !== id);
  return { msg: `Blog with ID ${id} is deleted` };
};
