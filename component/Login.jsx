import Layout from "./Layout";
import '../src/App.css'

function Login() {
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
           
            <div className="button-login">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
