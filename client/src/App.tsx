import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ReactSpringBottomSheet from './pages/ReactSpringBottomSheet';
import MySwiper from './pages/MySwiper';

import './App.css';
import InfinityScroll from './pages/InfinityScroll';
import ReactPagination from './pages/ReactPagination';
import ReactCookie from './pages/ReactCookie';
import ReactJWTTest from './pages/ReactJWTTest';
import Sweetalert2 from './pages/Sweetalert2';
import Socket from './pages/SocketTest';
import ScrolluseRef from './pages/ScrolluseRef';
import ReactHookForm from './pages/ReactHookForm';
import MatterTest from './pages/MatterTest';
import ReactGalleryImg from './pages/ReactGalleryImg';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/bottomSheet" element={<ReactSpringBottomSheet/>}/>
      <Route path="/swiper" element={<MySwiper/>}/>
      <Route path="/infinityScroll" element={<InfinityScroll/>}/>
      <Route path="/pagination" element={<ReactPagination/>}/>
      <Route path="/sweetalert" element={<Sweetalert2/>}/>
      <Route path="/reactCookie" element={<ReactCookie/>}/>
      <Route path="/reactJwt" element={<ReactJWTTest/>}/>
      <Route path="/socket" element={<Socket/>}/>
      <Route path="/scrolluseRef" element={<ScrolluseRef/>}/>
      <Route path="/reacthookform" element={<ReactHookForm/>}/>
      <Route path="/matter" element={<MatterTest/>}/>
      <Route path="/reactgallery" element={<ReactGalleryImg/>}/>

    </Routes>
  );
}

export default App;

