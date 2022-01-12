import { Language, NotificationsNone, Settings } from '@material-ui/icons'
import './topbar.css'

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">alamadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings/>
          </div>
          <img src="https://scontent.fcgk27-1.fna.fbcdn.net/v/t1.6435-9/181964622_193748319232088_6294252897318227780_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFKWwMZDGqKQeHjbse9jTtkGWPLWe-Y0QEZY8tZ75jRAWL850bkHm8snUmlrolXpkMVSSwf9kwnGmKfYnfZTqtU&_nc_ohc=Cci_HenR-HkAX8cZXEr&_nc_ht=scontent.fcgk27-1.fna&oh=00_AT8hzuooXkTgX1izsj6apUU-Han-CVv-_NRYRaQddOVAVg&oe=620279BA" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
