import Image from "next/image";
import Link from "next/link";

type Props = {
  image: string;
  location: string;
  title: string;
  description: string;
  stat?: string;
  large?: boolean;
};

export default function CaseStudyCard({
  image,
  location,
  title,
  description,
  stat,
  large = false,
}: Props) {
  return (
    <div className={`relative rounded-xl overflow-hidden ${large ? "h-[420px]" : "h-[300px]"}`}>

      {/* IMAGE */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="absolute bottom-0 p-6 text-white">
        <p className="text-xs uppercase tracking-wide opacity-70">
          {location}
        </p>

        <h3 className="text-xl md:text-2xl font-semibold mt-1">
          {title}
        </h3>

        <p className="text-sm opacity-80 mt-2 max-w-md">
          {description}
        </p>

        {/* STAT */}
        {stat && (
          <div className="mt-4 inline-block bg-white/20 backdrop-blur px-4 py-1 rounded-full text-xs">
            {stat}
          </div>
        )}
      </div>
    </div>
  );
}