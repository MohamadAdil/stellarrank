import React from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  points: string[];
  variant?: "dark" | "light";
  icon?: React.ReactNode;
};

export default function FeatureCard({
  title,
  description,
  points,
  variant = "light",
  icon,
}: FeatureCardProps) {
  const styles = {
    dark: "bg-gradient-to-br from-blue-700 to-blue-900 text-white",
    light: "bg-gray-100 text-black",
  };

  const iconBoxStyles = {
    dark: "bg-white/10 text-white",
    light: "bg-white",
  };

  return (
    <div className={`p-20 ${styles[variant]}`}>

      {/* ICON BOX */}
      {icon && (
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-xl mb-6 ${iconBoxStyles[variant]}`}
        >
          <div className="text-xl">{icon}</div>
        </div>
      )}

      {/* TITLE */}
      <h3 className="text-3xl font-semibold mb-4">{title}</h3>

      {/* DESC */}
      <p className="text-sm opacity-80 mb-6 max-w-md">
        {description}
      </p>

      {/* POINTS */}
      <ul className="space-y-2 text-sm opacity-80">
        {points.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-[2px]">→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}