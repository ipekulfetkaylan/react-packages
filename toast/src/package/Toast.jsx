import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast(){
    const notify = () => toast.success("Giriş Başarılı!");

    // hangi türde bir toast istiyosan "warning", "info", "success" yazıp ona göre bir toast gelmesini sağlayabilirsin

    return (
      <div>
        <button onClick={notify}>Click</button>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
      </div>
    );
  }

export default Toast;