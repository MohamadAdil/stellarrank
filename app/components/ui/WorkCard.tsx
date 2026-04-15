"use client";

type Props = {
  item: {
    title: string;
    year: string;
    type: string;
    desc: string;
    img: string;
  };
  index: number;
};

export default function WorkCard({ item, index }: Props) {
  const isReverse = index % 2 !== 0;

  return (
    <div
      className={`work-card sticky top-0 h-[80vh] w-full overflow-hidden shadow-2xl flex flex-col md:flex-row ${
        isReverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* IMAGE */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center text-white">
        <div className="flex gap-2 text-sm opacity-60 mb-4">
          <span>/</span>
          <span>{item.year}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
          {item.title}
        </h2>

        <p className="opacity-80 leading-relaxed max-w-md">
          {item.desc}
        </p>

        <div className="flex gap-2 text-sm opacity-60 mt-6">
          <span>/</span>
          <span>{item.type}</span>
        </div>
      </div>
    </div>
  );
}