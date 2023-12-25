import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmarks, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3 grid grid-cols-1 lg:grid-cols-2  gap-4">
      {blogs.map((blog) => (
        <Blog
          blog={blog}
          key={blog.id}
          handleAddToBookmarks={handleAddToBookmarks}
          handleMarkAsRead={handleMarkAsRead}
        />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmarks: PropTypes.node,
  handleMarkAsRead: PropTypes.node,
};

export default Blogs;
