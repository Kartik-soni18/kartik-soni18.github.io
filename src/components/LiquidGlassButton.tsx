interface LiquidGlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function LiquidGlassButton({ children, onClick, className = '' }: LiquidGlassButtonProps) {
  return (
      <button
        onClick={onClick}
        className={`liquid-glass-btn ${className}`}
      >
        {children}
      </button>
  );
}
