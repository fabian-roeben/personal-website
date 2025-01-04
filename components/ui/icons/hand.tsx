import * as React from "react";
const HandIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"  // Changed from "none" to "currentColor"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-hand"
    {...props}
  >
    <path d="M18 10V5.5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4.5" />
    <path d="M14 15V3.5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v7.5" />
    <path d="M10 12.5V5.5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v12.5" />
    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 14.5" />

  </svg>
);
export default HandIcon;
