function TableSkeleton({ rows = 5 }) {
  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="min-w-full table-auto border-collapse bg-slate-800 text-white">
        <thead>
          <tr className="bg-slate-700">
            <th className="px-4 py-2 text-left">Артикул</th>
            <th className="px-4 py-2 text-left">Партия</th>
            <th className="px-4 py-2 text-left">Нархи</th>
            <th className="px-4 py-2 text-left">Расм</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i} className="animate-pulse">
              <td className="px-4 py-2">
                <div className="h-4 w-24 bg-slate-600 rounded" />
              </td>
              <td className="px-4 py-2">
                <div className="h-4 w-20 bg-slate-600 rounded" />
              </td>
              <td className="px-4 py-2">
                <div className="h-4 w-16 bg-slate-600 rounded" />
              </td>
              <td className="px-4 py-2">
                <div className="h-12 w-12 bg-slate-600 rounded-full" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableSkeleton;
