import { useState } from "react";
import { Dropdown, Form } from "semantic-ui-react";

function EditProfile({ setEditProfile, user, updateUser, onSuccessfulPatch }) {
  const [editErrors, setEditErrors] = useState({});
  const [userPatch, setUserPatch] = useState({
    "username": user.username,
    "bio": user.bio,
    "first_name": user.first_name,
    "last_name": user.last_name
  });
  const [editSelection, setEditSelection] = useState("");

  const editOptions = [
    { key: "username", value: "username", text: "Username" },
    { key: "first_name", value: "first_name", text: "First Name" },
    { key: "last_name", value: "last_name", text: "Last Name" },
    { key: "bio", value: "bio", text: "About Me" },
  ];

  function handleProfileChange(e, { value, name }) {
    setUserPatch({ [name]: value });
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userPatch),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => updateUser(data));
        setEditErrors({});
        setEditProfile(false);
        onSuccessfulPatch(true);
      } else {
        resp.json().then((data) => {
          if (data.error.includes("UNIQUE")) {
            setEditErrors({ error: "Username is already in use." });
          } else {
            setEditErrors(data);
          }
        });
      }
    });
  }
  return (
    <>
      <Dropdown
        placeholder="What do you want to change"
        fluid
        selection
        clearable
        value={editSelection}
        options={editOptions}
        onChange={(e, { value }) => {setEditSelection(value); setEditErrors({})}}
      />
      <Form onSubmit={handleEditSubmit}>
        {editSelection === "username" && (
          <Form.Field>
            <Form.Input
              label="Change Username"
              value={userPatch.username}
              name="username"
              onChange={handleProfileChange}
            />
          </Form.Field>
        )}
        {editSelection === "first_name" && (
          <Form.Field>
            <Form.Input
              label="Change First Name"
              value={userPatch.first_name}
              name="first_name"
              onChange={handleProfileChange}
            />
          </Form.Field>
        )}
        {editSelection === "last_name" && (
          <Form.Field>
            <Form.Input
              label="Change Last Name"
              value={userPatch.last_name}
              name="last_name"
              onChange={handleProfileChange}
            />
          </Form.Field>
        )}
        {editSelection === "bio" && (
          <Form.Field>
            <Form.Input
              label="Change Bio"
              value={userPatch.bio}
              name="bio"
              onChange={handleProfileChange}
            />
          </Form.Field>
        )}
        {editErrors.error ? (
          <span style={{ color: "red" }}>{editErrors.error}</span>
        ) : null}
        {editSelection && (
          <Form.Field>
            <Form.Button
              style={{
                color: "#FFA7A7",
                backgroundColor: "#F8F8F8",
              }}
            >
              Submit Changes
            </Form.Button>
          </Form.Field>
        )}
      </Form>
    </>
  );
}
export default EditProfile;
