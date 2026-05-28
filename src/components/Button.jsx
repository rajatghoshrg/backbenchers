import React from "react";

const Button = ({
  text,
  icon,
  variant = "primary",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden
        flex items-center justify-center gap-2
        px-8 py-4 rounded-2xl font-semibold
        transition-all duration-300
        hover:scale-105 backdrop-blur-md

        ${
          variant === "primary"
            ? "bg-gradient-to-r from-[#5de6ff] to-[#00cbe6] text-black shadow-[0_10px_30px_rgba(93,230,255,0.35)]"
            : "border border-[#273647] bg-[rgba(18,33,49,0.7)] text-white hover:border-[#5de6ff]"
        }
      `}
    >

      {/* Glossy Effect */}
      <span className="absolute inset-0 bg-white/10 opacity-20"></span>

      {/* Top Shine */}
      <span className="absolute top-0 left-0 w-full h-[1px] bg-white/40"></span>

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span>{icon}</span>}
        {text}
      </span>

    </button>
  );
};

export default Button;