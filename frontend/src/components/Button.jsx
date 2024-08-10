export function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        width: "70%",
        padding: "10px",
        backgroundColor: "#28a745",
        margin: "20px 0px",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      {label}
    </button>
  );
}
