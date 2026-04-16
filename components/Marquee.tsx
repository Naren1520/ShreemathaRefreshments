export default function Marquee() {
  const items = [
    'Idli Sambar', 'Masala Dosa', 'Udupi Thali', 'Filter Coffee',
    'Neer Dosa', 'Vangi Bath', 'Rava Idli', 'Bisi Bele Bath',
    'Poha', 'Mysore Pak'
  ];
  const full = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-green-dark border-y border-[0.5px] border-green-light/20 py-[14px] overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap animate-marquee">
        {full.map((item, i) => (
          <span key={i} className="flex items-center gap-4 text-xs tracking-[3px] uppercase text-green-light after:content-['✦'] after:text-lime after:text-[8px]">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
