import { Link } from "react-router-dom"

export function BottomWarning({label, buttonText, to}) {
    return <div style={{ color: "#007bff", textDecoration: "none" }}>
      <div>
        {label}
      </div>
      <Link style={{ color: "#007bff", textDecoration: "underline" }} to={to}>
        {buttonText}
      </Link>
    </div>
}