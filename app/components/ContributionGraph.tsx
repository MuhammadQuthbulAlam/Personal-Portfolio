export default function ContributionGraph() {
  const days = Array.from({ length: 52 * 7 });

  return (
    <div className="grid grid-cols-52 gap-1 mt-6">
      {days.map((_, i) => (
        <div
          key={i}
          className="w-3 h-3 rounded-sm bg-gray-200 dark:bg-gray-700"
        />
      ))}
    </div>
  );
}
