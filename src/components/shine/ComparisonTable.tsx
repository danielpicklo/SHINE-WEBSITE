import { comparisonRows } from "@/lib/shine-content";

export function ComparisonTable() {
  return (
    <section className="bg-[#0e0e0e] py-16 lg:py-24">
      <div className="mx-auto max-w-[980px] px-5">
        <h2 className="text-center text-[26px] leading-10 tracking-[-0.6px] text-accent lg:text-[30px]">
          Shine is the only solar EPC that installs on resident meters and common area meters in
          all 50 states.
        </h2>
        <div className="mt-10 rounded-lg bg-white shadow-sm">
          <table className="w-full table-fixed border-collapse text-left text-sm text-[#0e0e0e] sm:text-base">
            <thead>
              <tr className="h-auto min-h-[60px]">
                <th className="bg-[#474747] px-3 py-3 font-display text-base font-semibold leading-tight tracking-[-0.6px] text-white sm:px-6 sm:text-2xl">
                  What You Get
                </th>
                <th className="w-[28%] bg-accent px-3 py-3 sm:w-[220px] sm:px-6">
                  <img
                    src="/homepage/shine-wordmark.svg"
                    alt="Shine"
                    className="h-4 w-auto sm:h-5"
                  />
                </th>
                <th className="bg-[#474747] px-3 py-3 font-display text-base font-semibold leading-tight tracking-[-0.6px] text-white sm:px-6 sm:text-2xl">
                  Other Solar Companies
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-b border-[#eaecf0]">
                  <td className="break-words px-3 py-3 leading-snug sm:px-6 sm:py-4 sm:leading-[22.5px]">
                    {row.feature}
                  </td>
                  <td className="break-words border-x border-[#eaecf0] bg-[#fffcde] px-3 py-3 leading-snug sm:px-6 sm:py-4">
                    {row.shine}
                  </td>
                  <td className="break-words px-3 py-3 leading-snug sm:px-6 sm:py-4 sm:leading-[22.5px]">
                    {row.others}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
