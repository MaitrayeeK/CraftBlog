import { useEffect, useState } from 'react'
import './App.css'
import { Navbar, Header, Footer, Login, Signup, Home, Blog, UserProfile, AddUserData, AddBlog, GenerateBlog } from './Components';
import NavbarSticky from './Components/Navbar/NavbarSticky';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { isSignedIn, auth } from './Functionalities/Firebase/Authentication';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from './Functionalities/Features/getAuthdataSlice';
import { getUserAllData } from './Functionalities/Firebase/GetData';
import { getUser } from './Functionalities/Features/getUserDataSlice';

function App() {
  const dispatch = useDispatch();
  let currentUser = auth.currentUser;
  console.log(currentUser);
  const [authData, setAuthData] = useState({ result: currentUser ? true : false, user: currentUser ? auth.currentUser : {} });
  dispatch(getAuth(authData));
  userData();

  async function userData() {
    const data = await getUserAllData(currentUser.uid);
    console.log(data);
    dispatch(getUser({ user: currentUser.toJSON(), doc: data.doc, blogs: data.blogs, genblogs: data.genblogs }));
  }

  useEffect(() => {
    isSignedIn(setAuthData).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
    currentUser = auth.currentUser;
    console.log(currentUser);
    dispatch(getAuth({ result: currentUser ? true : false, user: currentUser ? auth.currentUser.toJSON() : {} }));
    userData();

  }, []);

  const isLoggedIn = useSelector((state) => state.getAuth.isLoggedIn);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<UserProfile isLoggedIn={isLoggedIn} />} />
          <Route path="/addUserData" element={<AddUserData />} />
          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/generateBlog" element={<GenerateBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
