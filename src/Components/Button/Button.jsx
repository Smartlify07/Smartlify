const Button = (props) => {
  return (
    <button
      className={`${props.background}  ${props.width} px-5 py-3 flex gap-2 items-center font-normal self-start font-poppins  text-white`}
    >
      {props.value}
      {props.icon}
    </button>
  );
};

export default Button;
