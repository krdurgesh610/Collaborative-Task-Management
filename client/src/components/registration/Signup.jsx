import "./registration.scss";

const Signup = () => {
  return (
    <div>
      <div className="signup-form">
        <div className="signup-form__wrapper">
          <form className="form">
            <h4>Sign up</h4>
            <div className="form-group">
              <input type="text" placeholder="Enter Name" name="username" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Enter Email" name="email" />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Enter Password" name="password" />
            </div>
            <div className="form-group">
              <button>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
