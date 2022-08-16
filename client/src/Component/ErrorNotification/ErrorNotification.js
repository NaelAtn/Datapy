import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { clearErrorsInscri } from "../../JS/Actions/inscri";
import { clearErrorsMessage } from "../../JS/Actions/message";


const Notification = ({ error }) => {
  const [show, setshow] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setshow(false);
      dispatch(clearErrorsMessage());
      dispatch(clearErrorsInscri());
    }, 6000);
  }, [show, dispatch]);

  return (
    <div>
      <div>
        {show && (
          <div>
            {toast.error(error.msg)}
            <ToastContainer
              position="top-center"
              autoClose={6000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              pauseOnHover
              draggable
              className="toast-text"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
