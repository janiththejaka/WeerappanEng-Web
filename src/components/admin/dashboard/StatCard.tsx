import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: number;
  icon?: ReactNode;
}

export default function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-slate-500 font-medium text-sm">
          {title}
        </h3>
        {icon && (
          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        )}
      </div>

      <p className="text-4xl font-extrabold text-primary">
        {value}
      </p>
    </div>
  );
}