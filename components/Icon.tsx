type IconName = "document" | "monitor" | "cap" | "globe" | "cube" | "shield" | "clock" | "spark" | "lms" | "helmet" | "play" | "chart" | "update" | "mobile";

const paths: Record<IconName, string> = {
  document: "M7 3h7l5 5v13H7z M14 3v6h5 M10 13h6 M10 17h6",
  monitor: "M4 5h16v11H4z M9 21h6 M12 16v5",
  cap: "M3 9l9-5 9 5-9 5z M7 12v5c2 2 8 2 10 0v-5",
  globe: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M2 12h20 M12 2c3 3 3 17 0 20 M12 2c-3 3-3 17 0 20",
  cube: "M12 2l9 5-9 5-9-5 9-5z M3 7v10l9 5 9-5V7 M12 12v10",
  shield: "M12 2l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6l8-4z M8.5 12l2.2 2.2 4.8-5",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2",
  spark: "M12 2l2.2 6.8H21l-5.5 4 2.1 6.8L12 15.4 6.4 19.6 8.5 12.8 3 8.8h6.8z",
  lms: "M4 6h16v12H4z M8 10h8 M8 14h5 M6 20h12",
  helmet: "M4 15a8 8 0 0 1 16 0v3H4v-3z M8 18v-5 M16 18v-5 M3 18h18",
  play: "M8 5v14l11-7z",
  chart: "M4 19V5 M4 19h17 M8 16v-5 M13 16V8 M18 16v-9",
  update: "M20 12a8 8 0 1 1-2.3-5.7 M20 4v5h-5 M12 7v5l3 2",
  mobile: "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z M11 18h2"
};

export default function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
