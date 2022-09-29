const Button = ({ onClick, children }) => {
  return (
    <button
      className="px-6 py-2 my-10 text-white bg-[#3734a9] rounded hover:bg-[#ff5170]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
