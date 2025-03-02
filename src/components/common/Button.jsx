const Button = ({ children, className, ...props }) => {
    return (
      <button
        className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  