const Notification = (props) => {
  //  Write your code here.
  const { className, icon, message } = props;
  return (
    <div className={className}>
      <img className="icon" src={icon} />
      <p className="msg-content">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      className="info-msg-bg"
      icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      message="Information Message"
    />
    <Notification
      className="success-msg-bg"
      icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      message="Success Message"
    />
    <Notification
      className="warn-msg-bg"
      icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      message="Warning Message"
    />
    <Notification
      className="error-msg-bg"
      icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      message="Error Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
