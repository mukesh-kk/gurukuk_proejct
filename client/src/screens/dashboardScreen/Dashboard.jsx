
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBNavbar, MDBNavbarBrand, MDBRow } from 'mdb-react-ui-kit'
import './Dashboard.css'
import PropTypes from "prop-types";
import empty from "../../assets/empty.svg";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { UserApi } from '../../services/apis';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { useNavigate } from 'react-router-dom';
// import SortIcon from '../../components/SortIcon';
export default function Dashboard(props){
const [isLoading,setIsLoading]=useState(true)
const [users,setUsers]=useState([]);
const navigator = useNavigate();

   useEffect(()=>{
    axios.get(UserApi.GET_USER)
    .then((r)=>{    
        setUsers(r.data.users)
        
    }).catch(()=>{
        toast.error("Could not fetch data");

    }).finally(()=>{
        setIsLoading(false);

    })
   },[isLoading]);
  async  function  handleDelete(id){
    setIsLoading(true);
   try{
    await axios.delete(UserApi.DELETE_USER+id);
    setIsLoading(false);
    toast.success("User deleted successfully");
     
   }catch(err){
    setIsLoading(false);
    toast.error("Could not delete   user");
   }
   }


return (
  <>
    <MDBNavbar light bgColor="light" className="sticky-top">
      <MDBContainer fluid>
        <MDBNavbarBrand className="colorgreen2 space-between  " href="#">
          <p
            style={{ margin: 0 }}
            //   onClick={() => {
            //     navigate("/products");
            //   }}
          >
            Gurukul
          </p>
        </MDBNavbarBrand>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ margin: 0, marginRight: "20px" }}>
            Welcome {props?.user?.name} !
          </p>
        </div>
      </MDBContainer>
    </MDBNavbar>
<div className='d-flex justify-content-between  item-center m-auto mt-3 mb-3' style={{maxWidth:'90%'}} >
    <p>All Users</p>

<MDBBtn
      className="px-3 btngreen   "
      color="#28a745"
      size="md"
      onClick={() => {
        navigator('/signup');
      }}
    >
      {"CREATE USER"}
    </MDBBtn>
</div>

{/* <div className='d-flex justify-content-start  item-center m-auto  mb-3' style={{maxWidth:'90%'}} >
   <div className='d-flex align-items-center'><p className=''>Latest Created</p><div><SortIcon/></div> </div>
   <div className='d-flex align-items-center'><p className=''>Latest Updated</p><div> <SortIcon/></div> </div>
</div> */}

    {(!isLoading) ? (
      <MDBContainer fluid>
        {users?.length > 0 &&users.filter(each=>each._id!==props.user._id).length>0 ? (
          users.map((each) => {
            if(each._id==props.user._id) return <></>;

            return (
            
                <MDBRow key={each._id} className="justify-content-center mb-3">
                  <MDBCol md="10" xl="10">
                    <MDBCard className="shadow-0 border rounded-3   mt-1 mb-1">
                      <MDBCardBody>
                        <MDBRow>
                          <MDBCol>
                            <div>
                              <h5>{each.name}</h5>
                              <p>
                                Email: {each.email} | Location: {each.city} ,{" "}
                                {each.state}
                              </p>
                            </div>

                            <MDBBtn
                              className="px-3 btngreen   "
                              color="#28a745"
                              size="sm"
                              onClick={() => {
                                navigator("/editUser/" + each._id);
                              }}
                            >
                              {" Edit"}
                            </MDBBtn>
                            <MDBBtn
                              className=" px-3 btngreen   ml-4 mx-2"
                              color="#28a745"
                              size="sm"
                              onClick={() => {
                                navigator("/user/" + each._id);
                              }}
                            >
                              {" View Details"}
                            </MDBBtn>

                            <button
                              type="button"
                              
                              onClick={() => handleDelete(each._id)}
                              className="btn btn-danger btn-sm ml-3 mx-2 "
                              data-mdb-ripple-init
                            >
                              Delete
                            </button>
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              
            );
          })
        ) : (
          <>
            <img
              style={{
                width: "60%",
                display: "block",
                margin: "auto",
                marginTop: "8%",
              }}
              src={empty}
            />
            <p
              style={{
                fontSize: "18px",
                color: "#414440",
                textAlign: "center",
              }}
            >
              No Users Found{" "}
            </p>
          </>
        )}
      </MDBContainer>
    ) : (
      <Loader />
    )}
  </>
);
}

Dashboard.propTypes = {
    user: PropTypes.object,
  };
  