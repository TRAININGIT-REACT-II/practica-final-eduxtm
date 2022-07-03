import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import Home from "./home/Home";
import Login from "./login/Login";
import NotFound from "../../shared/views/error/NotFound";
import Users from "./user/UsersModule";
import CreateAccount from "./user/CreateAccount";
import Notes from "./notes/NotesModule";
import ListNotes from "./notes/ListNotes";
import NoteDetails from "./notes/NoteDetails";
import { LOGIN_PATH } from "../../shared/routes/UserRoutes";
import { NoteModesEnum } from "../../shared/data/NoteModes";

const AppRoutesProvider = () => {
  return (
    <>
      <Router>
        <BasicLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={LOGIN_PATH} element={<Login />} />
            <Route path="users" element={<Users />}>
              <Route path="create" element={<CreateAccount />} />
            </Route>
            <Route path="notes" element={<Notes />}>
              <Route index element={<ListNotes />} />
              <Route
                path="create"
                element={<NoteDetails mode={NoteModesEnum.NEW} />}
              />
              <Route
                path="edit/:id"
                element={<NoteDetails mode={NoteModesEnum.EDIT} />}
              />
              <Route
                path="details/:id"
                element={<NoteDetails mode={NoteModesEnum.VIEW} />}
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BasicLayout>
      </Router>
    </>
  );
};

export default AppRoutesProvider;
