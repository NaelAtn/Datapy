import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { clearSuccessInscri } from "../../JS/Actions/inscri";
import { clearSuccessMessage } from "../../JS/Actions/message";
import "./SucessNotification.css";

const SucessNotification = ({ success }) => {
  const [show, setshow] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setshow(false);
      dispatch(clearSuccessMessage());
      dispatch(clearSuccessInscri());
    }, 6000);
  }, [show, dispatch]);

  return (
    <div>
      <div>
        {show && (
          <div>
            {toast.success(success.msg)}
            <ToastContainer
              position="top-center"
              autoClose={4000}
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

export default SucessNotification;
