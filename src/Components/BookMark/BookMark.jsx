import PropTypes from "prop-types";

const BookMark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
      <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h2>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Visit Website
      </a>
    </div>
  );
};

BookMark.propTypes = {
  bookmark: PropTypes.node,
};

export default BookMark;
