import React from "react";
import { useError } from "../providers/ErrorProvider";

const ErrorDisplay = () => {
  const { error, setError } = useError();

  if (!error) return null;

  return (
    <div style={{ background: "red", color: "white", padding: "1rem" }}>
      <p>{error}</p>
      <button onClick={() => setError(null)}>Dismiss</button>
    </div>
  );
};

export default ErrorDisplay;
