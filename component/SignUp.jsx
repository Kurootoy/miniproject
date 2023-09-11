import Layout from "./Layout";
import '../src/App.css'

function SignUp() {
  return (
    <Layout>
      <div className="login-container">
        <div className="card-login">
          <form>
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input type="text" id="username" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Fullname</label>
              <input type="password" id="password" placeholder="Fullname" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Organization</label>
              <input type="password" id="password" placeholder="Organization" />
            </div>
            <div className="button-login">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default SignUp;
