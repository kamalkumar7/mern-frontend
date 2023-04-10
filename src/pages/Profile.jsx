import React from 'react'
import { useSelector ,useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logout } from "../redux/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.user);
  return (
    <>
    <div style={{width:'100%' }}>
        <h1>
        Namaste {currentUser?.firstName +" " + currentUser?.lastName + "🙏"}
        </h1>
        <br />
        <h1>Your GST No is {currentUser.GstNo}</h1>
        <br />
        <h1>Your Mobile No is {currentUser.mobileNo}</h1>
        <br />
        <h1>Your Address is:  {currentUser.Address}</h1>
        <br />
        <button onClick={()=>{   dispatch(logout())
           navigate('/') }}>Signout</button>
    </div>
    </>

  )
}

export default Profile