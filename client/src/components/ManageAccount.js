import { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { Button } from "semantic-ui-react";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";

function ManageAccount() {
  const user = useOutletContext().user
  const setUser = useOutletContext().setUser
  const [editProfile, setEditProfile] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [changeSuccessful, setChangeSuccessful] = useState(false)

  function handleEdit() {
    setEditProfile(!editProfile);
    setChangePassword(false);
    setDeleteAccount(false);
    setChangeSuccessful(false)
  }

  function handlePassword() {
    setChangePassword(!changePassword);
    setEditProfile(false);
    setDeleteAccount(false);
    setChangeSuccessful(false)
  }

  function handleDelete() {
    setDeleteAccount(!deleteAccount);
    setChangePassword(false);
    setEditProfile(false);
    setChangeSuccessful(false)
  }

  function handlePatch(){
    setChangeSuccessful(true)
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
      {editProfile && <EditProfile setEditProfile={setEditProfile} user={user} updateUser={setUser} onSuccessfulPatch={handlePatch}/>}
      {changePassword && <ChangePassword setChangePassword={setChangePassword} user={user} updateUser={setUser} onSuccessfulPatch={handlePatch}/>}
      {deleteAccount && <DeleteAccount user={user} setUser={setUser}/>}
      {changeSuccessful && <h3>Account Changes Successful</h3>}
    </>
  );
}

export default ManageAccount;
