import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/Layouts";
import { Login } from "./pages/login/Login";
import { Books } from "./pages/Books/Books";
import { PATH_PAGE } from "./routes/paths";
import { PrivateRoute, LoggedInUser } from "./routes/routes";
import { BookDetails } from "./pages/BookDetails/BookDetails";
import { BookAddEdit } from "./pages/BookAddEdit/BookAddEdit";
import { NotFound } from "./pages/NotFound/NotFound";

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
                <BookAddEdit />
              </MainLayout>
            }
          />
          <Route
            path={PATH_PAGE.bookEdit}
            element={
              <MainLayout>
                <BookAddEdit />
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

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
