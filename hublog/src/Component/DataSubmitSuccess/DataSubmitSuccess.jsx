import React, { useContext } from "react";
import "./DataSubmitSuccess.css";
import Modal from "../modal/Modal";
import myGlobalContext from "../../Context";

function DataSubmitSuccess() {
    const {setShowPopUp}=useContext(myGlobalContext)
  return (
    <Modal>
      <div className="success_popup_container">
        <div className="sub_container">
          <div className="success">Successful</div>
          <div className="ok"
          onClick={()=>{
            setShowPopUp(false)
          }}
          >OK</div>
        </div>
      </div>
    </Modal>
  );
}

export default DataSubmitSuccess;
