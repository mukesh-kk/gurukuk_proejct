
import { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBNavbar,
  MDBNavbarBrand,
  MDBTypography,
  MDBBtn,

} from "mdb-react-ui-kit";
import axios from "axios";
import { UserApi } from "../../services/apis";
// import { toast } from "react-toastify";
// import Loader from "../../components/Loader";
import { useNavigate, useParams } from "react-router-dom";
const UserDetailScreen=()=> {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    gender: "Male", // Default to Male
    leadFrom: "",
    city: "Mumbai", // Default to Mumbai
    state: "",
  });
//  const  [isLoading,setIsLoading]=useState(false);
 const navigate = useNavigate();
 const {userId} =useParams();

 useEffect(()=>{
    axios.get(UserApi.GET_USER_BY_ID+userId).then((res)=>{
        setFormData(res.data.user);
    })

 },[userId])

  const handleChange = () => {
    return ;
    // const { name, value } = e.target;
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
  };

  const handleSubmit =  () => {
 return ;
    //e.preventDefault();
    // setIsLoading(true)
    //  axios({
    //   url: UserApi.UPDATE_USER+userId,
    //   method: "put",
    //   data: formData,
    // })
    //   .then(() => {

    //     toast.success("Successfully Updated User");
    //     navigate("/dashboard");
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //     toast.error(e.response.data.error);
    //   }).finally(()=>{
    //     setTimeout(()=>{
    //       setIsLoading(false);
    //     },500)
    //   });
    
  };

  return (
    <>
     <MDBNavbar light bgColor="light" className="sticky-top">
        <MDBContainer fluid>
          <MDBNavbarBrand className="colorgreen2 space-between  " href="#">
            <p
              style={{ margin: 0 }}
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Gurukul
            </p>
          </MDBNavbarBrand>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ margin: 0, marginRight: "20px" }}>
              {/* Welcome {props?.user?.name} ! */}
            </p>
            
          </div>
        </MDBContainer>
      </MDBNavbar>
      <MDBTypography blockquote className="mb-0 ms-5 mt-5">

      </MDBTypography>
      <MDBContainer className="mt-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <form onSubmit={handleSubmit} autoComplete={false}>
            <div className="mb-3">
              <MDBInput
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                pattern="[A-Za-z\s]+"
                required
              />
            </div>
            <div className="mb-3">
              {" "}
              <MDBInput
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}"
                required
              />
            </div>

            <div className="mb-3">
              <MDBInput
                label="Phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]+"
                required
              />
            </div>
            <div className="mb-3">
              <MDBInput
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <div className="d-flex justify-content-start">
                <label className="">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                    checked={formData.gender === "Male"}
                    style={{marginLeft:"10px",marginRight:"10px"}}
                  />
                  Male
                </label>
                <label className="ml-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                    checked={formData.gender === "Female"}
                    style={{marginLeft:"10px",marginRight:"10px"}}
                  />
                  Female
                </label>
                <label className=" d-block ml-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    onChange={handleChange}
                    checked={formData.gender === "Other"}
                    style={{marginLeft:"10px",marginRight:"10px"}}
                  />
                  Other
                </label>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">How did you hear about this?</label>
              <div>
                <MDBCheckbox
                  label="LinkedIn"
                  value="LinkedIn"
                  name="leadFrom"
                  onChange={handleChange}
                  checked={formData.leadFrom === "LinkedIn"}
                />
                <MDBCheckbox
                  label="Friends"
                  value="Friends"
                  name="leadFrom"
                  onChange={handleChange}
                  checked={formData.leadFrom === "Friends"}
                />
                <MDBCheckbox
                  label="Job Portal"
                  value="Job Portal"
                  name="leadFrom"
                  onChange={handleChange}
                  checked={formData.leadFrom === "Job Portal"}
                />
                <MDBCheckbox
                  label="Others"
                  name="leadFrom"
                  value="Others"
                  onChange={handleChange}
                  checked={formData.leadFrom === "Others"}
                />
              </div>
            </div>
            <div className="mb-3">
              <select
                className="form-select"
                aria-label="Default select example"
                name="state"
                onChange={handleChange}
                required={true}
              >
                <option selected>Select State</option>
                <option value="Gujrat"  selected ={formData.state=="Gujrat"}>Gujrat</option>
                <option value="Maharashtra" selected ={formData.state=="Maharashtra"}>Maharashtra</option>
                <option value="Karnataka" selected ={formData.state=="Karnataka"}>Karnataka</option>
              </select>
            </div>
            <div className="mb-3">
              <select
                className="form-select"
                aria-label="Default select example"
                name="city"
                onChange={handleChange}
                required={true}
              >
                <option selected>Select City</option>
                <option value="Mumbai" selected ={formData.city=="Mumbai"}>Mumbai</option>
                <option value="Pune"  selected ={formData.city=="Pune"}>Pune</option>
                <option value="Ahmedabad"  selected ={formData.city=="Ahmedabad"}>Ahmedabad</option>
                <option value="Banglore"  selected ={formData.city=="Banglore"}>Banglore</option>
              </select>
            </div>
            <MDBBtn
            
            className="mb-4 px-5 btngreen "
            color="#28a745"
            size="lg"
            onClick={()=>{
              
              navigate('/dashboard')
            }}
          >GO BACK</MDBBtn>
          </form>
        </MDBCol>
       
      </MDBRow>
    </MDBContainer>
    {/* {isLoading&&<Loader />} */}
    </>
    
  );
};

export default UserDetailScreen;
