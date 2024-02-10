import React, { useEffect, useState } from "react";
import "./adminPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AdminPage = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigate();
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/getallemployeedata");
      if (response.status === 200) {
        // console.log(response.data);
        console.log(JSON.stringify(response.data, null, 2));
        setData(response.data);
      } else {
        console.log("Request failed with status: " + response.status);
      }
    } catch (error) {
      console.log("An error occurred: " + error.message);
    }
    //   finally{

    //   }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <p className="userInfo">User Info</p>
      <div className="container22">
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Birth date</th>
              <th>Address line 1</th>
              <th>Address line 2</th>
              <th>City</th>
              <th>State</th>
              <th>Postcode</th>
              <th>Phone number</th>
              <th>Emergency name</th>
              <th>Emergency phone no</th>
              <th>Citizenship</th>
              <th>SSN</th>
              <th>Veteran status</th>
              <th>Disabilities</th>
              <th>Employer name</th>
              <th>Position title</th>
              <th>Reports to</th>
              <th>Employment type</th>
              <th>Usual days of employment</th>
              <th>Start date</th>
              <th>Contract date</th>
              <th>Bank name</th>
              <th>Account name</th>
              <th>Routing number</th>
              <th>Acount number</th>
              <th>Tax options</th>
              <th>Tax declaration form</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index.toString()}>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>
                  {item.birthdate.day}/{item.birthdate.month}/
                  {item.birthdate.year}
                </td>
                <td>{item.address.streetAddressLine1}</td>
                <td>{item.address.streetAddressLine2}</td>
                <td>{item.address.city}</td>
                <td>{item.address.state}</td>
                <td>{item.address.postcode}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.emergencyContact.name}</td>
                <td>{item.emergencyContact.phone}</td>
                <td>{item.citizenship}</td>
                <td>{item.ssn}</td>
                <td>{item.veteranStatus}</td>
                <td>{item.disabilities.join(", ")}</td>
                <td>{item.employerName}</td>
                <td>{item.positionTitle}</td>
                <td>{item.reportsTo}</td>
                <td>{item.employmentType}</td>
                <td>{item.usualDaysOfEmployment.join(", ")}</td>
                <td>
                  {item.startDate.day}/{item.startDate.month}/
                  {item.startDate.year}
                </td>
                <td>
                  {item.contractEndDate.day}/{item.contractEndDate.month}/
                  {item.contractEndDate.year}
                </td>
                <td>{item.bankDetails.institutionName}</td>
                <td>{item.bankDetails.accountOwnerName}</td>
                <td>{item.bankDetails.routingNumber}</td>
                <td>{item.bankDetails.accountNumber}</td>
                <td>{item.taxOptions.join(", ")}</td>
                <td>
                  <a
                    href={`https://employee-record-aiqw.onrender.com/${encodeURIComponent(item.taxDeclarationForm)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Tax Declaration Form
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div onClick={() => navigation("/form")} className="backButton">
          back to form
        </div>
      </div>
    </>
  );
};

export default AdminPage;
