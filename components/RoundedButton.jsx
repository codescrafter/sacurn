function RoundedButton(props) {
  return (
    <button className={`rounded-mdlg ${props.className}`} onClick={props.onClick}>
      <p className={`mx-auto my-auto ${props.childClassName}`}>{props.children}</p>
    </button>
  );
}

export default RoundedButton;
