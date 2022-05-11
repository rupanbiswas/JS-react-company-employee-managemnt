import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddCompany from './screens/AddCompany';
import Homepage from './screens/Homepage';
import AddUser from './screens/AddUser';
import DeleteCompany from './screens/DeleteCompany';
import ListUsers from './screens/ListUsers';
import UsersByCompany from './screens/UsersByCompany';
import AllotUser from './screens/AllotUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} exact></Route>
        <Route path='/addCompany' element={<AddCompany />} exact></Route>
        <Route path='/addUser' element={<AddUser />} exact></Route>
        <Route path='/deleteCompany' element={<DeleteCompany />} exact></Route>
        <Route path='/listUsers' element={<ListUsers />} exact></Route>
        <Route path='/allots' element={<AllotUser />} exact></Route>
        <Route
          path='/usersByCompany'
          element={<UsersByCompany />}
          exact
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
