import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

import styles from "../Form/Form.module.css";
import styles2 from "../../Screen/Next/Next.module.css";
import axios from "axios";
// import Modal from "../modal/Modal";
import DataSubmitSuccess from "../DataSubmitSuccess/DataSubmitSuccess";
import myGlobalContext from "../../Context";
import { useContext } from "react";
import DataSubmitFailed from "../DataSubmitFailed/DataSubmitFailed";

const Form = () => {
  const { showPopUp, setShowPopUp, setShowPopUp2, showPopUp2 } =
    useContext(myGlobalContext);

  const [page, setpage] = useState("1");
  const [loading, setloading] = useState(false);

  // const navigate = useNavigate();
  const handleNext = (e) => {
    e.preventDefault();
    setpage("2");
  };
  const handleBack = (e) => {
    e.preventDefault();
    setpage("1");
  };

  const [userInfo, setUserInfo] = useState({
    firstname: "",

    lastname: "",

    email: "",

    birthdate: {
      month: "",

      day: "",

      year: "",
    },

    address: {
      streetAddressLine1: "",

      streetAddressLine2: "",

      city: "",

      state: "",

      postcode: "",
    },

    phoneNumber: "",

    emergencyContact: {
      name: "",

      phone: "",
    },

    citizenship: "",

    ssn: "",

    veteranStatus: "",

    disabilities: [],

    employerName: "",

    positionTitle: "",

    reportsTo: "",

    employmentType: "",

    usualDaysOfEmployment: [],

    startDate: {
      month: "",

      day: "",

      year: "",
    },

    contractEndDate: {
      month: "",

      day: "",

      year: "",
    },

    bankDetails: {
      institutionName: "",

      accountOwnerName: "",

      routingNumber: "",

      accountNumber: "",
    },

    tax: {
      options: [],
      taxDeclarationForm: "",
    },
  });

  const {
    // firstname,

    // lastname,

    // email,

    birthdate,

    address,

    // phoneNumber,

    emergencyContact,

    // citizenship,

    // ssn,

    // veteranStatus,

    // disabilities,

    // employerName,

    // positionTitle,

    // reportsTo,

    // employmentType,

    usualDaysOfEmployment,

    startDate,

    contractEndDate,

    bankDetails,

    // tax,
  } = userInfo;

  // FIRST NAME
  const handle_firstname = (e) => {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  // LAST NAME
  const handle_lastname = (e) => {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  // EMAIL
  const handle_email = (e) => {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  // BIRTHDATE MONTH
  const handle_b_month = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: {
        ...birthdate,
        month: value,
      },
    });
  };

  // BIRTHDATE DAY
  const handle_b_day = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: {
        ...birthdate,
        day: value,
      },
    });
  };

  // BIRTHDATE YEAR
  const handle_b_year = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: {
        ...birthdate,
        year: value,
      },
    });
  };

  // CONTRACT END DATE MONTH
  const handle_contract_end_month = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: {
        ...contractEndDate,
        month: value,
      },
    });
  };

  // CONTRACT END DATE DAY
  const handle_contract_end_day = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: {
        ...contractEndDate,
        day: value,
      },
    });
  };

  // CONTRACT END DATE YEAR
  const handle_contract_end_year = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: {
        ...contractEndDate,
        year: value,
      },
    });
  };

  // START DATE MONTH
  const handle_s_month = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: {
        ...startDate,
        month: value,
      },
    });
  };

  // START DATE DAY
  const handle_s_day = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: {
        ...startDate,
        day: value,
      },
    });
  };

  // START DATE YEAR
  const handle_s_year = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: {
        ...startDate,
        year: value,
      },
    });
  };

  // ADDRESS LINE 1
  const handle_usercontact_addline1 = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: {
        ...address,
        streetAddressLine1: value,
      },
    });
  };

  // ADDRESS LINE 2
  const handle_usercontact_addline2 = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: {
        ...address,
        streetAddressLine2: value,
      },
    });
  };

  // ADDRESS CITY
  const handle_usercontact_city = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: {
        ...address,
        city: value,
      },
    });
  };

  // ADDRESS STATE
  const handle_usercontact_state = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: {
        ...address,
        state: value,
      },
    });
  };

  // ADDRESS POST CODE
  const handle_usercontact_code = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: {
        ...address,
        postcode: value,
      },
    });
  };

  // Institution Name
  const handle_bankname = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: {
        ...bankDetails,
        institutionName: value,
      },
    });
  };

  // Account Owner Name
  const handle_account_name = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: {
        ...bankDetails,
        accountOwnerName: value,
      },
    });
  };

  // Routing Number
  const handle_routing_number = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: {
        ...bankDetails,
        routingNumber: value,
      },
    });
  };

  // Account Number
  const handle_account_number = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: {
        ...bankDetails,
        accountNumber: value,
      },
    });
  };

  // Emergency Name
  const handle_emergency_name = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: {
        ...emergencyContact,
        name: value,
      },
    });
  };

  // Emergency phone number
  const handle_emergency_phoneno = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: {
        ...emergencyContact,
        phone: value,
      },
    });
  };

  // Emergency phone number
  const handle_citizenship = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // Phone Number
  const handle_phonenumber = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // SSN
  const handle_ssn = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // Veteran Status
  const handle_veteran_status = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // Disabilities
  const handle_disability = (e) => {
    const { name, value } = e.target;
    if (value.includes(",")) {
      const itemsArray = value.split(",");
      setUserInfo({ ...userInfo, [name]: itemsArray });
    } else {
      setUserInfo({ ...userInfo, [name]: [value] });
    }
  };

  // Employer or Contractor Name
  const handle_contractor_name = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  //Position Title
  const handle_position_title = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  //Reports To

  const handle_report_to = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // Employment Type
  const handle_employment_type = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  //Usual Days of Employment
  const handle_days_of_employement = (e) => {
    const { name, value } = e.target;

    const itemPos = usualDaysOfEmployment.indexOf(value);
    if (itemPos !== -1) {
      const newArrayValue = usualDaysOfEmployment.filter(
        (item) => item !== value
      );

      setUserInfo({ ...userInfo, [name]: newArrayValue });
    } else {
      setUserInfo({ ...userInfo, [name]: [...usualDaysOfEmployment, value] });
    }
  };

  //Tax

  const handle_tax = (e) => {
    const { value } = e.target;

    const itemPos = userInfo.tax.options.indexOf(value);

    if (itemPos !== -1) {
      const updatedOptions = userInfo.tax.options.filter(
        (item) => item !== value
      );

      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        tax: {
          ...prevUserInfo.tax,
          options: updatedOptions,
        },
      }));
    } else {
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        tax: {
          ...prevUserInfo.tax,
          options: [...prevUserInfo.tax.options, value],
        },
      }));
    }
  };

  // Function to handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      tax: {
        ...prevUserInfo.tax,
        taxDeclarationForm: file,
      },
    }));
  };

  // SUBMIT BUTTON

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const formData = new FormData();
      // Append fields from userInfo object
      formData.append("firstname", userInfo.firstname);
      formData.append("lastname", userInfo.lastname);
      formData.append("email", userInfo.email);
      formData.append("phoneNumber", userInfo.phoneNumber);
      formData.append("citizenship", userInfo.citizenship);
      formData.append("ssn", userInfo.ssn);
      formData.append("veteranStatus", userInfo.veteranStatus);
      formData.append("employerName", userInfo.employerName);
      formData.append("positionTitle", userInfo.positionTitle);
      formData.append("reportsTo", userInfo.reportsTo);
      formData.append("employmentType", userInfo.employmentType);
      formData.append("taxOptions", JSON.stringify(userInfo.tax.options));
      formData.append("taxDeclarationForm", userInfo.tax.taxDeclarationForm);

      // Append nested objects as JSON strings
      formData.append("birthdate", JSON.stringify(userInfo.birthdate));
      formData.append("address", JSON.stringify(userInfo.address));
      formData.append(
        "emergencyContact",
        JSON.stringify(userInfo.emergencyContact)
      );
      formData.append("startDate", JSON.stringify(userInfo.startDate));
      formData.append(
        "contractEndDate",
        JSON.stringify(userInfo.contractEndDate)
      );
      formData.append("bankDetails", JSON.stringify(userInfo.bankDetails));

      // Append array fields as JSON strings
      formData.append("disabilities", JSON.stringify(userInfo.disabilities));
      formData.append(
        "usualDaysOfEmployment",
        JSON.stringify(userInfo.usualDaysOfEmployment)
      );

      const response = await axios.post(
        "/api/submitemployeedata",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        setShowPopUp(true);
        setUserInfo({
          firstname: "",

          lastname: "",

          email: "",

          birthdate: {
            month: "",

            day: "",

            year: "",
          },

          address: {
            streetAddressLine1: "",

            streetAddressLine2: "",

            city: "",

            state: "",

            postcode: "",
          },

          phoneNumber: "",

          emergencyContact: {
            name: "",

            phone: "",
          },

          citizenship: "",

          ssn: "",

          veteranStatus: "",

          disabilities: [],

          employerName: "",

          positionTitle: "",

          reportsTo: "",

          employmentType: "",

          usualDaysOfEmployment: [],

          startDate: {
            month: "",

            day: "",

            year: "",
          },

          contractEndDate: {
            month: "",

            day: "",

            year: "",
          },

          bankDetails: {
            institutionName: "",

            accountOwnerName: "",

            routingNumber: "",

            accountNumber: "",
          },

          tax: {
            options: [],
            taxDeclarationForm: "",
          },
        });
        // setError(null);
        setloading(false);
      } else {
        setShowPopUp2(true);
        console.log("Request failed with status: " + response.status);
        setloading(false);
      }
    } catch (error) {
      setShowPopUp2(true);
      console.log("An error occurred: " + error.message);
      setloading(false);
    } finally {
      setloading(false);
    }

    // axios.get('https://employee-record-aiqw.onrender.com/api/getallemployeedata')
    // .then(function (response) {
    //   // handle success
    //   // console.log(response," response way");
    //   console.log(JSON.stringify(response, null, 2));
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
    // .finally(function () {
    //   // always executed
    // });
  };

  //
  return (
    // the general container
    <div>
      {showPopUp === true ? <DataSubmitSuccess /> : <></>}

      {showPopUp2 === true ? <DataSubmitFailed /> : <></>}

      <form action="">
        {page === "1" ? (
          <>
            <div className={styles.Formcontainer}>
              {/* the headings of the form */}

              <h1>New Employee Details</h1>
              <p>Please fill out your information below.</p>

              <h2>Personal Information</h2>

              <div className={styles.nameInfo}>
                <div>
                  <h3>Name</h3>
                </div>
                <div>
                  <h3>Birth Date</h3>
                </div>
              </div>

              {/* the main form */}

              {/* the names div */}

              <div className={styles.nameDiv}>
                <div className={styles.FirstNameDiv}>
                  <input
                    type="text"
                    value={userInfo.firstname}
                    name="firstname"
                    onChange={handle_firstname}
                  />
                  <h5>First Name</h5>
                </div>

                <div className={styles.LastNameDiv}>
                  <input
                    type="text"
                    value={userInfo.lastname}
                    name="lastname"
                    onChange={handle_lastname}
                  />
                  <h5>last Name</h5>
                </div>

                <div data-wrapper-react="true" className={styles.selectDiv}>
                  <span>
                    <select
                      value={userInfo.birthdate["month"]}
                      name="birthdate"
                      onChange={handle_b_month}
                    >
                      <option value="">Please select a month</option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                    <h5>Month</h5>
                  </span>
                  <span>
                    <select
                      value={userInfo.birthdate["day"]}
                      name="birthdate"
                      onChange={handle_b_day}
                    >
                      <option value="">Please select a day</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                    <h5>Day</h5>
                  </span>
                  <span>
                    <select
                      value={userInfo.birthdate["year"]}
                      name="birthdate"
                      onChange={handle_b_year}
                    >
                      <option value="">Please select a year</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
                      <option value="1999">1999</option>
                      <option value="1998">1998</option>
                      <option value="1997">1997</option>
                      <option value="1996">1996</option>
                      <option value="1995">1995</option>
                      <option value="1994">1994</option>
                      <option value="1993">1993</option>
                      <option value="1992">1992</option>
                      <option value="1991">1991</option>
                      <option value="1990">1990</option>
                      <option value="1989">1989</option>
                      <option value="1988">1988</option>
                      <option value="1987">1987</option>
                      <option value="1986">1986</option>
                      <option value="1985">1985</option>
                      <option value="1984">1984</option>
                      <option value="1983">1983</option>
                      <option value="1982">1982</option>
                      <option value="1981">1981</option>
                      <option value="1980">1980</option>
                      <option value="1979">1979</option>
                      <option value="1978">1978</option>
                      <option value="1977">1977</option>
                      <option value="1976">1976</option>
                      <option value="1975">1975</option>
                      <option value="1974">1974</option>
                      <option value="1973">1973</option>
                      <option value="1972">1972</option>
                      <option value="1971">1971</option>
                      <option value="1970">1970</option>
                      <option value="1969">1969</option>
                      <option value="1968">1968</option>
                      <option value="1967">1967</option>
                      <option value="1966">1966</option>
                      <option value="1965">1965</option>
                      <option value="1964">1964</option>
                      <option value="1963">1963</option>
                      <option value="1962">1962</option>
                      <option value="1961">1961</option>
                      <option value="1960">1960</option>
                      <option value="1959">1959</option>
                      <option value="1958">1958</option>
                      <option value="1957">1957</option>
                      <option value="1956">1956</option>
                      <option value="1955">1955</option>
                      <option value="1954">1954</option>
                      <option value="1953">1953</option>
                      <option value="1952">1952</option>
                      <option value="1951">1951</option>
                      <option value="1950">1950</option>
                      <option value="1949">1949</option>
                      <option value="1948">1948</option>
                      <option value="1947">1947</option>
                      <option value="1946">1946</option>
                      <option value="1945">1945</option>
                      <option value="1944">1944</option>
                      <option value="1943">1943</option>
                      <option value="1942">1942</option>
                      <option value="1941">1941</option>
                      <option value="1940">1940</option>
                      <option value="1939">1939</option>
                      <option value="1938">1938</option>
                      <option value="1937">1937</option>
                      <option value="1936">1936</option>
                      <option value="1935">1935</option>
                      <option value="1934">1934</option>
                      <option value="1933">1933</option>
                      <option value="1932">1932</option>
                      <option value="1931">1931</option>
                      <option value="1930">1930</option>
                      <option value="1929">1929</option>
                      <option value="1928">1928</option>
                      <option value="1927">1927</option>
                      <option value="1926">1926</option>
                      <option value="1925">1925</option>
                      <option value="1924">1924</option>
                      <option value="1923">1923</option>
                      <option value="1922">1922</option>
                      <option value="1921">1921</option>
                      <option value="1920">1920</option>
                    </select>
                    <h5>Day</h5>
                  </span>
                </div>
              </div>

              {/* address section */}

              <div className={styles.addressDiv}>
                <h4>Address</h4>
                <div>
                  <input
                    type="text"
                    value={userInfo.address["streetAddressLine1"]}
                    name="address"
                    onChange={handle_usercontact_addline1}
                  />
                  <h5>street address</h5>
                </div>

                <div>
                  <input
                    type="text"
                    value={userInfo.address["streetAddressLine2"]}
                    name="address"
                    onChange={handle_usercontact_addline2}
                  />
                  <h5>street address line 2</h5>
                </div>

                <div className={styles.citiesDiv}>
                  <div>
                    <input
                      type="text"
                      value={userInfo.address["city"]}
                      name="address"
                      onChange={handle_usercontact_city}
                    />
                    <h5>city</h5>
                  </div>

                  <div>
                    <input
                      type="text"
                      value={userInfo.address["state"]}
                      name="address"
                      onChange={handle_usercontact_state}
                    />
                    <h5>state</h5>
                  </div>
                </div>

                <div className={styles.PostCodeDiv}>
                  <input
                    type="text"
                    value={userInfo.address["postcode"]}
                    name="address"
                    onChange={handle_usercontact_code}
                  />
                  <h5>post code</h5>
                </div>
              </div>

              {/* phone details section */}

              <div className={styles.PhoneDetails}>
                <div>
                  <h4>Phone Number</h4>
                  <input
                    type="text"
                    value={userInfo.phoneNumber}
                    name="phoneNumber"
                    onChange={handle_phonenumber}
                    placeholder="(000)-000 -0000"
                  />
                </div>

                <div>
                  <h4>E-mail</h4>
                  <input
                    type="text"
                    value={userInfo.email}
                    name="email"
                    onChange={handle_email}
                    placeholder="eg:myname@gmail.com"
                  />
                </div>

                <div>
                  <h4>Emergency Name</h4>
                  <input
                    type="text"
                    value={userInfo.emergencyContact["name"]}
                    name="emergencyContact"
                    onChange={handle_emergency_name}
                  />
                </div>

                <div>
                  <h4>Citizenship</h4>
                  <input
                    type="text"
                    value={userInfo.citizenship}
                    name="citizenship"
                    onChange={handle_citizenship}
                  />
                </div>

                <div>
                  <h4>Emergency Contact Phone Number</h4>
                  <input
                    type="text"
                    value={userInfo.emergencyContact["phone"]}
                    name="emergencyContact"
                    onChange={handle_emergency_phoneno}
                    placeholder="(000)-000-0000"
                  />
                </div>

                <div>
                  <h4>SSN</h4>
                  <input
                    type="text"
                    value={userInfo.ssn}
                    name="ssn"
                    onChange={handle_ssn}
                  />
                </div>

                <div>
                  <h5>Veteran Status</h5>
                  <input
                    type="text"
                    value={userInfo.veteranStatus}
                    name="veteranStatus"
                    onChange={handle_veteran_status}
                  />
                </div>

                <div>
                  <h5>Disabilities</h5>
                  <input
                    type="text"
                    value={userInfo.disabilities}
                    name="disabilities"
                    onChange={handle_disability}
                    placeholder="Seperate items with comma's"
                  />
                </div>
              </div>
              {/* postion div details */}
              <div>
                <h3>Position Information</h3>
              </div>
              <div className={styles.positionDiv}>
                <div>
                  <h4>Employer or Contractor Name</h4>
                  <input
                    type="text"
                    value={userInfo.employerName}
                    name="employerName"
                    onChange={handle_contractor_name}
                  />
                </div>
                <div>
                  <h4>Position Title</h4>
                  <input
                    type="text"
                    value={userInfo.positionTitle}
                    name="positionTitle"
                    onChange={handle_position_title}
                  />
                </div>
                <div>
                  <h4>Reports To</h4>
                  <input
                    type="text"
                    value={userInfo.reportsTo}
                    name="reportsTo"
                    onChange={handle_report_to}
                  />
                </div>
                <div>
                  <h4>Employment Type</h4>
                  <div>
                    {" "}
                    <select
                      value={userInfo.employmentType}
                      name="employmentType"
                      onChange={handle_employment_type}
                    >
                      <option value="">Please Select</option>
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                      <option value="Internship">Internship</option>
                    </select>{" "}
                  </div>
                </div>
              </div>

              <div>
                <h3>Usual Days of Employment</h3>
              </div>

              <div className={styles.EmploymentDiv}>
                <div>
                  <input
                    type="checkbox"
                    value="monday"
                    name="usualDaysOfEmployment"
                    onChange={handle_days_of_employement}
                  />
                  <span>monday</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="tuesday"
                    onChange={handle_days_of_employement}
                    name="usualDaysOfEmployment"
                  />
                  <span>tuesday</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="wednesday"
                    onChange={handle_days_of_employement}
                    name="usualDaysOfEmployment"
                  />
                  <span>wednesday</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="thursday"
                    onChange={handle_days_of_employement}
                    name="usualDaysOfEmployment"
                  />
                  <span>thursday</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="friday"
                    onChange={handle_days_of_employement}
                    name="usualDaysOfEmployment"
                  />
                  <span>friday</span>
                </div>
              </div>

              {/* date details div */}
              <div>
                <h4>Start Date</h4>
              </div>

              <div className={styles.dateDiv}>
                <div data-wrapper-react="true" className={styles.DateselectDiv}>
                  <span>
                    <select
                      value={userInfo.startDate["month"]}
                      name="startDate"
                      onChange={handle_s_month}
                    >
                      <option value="">Please select a month</option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                    <h5>Month</h5>
                  </span>
                  <span>
                    <select
                      value={userInfo.startDate["day"]}
                      name="startDate"
                      onChange={handle_s_day}
                    >
                      <option value="">Please select a day</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                    <h5>Day</h5>
                  </span>
                  <span>
                    <select
                      value={userInfo.startDate["year"]}
                      name="startDate"
                      onChange={handle_s_year}
                    >
                      <option value="">Please select a year</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
                      <option value="1999">1999</option>
                      <option value="1998">1998</option>
                      <option value="1997">1997</option>
                      <option value="1996">1996</option>
                      <option value="1995">1995</option>
                      <option value="1994">1994</option>
                      <option value="1993">1993</option>
                      <option value="1992">1992</option>
                      <option value="1991">1991</option>
                      <option value="1990">1990</option>
                      <option value="1989">1989</option>
                      <option value="1988">1988</option>
                      <option value="1987">1987</option>
                      <option value="1986">1986</option>
                      <option value="1985">1985</option>
                      <option value="1984">1984</option>
                      <option value="1983">1983</option>
                      <option value="1982">1982</option>
                      <option value="1981">1981</option>
                      <option value="1980">1980</option>
                      <option value="1979">1979</option>
                      <option value="1978">1978</option>
                      <option value="1977">1977</option>
                      <option value="1976">1976</option>
                      <option value="1975">1975</option>
                      <option value="1974">1974</option>
                      <option value="1973">1973</option>
                      <option value="1972">1972</option>
                      <option value="1971">1971</option>
                      <option value="1970">1970</option>
                      <option value="1969">1969</option>
                      <option value="1968">1968</option>
                      <option value="1967">1967</option>
                      <option value="1966">1966</option>
                      <option value="1965">1965</option>
                      <option value="1964">1964</option>
                      <option value="1963">1963</option>
                      <option value="1962">1962</option>
                      <option value="1961">1961</option>
                      <option value="1960">1960</option>
                      <option value="1959">1959</option>
                      <option value="1958">1958</option>
                      <option value="1957">1957</option>
                      <option value="1956">1956</option>
                      <option value="1955">1955</option>
                      <option value="1954">1954</option>
                      <option value="1953">1953</option>
                      <option value="1952">1952</option>
                      <option value="1951">1951</option>
                      <option value="1950">1950</option>
                      <option value="1949">1949</option>
                      <option value="1948">1948</option>
                      <option value="1947">1947</option>
                      <option value="1946">1946</option>
                      <option value="1945">1945</option>
                      <option value="1944">1944</option>
                      <option value="1943">1943</option>
                      <option value="1942">1942</option>
                      <option value="1941">1941</option>
                      <option value="1940">1940</option>
                      <option value="1939">1939</option>
                      <option value="1938">1938</option>
                      <option value="1937">1937</option>
                      <option value="1936">1936</option>
                      <option value="1935">1935</option>
                      <option value="1934">1934</option>
                      <option value="1933">1933</option>
                      <option value="1932">1932</option>
                      <option value="1931">1931</option>
                      <option value="1930">1930</option>
                      <option value="1929">1929</option>
                      <option value="1928">1928</option>
                      <option value="1927">1927</option>
                      <option value="1926">1926</option>
                      <option value="1925">1925</option>
                      <option value="1924">1924</option>
                      <option value="1923">1923</option>
                      <option value="1922">1922</option>
                      <option value="1921">1921</option>
                      <option value="1920">1920</option>
                    </select>
                    <h5>Day</h5>
                  </span>
                </div>
              </div>

              <div>
                <h3>Contract End Date (if applicable)</h3>
              </div>
              <div className={styles.dateDiv}>
                <div data-wrapper-react="true" className={styles.DateselectDiv}>
                  <span>
                    <select
                      value={userInfo.contractEndDate["month"]}
                      name="contractEndDate"
                      onChange={handle_contract_end_month}
                    >
                      <option value="">Please select a month</option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                    <h5>Month</h5>
                  </span>
                  <span>
                    <select
                      value={userInfo.contractEndDate["day"]}
                      name="contractEndDate"
                      onChange={handle_contract_end_day}
                    >
                      <option value="">Please select a day</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                    <h5>Day</h5>
                  </span>
                  <span>
                    <select
                      value={userInfo.contractEndDate["year"]}
                      name="contractEndDate"
                      onChange={handle_contract_end_year}
                    >
                      <option value="">Please select a year</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
                      <option value="1999">1999</option>
                      <option value="1998">1998</option>
                      <option value="1997">1997</option>
                      <option value="1996">1996</option>
                      <option value="1995">1995</option>
                      <option value="1994">1994</option>
                      <option value="1993">1993</option>
                      <option value="1992">1992</option>
                      <option value="1991">1991</option>
                      <option value="1990">1990</option>
                      <option value="1989">1989</option>
                      <option value="1988">1988</option>
                      <option value="1987">1987</option>
                      <option value="1986">1986</option>
                      <option value="1985">1985</option>
                      <option value="1984">1984</option>
                      <option value="1983">1983</option>
                      <option value="1982">1982</option>
                      <option value="1981">1981</option>
                      <option value="1980">1980</option>
                      <option value="1979">1979</option>
                      <option value="1978">1978</option>
                      <option value="1977">1977</option>
                      <option value="1976">1976</option>
                      <option value="1975">1975</option>
                      <option value="1974">1974</option>
                      <option value="1973">1973</option>
                      <option value="1972">1972</option>
                      <option value="1971">1971</option>
                      <option value="1970">1970</option>
                      <option value="1969">1969</option>
                      <option value="1968">1968</option>
                      <option value="1967">1967</option>
                      <option value="1966">1966</option>
                      <option value="1965">1965</option>
                      <option value="1964">1964</option>
                      <option value="1963">1963</option>
                      <option value="1962">1962</option>
                      <option value="1961">1961</option>
                      <option value="1960">1960</option>
                      <option value="1959">1959</option>
                      <option value="1958">1958</option>
                      <option value="1957">1957</option>
                      <option value="1956">1956</option>
                      <option value="1955">1955</option>
                      <option value="1954">1954</option>
                      <option value="1953">1953</option>
                      <option value="1952">1952</option>
                      <option value="1951">1951</option>
                      <option value="1950">1950</option>
                      <option value="1949">1949</option>
                      <option value="1948">1948</option>
                      <option value="1947">1947</option>
                      <option value="1946">1946</option>
                      <option value="1945">1945</option>
                      <option value="1944">1944</option>
                      <option value="1943">1943</option>
                      <option value="1942">1942</option>
                      <option value="1941">1941</option>
                      <option value="1940">1940</option>
                      <option value="1939">1939</option>
                      <option value="1938">1938</option>
                      <option value="1937">1937</option>
                      <option value="1936">1936</option>
                      <option value="1935">1935</option>
                      <option value="1934">1934</option>
                      <option value="1933">1933</option>
                      <option value="1932">1932</option>
                      <option value="1931">1931</option>
                      <option value="1930">1930</option>
                      <option value="1929">1929</option>
                      <option value="1928">1928</option>
                      <option value="1927">1927</option>
                      <option value="1926">1926</option>
                      <option value="1925">1925</option>
                      <option value="1924">1924</option>
                      <option value="1923">1923</option>
                      <option value="1922">1922</option>
                      <option value="1921">1921</option>
                      <option value="1920">1920</option>
                    </select>
                    <h5>Day</h5>
                  </span>
                </div>
              </div>

              <div className={styles.NextButton}>
                <button onClick={handleNext}>next</button>
              </div>
            </div>
          </>
        ) : (
          <div className={styles2.container}>
            <div>
              <h1>Bank Details</h1>
            </div>
            {/* bank details */}
            <div className={styles2.bankDiv}>
              <div>
                <h5>Institution Name</h5>
                <input
                  type="text"
                  value={userInfo.bankDetails["institutionName"]}
                  name="bankDetails"
                  onChange={handle_bankname}
                />
              </div>

              <div>
                <h5>Account Owner Name</h5>
                <input
                  type="text"
                  value={userInfo.bankDetails["accountOwnerName"]}
                  name="bankDetails"
                  onChange={handle_account_name}
                />
              </div>
            </div>
            <div className={styles2.RoutingNo}>
              <h5>Routing Number</h5>
              <input
                type="text"
                value={userInfo.bankDetails["routingNumber"]}
                name="bankDetails"
                onChange={handle_routing_number}
              />
            </div>

            <div className={styles2.AccountNo}>
              <h5>Account Number</h5>
              <input
                type="text"
                value={userInfo.bankDetails["accountNumber"]}
                name="bankDetails"
                onChange={handle_account_number}
              />
            </div>

            <div>
              <h1>Tax</h1>
            </div>
            <div className={styles2.taxdetails}>
              <h5>Have you submitted the following?</h5>
            </div>

            <div className={styles2.documentdDiv}>
              <div>
                <input
                  type="checkbox"
                  value="EIN/SNN"
                  onChange={handle_tax}
                  name="tax"
                  className={styles2.smallLabel}
                />
                <span>EIN/SNN</span>
              </div>

              <div>
                <input
                  type="checkbox"
                  value="Form I-9"
                  onChange={handle_tax}
                  name="tax"
                  className={styles2.smallLabel}
                />
                <span>Form I-9</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="Form W-4"
                  onChange={handle_tax}
                  name="tax"
                  className={styles2.smallLabel}
                />
                <span>Form W-4</span>
              </div>

              <div>
                <input
                  type="checkbox"
                  value="state withholding certificate"
                  onChange={handle_tax}
                  name="tax"
                  className={styles2.smallLabel}
                />
                <span>state withholding certificate</span>
              </div>
            </div>

            <div className={styles2.uploadInfo}>
              <h2>
                Attach completed Tax Declaration Form: <span>*</span>
              </h2>
            </div>

            <div
              id="cid_51"
              class="form-input-wide jf-required"
              data-layout="full"
              className={styles2.fileUploadDiv}
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
                          <div className={styles2.browseFile}>
                            {" "}
                            Browse Files
                          </div>

                          {/* <div class="jfUpload-heading forDesktop" className={styles2.dragFile}>
                Drag and drop files here
              </div> */}
                        </div>
                      </div>
                    </div>
                    <div class="jfUpload-files-container">
                      <div>
                        <input
                          type="file"
                          name="taxDeclarationForm"
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span class="form-sub-label-container" className={styles2.linkCopy}>
              <label
                class="form-sub-label"
                for="input_51"
                id="sublabel_input_51"
              >
                See link below for blank copy
              </label>
            </span>
            <div className={styles2.BtnDiv}>
              <button onClick={handleBack} className={styles2.BtnOne}>
                BACK
              </button>
              <input
                className={styles2.BtnTwo}
                onClick={handleSubmit}
                type="button"
                disabled={loading === false ? false : true}
                value={loading === true ? "Processing ..." : "Submit Form"}
              />
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
