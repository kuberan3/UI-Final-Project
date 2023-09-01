import { OutOfDark, OutOfLight } from "./StyledComponents";
const ProgressBar = (props) => {
  const Parentdiv = {
    height: "9px",
    width: "514px",
    backgroundColor: "#F0F2F4",
    borderRadius: 3,
    marginLeft: "-25px",
  };

  const Childdiv = {
    height: "9px",
    width: `${props.progress}%`,
    backgroundColor: `${props.clr}`,
    borderRadius: 3,
    textAlign: "right",
  };

  return (
    <div style={Parentdiv}>
      <div>
        <OutOfLight style={{ marginLeft: "466px", marginTop: "-29px" }}>
          {props.total}
        </OutOfLight>
        <OutOfDark style={{ marginLeft: "450px", marginTop: "-28px" }}>
          {" "}
          / {props.outof}
        </OutOfDark>
      </div>

      <div style={Childdiv}></div>
    </div>
  );
};

export default ProgressBar;
