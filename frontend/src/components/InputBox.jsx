export function InputBox({ label, placeholder }) {
  return (
    <div>
      <h3 style={{ marginBottom: "5px", color: "#333" }}>{label}</h3>
      <input
        type="text"
        placeholder={placeholder}
        style={{
          width: "70%",
          padding: "10px",
          margin: "8px 0",
          marginBottom: "10px",
          border: "2px solid #ccc",
          borderRadius: "5px",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}
