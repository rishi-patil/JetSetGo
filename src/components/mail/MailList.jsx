import "./mailList.css"
const MailList = () => {
  return (
    <div className="mail">
      <h4 className="mailTitle">Save Time, Save Money</h4>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInput">
        <input type="text" placeholder="Your E-mail"/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList;