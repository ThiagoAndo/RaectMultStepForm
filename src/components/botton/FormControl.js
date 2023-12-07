import { useState, useRef, useContext } from "react";
import AuthContext from "../../context/auth-context";

import "./FormControl.css";
import Modal from "../../UI/Modal";

const FormControl = ({ onClick, click }) => {
  const [msg, setMsg] = useState(["", ""]);
  const context = useContext(AuthContext);
  const modal = useRef();
  const handleClick = (e) => {
    switch (e.target.innerHTML[0]) {
      case "N":
        if (click >= 0) {
          if (click === 0 && !context.formConf) {
            setMsg([
              {
                msg: "Make sure to fill in the form. The filds must be correct",
              },
              { call: "alert" },
            ]);
            modal.current.open();
          } else if (click === 0 && context.formConf === true) {
            onClick("forward");
          } else if (click === 1 && context.choosePlan.type) {
            onClick("forward");
          } else if (click === 1 && !context.choosePlan.type) {
            setMsg([
              {
                msg: "In order to carry on with your purcahse you should pick a plan",
              },
              { call: "alert" },
            ]);

            modal.current.open();
          } else if (click === 1 && context.choosePlan) {
            onClick("forward");
          } else if (click === 2 && context.chooseAdd.length === 0) {
            setMsg([
              {
                msg: "Are you sure you will not enhance your experience with this great offer?",
              },
              { call: "info" },
            ]);
            modal.current.open();
            onClick(undefined);
          } else if (click === 2 && context.chooseAdd.length > 0) {
            onClick("forward");
            context.setTotal();
          }
        }
        break;
      case "C":
        onClick("forward");
        break;

      case "G":
        if (click >= 1) {
          onClick("backward");
        }
        break;
      default:
        console.log("Something went wrong on FormControl");
    }
  };
  const handleModalAdd = () => {
    onClick("forward");
  };

  if (click === 3) {
    context.setTotal();
  }
  return (
    <div className={"botton"}>
      <Modal
        ref={modal}
        txt={msg[0]}
        call={msg[1]}
        onClick={handleModalAdd}
        click={click}
      ></Modal>
      <button
        className={click >= 1 ? "btn" : "btn intlCol"}
        onClick={handleClick}
      >
        Go Back
      </button>
      <button
        className={"btn"}
        type="submit"
        onClick={handleClick}
        style={click === 3 ? { backgroundColor: "#473dff" } : undefined}
      >
        {click === 3 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};

export default FormControl;
