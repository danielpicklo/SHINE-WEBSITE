import { comparisonRows } from "@/lib/shine-content";

export function ComparisonTable() {
  return (
    <section className="bg-[#0e0e0e] py-16 lg:py-24">
      <div className="mx-auto max-w-[980px] px-5">
        <h2 className="text-center text-[26px] leading-10 tracking-[-0.6px] text-accent lg:text-[30px]">
          Shine is the only solar EPC that installs on resident meters and common area meters in
          all 50 states.
        </h2>
        <div className="mt-10 overflow-x-auto rounded-lg bg-white shadow-sm">
          <table className="w-full min-w-[720px] border-collapse text-left text-base text-[#0e0e0e]">
            <thead>
              <tr className="h-[60px]">
                <th className="bg-[#474747] px-6 font-display text-2xl font-semibold tracking-[-0.6px] text-white">
                  What You Get
                </th>
                <th className="w-[220px] bg-accent px-6">
                  <img
                    src="/homepage/shine-wordmark.svg"
                    alt="Shine"
                    className="h-5 w-auto"
                  />
                </th>
                <th className="bg-[#474747] px-6 font-display text-2xl font-semibold tracking-[-0.6px] text-white">
                  Other Solar Companies
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-b border-[#eaecf0]">
                  <td className="px-6 py-4 leading-[22.5px]">{row.feature}</td>
                  <td className="border-x border-[#eaecf0] bg-[#fffcde] px-6 py-4">{row.shine}</td>
                  <td className="px-6 py-4 leading-[22.5px]">{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
