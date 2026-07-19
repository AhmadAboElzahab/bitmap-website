type Stat = {
  value: string;
  label: string;
};

type StatsBlockProps = {
  stats: Stat[];
};

export default function StatsBlock({ stats }: StatsBlockProps) {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 py-8 sm:py-12 border-y border-black/10">
      {stats.map((stat) => (
        <div key={stat.label}>
          <div className="text-[clamp(1.75rem,4vw,3rem)] font-black tracking-tight text-primary">
            {stat.value}
          </div>
          <div className="mt-1 text-xs sm:text-sm uppercase tracking-wide text-black/50">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
