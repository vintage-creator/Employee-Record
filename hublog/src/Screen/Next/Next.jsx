import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Next.module.css";

const Next = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/Form");
  };
  return (
    <div className={styles.container}>
      <div>
        <h1>Bank Details</h1>
      </div>
      {/* bank details */}
      <div className={styles.bankDiv}>
        <div>
          <h5>Institution Name</h5>
          <input type="text" />
        </div>

        <div>
          <h5>Account Owner Name</h5>
          <input type="text" />
        </div>
      </div>
      <div className={styles.RoutingNo}>
        <h5>Routing Number</h5>
        <input type="text" />
      </div>

      <div className={styles.AccountNo}>
        <h5>Account Number</h5>
        <input type="text" />
      </div>

      <div>
        <h1>Tax</h1>
      </div>
      <div className={styles.taxdetails}>
        <h5>Have you submitted the following?</h5>
      </div>

      <div className={styles.documentdDiv}>
        <div>
          <input type="checkbox" className={styles.smallLabel} />
          <span>EIN/SNN</span>
        </div>

        <div>
          <input type="checkbox"  className={styles.smallLabel}  />
          <span>Form I-9</span>
        </div>
        <div>
          <input type="checkbox"  className={styles.smallLabel} />
          <span>Form W-4</span>
        </div>

        <div>
          <input type="checkbox"  className={styles.smallLabel}  />
          <span>state withholding certificate</span>
        </div>
      </div>

      <div className={styles.uploadInfo}>
        <h2>
          Attach completed Tax Declaration Form: <span>*</span>
        </h2>
      </div>

      <div
        id="cid_51"
        class="form-input-wide jf-required"
        data-layout="full"
        className={styles.fileUploadDiv}
      >
        <div class="jfQuestion-fields" data-wrapper-react="true">
          <div class="jfField isFilled">
            <div class="jfUpload-wrapper">
              <div class="jfUpload-container">
                <div class="jfUpload-button-container">
                  <div
                    class="jfUpload-button"
                    aria-hidden="true"
                    tabindex="0"
                    data-version="v2"
                   
                  >
                   <div  className={styles.browseFile}> Browse Files</div>
                  
                    <div class="jfUpload-heading forDesktop" className={styles.dragFile}>
                      Drag and drop files here
                    </div>
                  </div>
                </div>
              </div>
              <div class="jfUpload-files-container">
                <div>
                  <input
                    type="file"
                    id="input_51"
                    name="q51_attachCompleted[]"
                    multiple=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span class="form-sub-label-container" className={styles.linkCopy}>
        <label class="form-sub-label" for="input_51" id="sublabel_input_51">
          See link below for blank copy
        </label>
      </span>
      <div className={styles.BtnDiv}>
        <button onClick={handleButtonClick} className={styles.BtnOne}>BACK</button>
        <button className={styles.BtnTwo}>Submit Form</button>
      </div>
    </div>
  );
};

export default Next;
