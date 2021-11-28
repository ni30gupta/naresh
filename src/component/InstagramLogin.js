import React from "react";

function InstagramLogin() {
  return (
    <div className="login">
      <div
        style={{
          height: "70%",
          textAlign: "center",
          padding: "0 1rem  ",
        }}
      >
        <h1 className="p-4">Instagram</h1>
        <div>
          <input
            type="text"
            className=" form-control mt-2"
            placeholder="Phone numer, username, or email"
          />
          <input
            type="password"
            className="form-control mt-2"
            placeholder="Password"
          />
          <button className="btn btn-success mt-2 w-100">Log In</button>
        </div>
      </div>
      <div className="d-flex mt-3 mb-3 flex-row justify-content-between align-items-center">
        <hr style={{ height: "1px", width: "40%" }} />
        <div className="pl-4 pr-4">OR</div>
        <hr style={{ height: "1px", width: "40%" }} />
      </div>
      <div className=" m-2 d-flex justify-content-center flex-column text-center">
        <div>
          <span className="bi bi-facebook"></span> Log in with Facebook
        </div>
        <div className="mt-3" style={{ fontSize: "0.8rem" }}>
          Forgot Password?
        </div>
      </div>
    </div>
  );
}

export default InstagramLogin;
