const Button = ({ text, color="black", children }) => {
  const onClickEvent = (e) => {
    console.log(text);
    console.log(e);
  };

  return (
    <>
      <button 
        onClick={onClickEvent}
        style={{ color: color }}
      >
        {text} - {color.toUpperCase()}
        {children}
      </button>
    </>
  );
};

export default Button;