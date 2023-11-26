import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useReadProductQuery } from '../services/productServices';

const ShowAllProductsUsingRtk = () => {
    let {isError, data, error, isLoading, isSuccess} = useReadProductQuery()
  let navigate = useNavigate();
 
 

//   let deleteAdmin = async (id) => {
//     try {
//       let obj = {
//         url: `${baseUrl}/admin/${id}`,
//         method: "delete",
//       };
//       await axios(obj);
//       readAllData();
//     } catch (error) {
//       console.log(error)
//     }
    
//     // console.log("deleted");
//   };


  return (
    <div>
      {data.map((item, i) => {
        return (
          <div
            style={{ border: "solid blue 3px", marginBottom: "10px" }}
            key={i}
          >
            <p>First Name : {item.firstName}</p>
            <p>Last Name : {item.lastName}</p>
            <p>Middle Name : {item.middleName}</p>
            <p>Email : {item.email}</p>
            <p>Role : {item.role}</p>
            <p>Date Of Birth : {new Date(item.dob).toLocaleDateString()    }</p>
            <p>Phone Number : {item.phoneNumber}</p>
            <p>Gender : {item.gender}</p>
            {/* <button
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                deleteAdmin();
              }}
            >
              Delete
            </button> */}
          </div>
        )
      })}

    </div>
  )
}
export default ShowAllProductsUsingRtk