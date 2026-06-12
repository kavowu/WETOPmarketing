

interface EvidenceRow {
  feature: string;
  traditional: string;
  wetop: string;
}

export const SensoryEvidence: React.FC = () => {
  const evidenceData: EvidenceRow[] = [
    {
      feature: '防疫',
      traditional: '濾網上抓到灰塵',
      wetop: '家裡不再有「病人來過」的悶濁感',
    },
    {
      feature: '防霉',
      traditional: '除濕機水箱的水量',
      wetop: '走進房間，那股潮濕霉味徹底消失',
    },
    {
      feature: '去異味',
      traditional: '空氣品質 AQI 數值',
      wetop: '推門的瞬間，你的鼻子告訴你「這裡乾淨」',
    },
    {
      feature: '降微塵',
      traditional: 'PM2.5 數值下降',
      wetop: '空氣聞起來更輕盈，不再有灰塵的厚重感',
    },
    {
      feature: '節能',
      traditional: '電費帳單金額',
      wetop: '24 小時開著，你聞到的是持續守護，而不是電費焦慮',
    },
  ];

  return (
    <section id="sensory" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">嗅覺證據：從「眼見為憑」到「鼻聞為實」</h2>
          <p className="section-subtitle">
            傳統清淨機讓你「看」數據；WETOP 讓你「聞」結果
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-4 px-4 font-bold text-foreground">
                  WETOP 特性
                </th>
                <th className="text-left py-4 px-4 font-bold text-muted-foreground">
                  傳統的「視覺證據」
                </th>
                <th className="text-left py-4 px-4 font-bold text-accent">
                  WETOP 的「嗅覺證據」
                </th>
              </tr>
            </thead>
            <tbody>
              {evidenceData.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-border hover:bg-card/50 transition-colors"
                >
                  <td className="py-4 px-4 font-semibold text-foreground">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-muted-foreground">
                    {row.traditional}
                  </td>
                  <td className="py-4 px-4 text-foreground">
                    {row.wetop}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
