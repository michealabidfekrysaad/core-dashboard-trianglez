import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/Layouts";
import { Login } from "./pages/login/Login";
import { Books } from "./pages/Books/Books";
import { PATH_PAGE } from "./routes/paths";
import { PrivateRoute, LoggedInUser } from "./routes/routes";
import { BookDetails } from "./pages/BookDetails/BookDetails";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoggedInUser />}>
          <Route path={PATH_PAGE.login} element={<Login />} />
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route
            path={PATH_PAGE.books}
            element={
              <MainLayout>
                <Books />
              </MainLayout>
            }
          />
          <Route
            path={PATH_PAGE.booksAdd}
            element={
              <MainLayout>
                <h1>pagea dd books</h1>
              </MainLayout>
            }
          />
          <Route
            path={PATH_PAGE.bookEdit}
            element={
              <MainLayout>
                <h1>page for edit the book</h1>
              </MainLayout>
            }
          />
          <Route
            path={PATH_PAGE.bookDetails}
            element={
              <MainLayout>
                <BookDetails />
              </MainLayout>
            }
          />

          <Route path="*" element={<h1>not found component must appear</h1>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
