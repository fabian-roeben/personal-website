export function WaveBackground() {
    return (
      <div className="bg-waves -z-10 text-[hsl(354,75%,25%)] dark:text-[hsl(354,75%,80%)]" aria-hidden="true">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="100%" 
          height="100%" 
          preserveAspectRatio="none" 
          viewBox="0 0 1440 560"
          className="w-full h-full opacity-[0.4] dark:opacity-[0.3]"
        >
          <g mask="url(#SvgjsMask1117)" fill="none">
            <path 
              d="M -268.4914559011871,534 C -124.49,461.2 163.51,196.4 451.5085440988129,170 C 739.51,143.6 883.51,403.2 1171.5085440988128,402 C 1459.51,400.8 1837.81,158.6 1891.5085440988128,164 C 1945.21,169.4 1530.3,376 1440,429" 
              style={{ stroke: 'currentColor', strokeWidth: 1 }}
            />
            <path 
              d="M -1240.1577849753699,323 C -1096.16,306.8 -808.16,223 -520.1577849753697,242 C -232.16,261 -88.16,444.8 199.84221502463026,418 C 487.84,391.2 671.81,134.6 919.8422150246303,108 C 1167.87,81.4 1335.97,249.6 1440,285" 
              style={{ stroke: 'currentColor', strokeWidth: 1 }}
            />
            <path 
              d="M -1148.0412811308602,215 C -1004.04,262.2 -716.04,482 -428.0412811308601,451 C -140.04,420 3.96,61.2 291.9587188691399,60 C 579.96,58.8 782.35,441 1011.9587188691398,445 C 1241.57,449 1354.39,153 1440,80" 
              style={{ stroke: 'currentColor', strokeWidth: 1 }}
            />
          </g>
          <defs>
            <mask id="SvgjsMask1117">
              <rect width="1440" height="560" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>
      </div>
    )
  }