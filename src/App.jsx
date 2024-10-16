import { useState } from "react";
import "./App.css"; // Assuming the CSS file is in the same folder
import { supabase } from "/src/supabaseClient";
const Sign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      alert(error.message);
    } else {
      alert("Check your email for the confirmation link");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Sign-In</h2>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="button-group">
          <button className="sign-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sign;
