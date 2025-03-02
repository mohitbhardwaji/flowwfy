import toast from "react-hot-toast";

export const SuccessToast = (message) => {
  toast.success(message, {
    style: {
      fontSize: "18px",
      padding: "16px",
      background: "#D4EDDA",
      color: "#155724",
      border: "1px solid #C3E6CB",
    },
  });
};

export const ErrorToast = (message) => {
  toast.error(message, {
    style: {
      fontSize: "18px",
      padding: "16px",
      background: "#F8D7DA",
      color: "#721C24",
      border: "1px solid #F5C6CB",
    },
  });
};
