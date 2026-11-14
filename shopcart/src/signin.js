import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { Card } from "react-bootstrap";

function SignIn() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <Card style={{ width: "600px" }} className="mx-auto mt-4 signin">
      <Card.Header>
        <h3 className="m-0">{login ? "Check Out" : "Sign In"}</h3>
      </Card.Header>
      <Card.Body>
        {!login ? (
          <React.Fragment>
            <h5>Please login using one of the following:</h5>
            <LoginForm />
            <FacebookLogin
              appId="1430925715384725"
              autoLoad={false}
              fields="name,email,picture"
              scope="public_profile,email"
              callback={responseFacebook}
              icon="fa-facebook"
            />
          </React.Fragment>
        ) : (
          <CheckOut fbpic={picture} fbdata={data} />
        )}
      </Card.Body>
    </Card>
  );
}

function LoginForm() {
  return (
    <form className="border mt-3 mb-5 p-3 bg-white">
      <label className="m-2">Name:</label>
      <input type="text" name="name" placeholder="Your name" />
      <label className="m-2">Email:</label>
      <input type="email" name="email" placeholder="Your Email" />
      <input
        type="submit"
        value="Login"
        className="btn bg-success text-white my-3"
      />
    </form>
  );
}

function CheckOut({ fbpic, fbdata }) {
  return (
    <React.Fragment>
      <img src={fbpic} alt={fbdata.name} />
      <h5 className="d-inline text-success mx-2">
        Welcome Back {fbdata.name}!
      </h5>
      <p className="my-5">Time to check out?</p>
    </React.Fragment>
  );
}

export default SignIn;
