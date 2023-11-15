import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/Layouts";
import { Login } from "./pages/login/Login";
import { PATH_PAGE } from "./routes/paths";
import { PrivateRoute } from "./routes/routes";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={PATH_PAGE.login} element={<Login />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route
            path={PATH_PAGE.books}
            element={
              <MainLayout>
                <h1>book appear here</h1>
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
                <h1>page for show details of book</h1>
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
