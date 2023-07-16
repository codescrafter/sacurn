function Card(props) {
  return (
    <div
      className={`rounded-mdlg bg-white flex flex-col min-[1700px]:w-76.2 min-[1600px]:w-74.7 2xl:w-72 min-[1450px]:w-66 min-[1350px]:w-62 xl:w-59 min-[1230px]:w-53 min-[1150px]:w-51 min-[1100px]:w-48 w-46 min-[1600px]:h-79 2xl:h-76.2 min-[1450px]:h-62 min-[1350px]:h-62 xl:h-60 h-51 items-center ${props.className}`}
    >
      {props.children}
    </div>
  );
}

export default Card;
