interface StatCardProps {
  title: string;
  value: number;
}

export default function StatCard({title,value,}: StatCardProps) {
  return (
    <div className="
      border
      rounded-lg
      p-6
      shadow-sm
      "
    >
      <h3 className="text-gray-500">
        {title}
      </h3>

      <p
        className="
        text-3xl
        font-bold
        mt-2
        "
      >
        {value}
      </p>
    </div>
  );
}