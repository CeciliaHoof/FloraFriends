import { useState } from "react";
import { Form } from "semantic-ui-react";

function ChangePassword({
  setChangePassword,
  user,
  updateUser,
  onSuccessfulPatch,
}) {
  const [authenticated, setAuthenticated] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errors, setErrors] = useState({});

  function handleAuth(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: user.username,
        password: oldPassword,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setAuthenticated(true);
        });
      } else if (r.status === 401) {
        r.json().then(() => setErrors({ error: "Invalid password" }));
      }
    });
  }

  function changePassword(e) {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        password: newPassword,
      }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => updateUser(data));
        setErrors({});
        setChangePassword(false);
        onSuccessfulPatch(true);
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
        <>
          <Form onSubmit={changePassword}>
            <Form.Input
              label="Please enter new password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Form.Button
              style={{
                color: "#FFA7A7",
                backgroundColor: "#F8F8F8",
              }}
              type="submit"
            >
              Submit
            </Form.Button>
          </Form>
        </>
      ) : (
        <>
          <Form onSubmit={handleAuth}>
            <Form.Input
              label="Please enter current password"
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
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
        </>
      )}
    </>
  );
}

export default ChangePassword;
