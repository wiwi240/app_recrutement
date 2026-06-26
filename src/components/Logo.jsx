export default function Logo() {
  return (
    <div className="logo" aria-label="React logo">
      <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
        <circle cx="32" cy="32" r="4" fill="currentColor" />
        <ellipse
          cx="32"
          cy="32"
          rx="24"
          ry="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <ellipse
          cx="32"
          cy="32"
          rx="24"
          ry="9"
          transform="rotate(60 32 32)"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <ellipse
          cx="32"
          cy="32"
          rx="24"
          ry="9"
          transform="rotate(120 32 32)"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}
