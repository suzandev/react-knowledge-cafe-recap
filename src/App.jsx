import Blogs from "./Components/Blogs/Blogs";
import BookMarks from "./Components/BookMarks/BookMarks";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="md:flex">
        <Blogs />
        <BookMarks />
      </div>
    </div>
  );
}

export default App;
