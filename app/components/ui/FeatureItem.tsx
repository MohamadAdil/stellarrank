import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function FeatureItem({ icon, title, description }: Props) {
  return (
    <div className="text-start max-w-xs mx-auto">
      
      {/* ICON BOX */}
      <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur">
        <div className="text-lg text-white">{icon}</div>
      </div>

      {/* TITLE */}
      <h4 className="text-sm font-semibold text-white mb-1">
        {title}
      </h4>

      {/* DESC */}
      <p className="text-xs text-gray-400">
        {description}
      </p>
    </div>
  );
}