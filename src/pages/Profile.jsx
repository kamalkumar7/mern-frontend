import React from 'react'
import { useSelector ,useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.user);
  return (
    <>
    <div style={{width:'100%' ,height:'20px'}}>
        <h1>
        Namaste {currentUser?.firstName +" " + currentUser?.lastName + "🙏"}
        </h1>
        <br />
        <h1>Your GST No is {currentUser.GstNo}</h1>
        <br />
        <button onClick={()=>{navigate('/')}}>Register as New User</button>
    </div>
    </>

  )
}

export default Profile