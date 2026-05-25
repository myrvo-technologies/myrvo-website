import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <div>
        <div className="code">404</div>
        <h1>Page not found</h1>
        <p>
          The page you're looking for doesn't exist — or has been moved.
        </p>
        <Link to="/" className="btn btn-primary btn-lg">
          Back to home
        </Link>
      </div>
    </div>
  );
}
