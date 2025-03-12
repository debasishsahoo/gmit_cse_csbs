import { useState } from "react";
import { changePassword } from "../services/userService";

const ChangePassword = ({ userId }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await changePassword(userId, oldPassword, newPassword);
      alert("Password changed successfully!");
      setOldPassword("");
      setNewPassword("");
    } catch (error) {
      console.error("Error changing password:", error);
      alert("Failed to change password.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Change Password</h2>
      <input
        type="password"
        placeholder="Old Password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <button type="submit">Change Password</button>
    </form>
  );
};

export default ChangePassword;
