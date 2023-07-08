function Card(props) {
  return (
    <div
      className={`rounded-mdlg bg-white flex flex-col 2xl:w-76.2 2xl:h-79 items-center ${props.className}`}
    >
      {props.children}
    </div>
  );
}

export default Card;
