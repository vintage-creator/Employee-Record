import React, { useContext } from "react";
import "./DataSubmitFailed.css";
import Modal from "../modal/Modal";
import myGlobalContext from "../../Context";

function DataSubmitFailed() {
    const {setShowPopUp2}=useContext(myGlobalContext)
  return (
    <Modal>
      <div className="success_popup_container">
        <div className="sub_container">
          <div className="success">Error!</div>
          <div className="ok"
          onClick={()=>{
            setShowPopUp2(false)
          }}
          >OK</div>
        </div>
      </div>
    </Modal>
  );
}

export default DataSubmitFailed;
