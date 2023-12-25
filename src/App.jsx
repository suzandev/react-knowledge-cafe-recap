import { useState } from "react";
import Blogs from "./Components/Blogs/Blogs";
import BookMarks from "./Components/BookMarks/BookMarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (time, id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    const remainingBookmarks = bookmarks.filter(
      (bookMark) => bookMark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };

  return (
    <div className="container mx-auto">
      <Header />
      <div className="md:flex mt-5 gap-4">
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          handleMarkAsRead={handleMarkAsRead}
        />
        <BookMarks bookmarks={bookmarks} readingTime={readingTime} />
      </div>
    </div>
  );
}

export default App;
