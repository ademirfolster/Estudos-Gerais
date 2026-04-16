interface playButtonProps {
  label: string;
  onClick: () => void;
}

export function PlayButton({ label, onClick }: playButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "15px 30px",
        fontSize: "1.2rem",
        backgroundColor: "#BA8E23",
        color: "black",
        border: "2px solid black",
        borderRadius: "12px",
        cursor: "pointer",
        fontWeight: "bold",
        textTransform: "uppercase",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      {label}
    </button>
  );
}
