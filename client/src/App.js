import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Frontdoor</h1>
      <div>
      <Link to="/registration">Registration</Link>
      </div>
      <div>
      <Link to="/overview">Overview</Link>
      </div>
    </div>
  );
}