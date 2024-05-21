<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
import News from '../../page/News/Index'
import Contact from '../../page/Contacts';
import Account from '../../page/Personal account';
import Shop from '../../page/Shop';
=======
import { Route, Routes } from "react-router-dom";
import News from "../../page/News/Index";
import Contact from "../../page/Contacts";
import Account from "../../page/Personal account";
import Shop from "../../page/Shop";
>>>>>>> master

const MainRouter = () => {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="Contact" element={<Contact/>} />
      <Route path="News" element={< News/>} />
      <Route path='PersonalAccount' element={<Account/>}></Route>
      <Route path='Shop' element={<Shop/>}></Route>
=======
      <Route path="Contact" element={<Contact />} />
      <Route path="News" element={<News />} />
      <Route path="PersonalAccount" element={<Account />}></Route>
      <Route path="Shop" element={<Shop />}></Route>
>>>>>>> master
    </Routes>
  );
};

<<<<<<< HEAD
export default MainRouter;
=======
export default MainRouter;
>>>>>>> master
