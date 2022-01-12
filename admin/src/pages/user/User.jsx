import { PermIdentity, PhoneAndroid, MailOutline, LocationSearching, CalendarToday, Publish} from "@material-ui/icons"
import "./user.css"
import { Link } from "react-router-dom"

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img 
              src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" 
              alt="" 
              className="userShowImg" 
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Sad Vika Alam</span>
              <span className="userShowUserTitle">Software Engineering</span>
            </div>
          </div>
          <div className="userShowBottom">
            <div className="userShowTitle">Account Detail</div>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon"/>
              <span className="userShowInfoTitle">alamsadvika</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon"/>
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <div className="userShowTitle">Contact Detail</div>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon"/>
              <span className="userShowInfoTitle">+86 130 6797 0603</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon"/>
              <span className="userShowInfoTitle">alamsadvika@hotmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon"/>
              <span className="userShowInfoTitle">Tangerang Selatan, Banten</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label> Username</label>
                <input 
                  type="text"  
                  placeholder="alamsadvika" 
                  className="userUpdateInput" 
                />
              </div>
              <div className="userUpdateItem">
                <label> Full Name</label>
                <input 
                  type="text"  
                  placeholder="Sad Vika Alam" 
                  className="userUpdateInput" 
                />
              </div>
              <div className="userUpdateItem">
                <label> Email</label>
                <input 
                  type="text"  
                  placeholder="alamsadvika@hotmail.com" 
                  className="userUpdateInput" 
                />
              </div>
              <div className="userUpdateItem">
                <label> Phone</label>
                <input 
                  type="text"  
                  placeholder="+86 130 6797 0603" 
                  className="userUpdateInput" 
                />
              </div>
              <div className="userUpdateItem">
                <label> Address</label>
                <input 
                  type="text"  
                  placeholder="Tangerang Selatan, Banten" 
                  className="userUpdateInput" 
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img 
                  className="userUpdateImg"
                  src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" 
                  alt="" 
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon "/>
                </label>
                <input type="file" id="file" style={{display: "none"}}/>
              </div>
              <button className="userUpdateButton">UPDATE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
