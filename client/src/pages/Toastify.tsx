
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {

  const notify = () => {
    toast.warn('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div>
    <button onClick={notify}>Notify!</button>
    <ToastContainer />
  </div>
  )
}

export default Toastify

/*
  😃설치😃
  npm i react-toastify

  toast
  error, info, success, warning  아무것도 없으면 default 값입니다.

  position
  top-left, top-right, top-center, bottom-left, bottom-right, bottom-center

  hideProgressBar
  true, false

  closeOnClick
  true, false

  pauseOnHover
  true, false

  draggable
  true, false

  theme
  dark, light, colored

  transition
  bounce, slide, zoom, flip

  ----------------------------------------------------------------------------------

  ToastContainer 



*/