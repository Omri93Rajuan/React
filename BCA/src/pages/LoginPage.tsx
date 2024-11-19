import React, { useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { user, login } = useContext(AuthContext) ?? {};
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(""); // איפוס שגיאה קודמת

    try {
      const success = await login?.({ email, password });
      if (success) {
        navigate("/");
      } else {
        setError("שם משתמש או סיסמה לא נכונים");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("אירעה שגיאה בהתחברות. אנא נסה שנית");
    } finally {
      setPassword("");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">התחברות</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">אימייל</label>
            <input
              id="email"
              type="email"
              placeholder="הכנס את האימייל שלך"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">סיסמה</label>
            <input
              id="password"
              type="password"
              placeholder="הכנס את הסיסמה שלך"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit">"Login"</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
