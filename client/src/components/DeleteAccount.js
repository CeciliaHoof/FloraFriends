import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

function DeleteAccount({ user, setUser }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  function handleAuth(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: user.username,
        password: password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(() => {
          setAuthenticated(true);
        });
      } else if (r.status === 401) {
        r.json().then(() => setErrors({ error: "Invalid password" }));
      }
    });
  }

  function deleteAccount(e) {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        setUser(null);
        navigate("/");
      } else {
        resp.json().then((data) => {
          setErrors(data);
        });
      }
    });
  }
  return (
    <>
      {authenticated ? (
        <Form>
          <Button onClick={deleteAccount}>Delete Account</Button>
        </Form>
      ) : (
        <Form onSubmit={handleAuth}>
          <Form.Input
            label="Please enter current password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Input>
          <Form.Button
            style={{
              color: "#FFA7A7",
              backgroundColor: "#F8F8F8",
            }}
            type="submit"
          >
            Submit
          </Form.Button>
          {errors.error ? (
            <span style={{ color: "red" }}>{errors.error}</span>
          ) : null}
        </Form>
      )}
    </>
  );
}

export default DeleteAccount;
