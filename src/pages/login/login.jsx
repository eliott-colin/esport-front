import React, { useState } from "react";
import { loginUser } from "../../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await loginUser(email, password);
      login(response.token, response.role);
      navigate("/finalfocus/");
    } catch (err) {
      setError(
        err.response?.data?.message || "Email ou mot de passe incorrect",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container navBarSpace">
      <div className="login-card">
        <h1 className="login-title">Connexion</h1>

        {error && <div className="error-message">{error}</div>}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Connexion en cours..." : "Se connecter"}
          </button>
        </form>

        <p className="register-link">
          Pas encore de compte ?{" "}
          <Link to="/finalfocus/register">S'inscrire</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
