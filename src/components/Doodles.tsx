const Doodles = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    {/* Sun top-left */}
    <g transform="translate(60, 60)" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.4">
      <circle cx="0" cy="0" r="30" />
      <line x1="-50" y1="0" x2="-38" y2="0" />
      <line x1="38" y1="0" x2="50" y2="0" />
      <line x1="0" y1="-50" x2="0" y2="-38" />
      <line x1="0" y1="38" x2="0" y2="50" />
      <line x1="-35" y1="-35" x2="-27" y2="-27" />
      <line x1="27" y1="-27" x2="35" y2="-35" />
      <line x1="-35" y1="35" x2="-27" y2="27" />
      <line x1="27" y1="27" x2="35" y2="35" />
    </g>
    {/* Squiggly lines */}
    <path d="M 80 200 Q 90 180 100 200 Q 110 220 120 200 Q 130 180 140 200" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.25" />
    <path d="M 50 350 Q 60 330 70 350 Q 80 370 90 350 Q 100 330 110 350" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.2" />
    {/* Zigzag */}
    <path d="M 200 40 L 210 60 L 220 40 L 230 60 L 240 40" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.3" />
    <path d="M 280 80 L 290 100 L 300 80 L 310 100" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.25" />
    {/* Arrows */}
    <g transform="translate(150, 450)" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.25">
      <path d="M 0 0 L 12 8 L 0 16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 18 0 L 30 8 L 18 16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 36 0 L 48 8 L 36 16" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    {/* Sparkle top-right area */}
    <g transform="translate(320, 80)" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3">
      <line x1="0" y1="-8" x2="0" y2="8" />
      <line x1="-8" y1="0" x2="8" y2="0" />
      <line x1="-5" y1="-5" x2="5" y2="5" />
      <line x1="5" y1="-5" x2="-5" y2="5" />
    </g>
    {/* Smiley */}
    <g transform="translate(350, 300)" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.2">
      <path d="M -12 0 Q 0 14 12 0" strokeLinecap="round" />
    </g>
    {/* Wavy line bottom-right */}
    <path d="M 300 500 Q 320 480 340 500 Q 360 520 380 500" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.2" />
  </svg>
);

export default Doodles;
