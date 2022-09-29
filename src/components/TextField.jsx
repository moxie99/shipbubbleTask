const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div className="flex flex-col my-2">
      <label className="mb-2 text-base text-[#3734a9]">{label}</label>
      <input
        className="px-3 py-2 bg-gray-200 border-2 rounded-lg outline-none w-96"
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TextField;
