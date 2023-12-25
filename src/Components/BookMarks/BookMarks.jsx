import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookmarks, readingTime }) => {
  // return (
  //   <div className="md:w-1/3">
  //     <h3>BookMarks: {bookmarks.length} </h3>
  //   </div>
  // );

  return (
    <div className="container mx-auto p-4 md:w-1/3">
      <h1 className="text-3xl font-bold mb-4 text-center">My Bookmarks</h1>
      <h3 className="text-xl font-bold mb-4 text-center dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-white p-2 rounded-md">
        Reading Time: {readingTime}
      </h3>
      <div className="grid gap-4">
        {bookmarks.map((bookmark, idx) => (
          <BookMark bookmark={bookmark} key={idx} />
        ))}
      </div>
    </div>
  );
};

BookMarks.propTypes = {
  bookmarks: PropTypes.node,
  readingTime: PropTypes.node,
};

export default BookMarks;
