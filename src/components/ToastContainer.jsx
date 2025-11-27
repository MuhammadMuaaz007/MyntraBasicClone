import { useSelector } from "react-redux";
import Toast from "./Toast";

const ToastContainer = () => {
  const toasts = useSelector((store) => store.toasts || []);

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => {}}
        />
      ))}
    </div>
  );
};

export default ToastContainer;

