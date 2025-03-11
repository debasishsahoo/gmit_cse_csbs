import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <h2>Signup</h2>
      <form>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignUp;
