import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import EditProfile from "./EditProfile";

function ManageAccount() {
  const [user, setUser] = useState({});
  const [editProfile, setEditProfile] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [deleteAccount, setDeleteAccount] = useState(false);

  const params = useParams();
  const userId = params.id;

  useEffect(() => {
    fetch(`/users/${userId}`)
      .then((r) => r.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, [userId]);

  function handleEdit() {
    setEditProfile(!editProfile);
    setChangePassword(false);
    setDeleteAccount(false);
  }

  function handlePassword() {
    setChangePassword(!changePassword);
    setEditProfile(false);
    setDeleteAccount(false);
  }

  function handleDelete() {
    setDeleteAccount(!deleteAccount);
    setChangePassword(false);
    setEditProfile(false);
  }

  return (
    <>
      <Button
        style={{
          color: "#FFA7A7",
          backgroundColor: "#F8F8F8",
        }}
        onClick={handleEdit}
      >
        Edit Profile
      </Button>
      <Button
        style={{
          color: "#FFA7A7",
          backgroundColor: "#F8F8F8",
        }}
        onClick={handlePassword}
      >
        Change Password
      </Button>
      <Button
        style={{
          color: "#FFA7A7",
          backgroundColor: "#F8F8F8",
        }}
        onClick={handleDelete}
      >
        Delete Account
      </Button>
      {editProfile && <EditProfile setEditProfile={setEditProfile} user={user} updateUser={setUser}/>}
      {changePassword && <h2>Change Password</h2>}
      {deleteAccount && <h2>Delete Account</h2>}
    </>
  );
}

export default ManageAccount;
