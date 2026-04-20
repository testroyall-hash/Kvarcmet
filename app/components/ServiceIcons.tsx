import type { ServiceIconName } from "../data/services";

type IconProps = {
  className?: string;
};

export function ServiceIcon({ icon, className = "h-10 w-10" }: { icon: ServiceIconName; className?: string }) {
  const sharedProps = {
    "aria-hidden": "true",
    viewBox: "0 0 24 24",
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
  } as const;

  switch (icon) {
    case "lathe":
      return (
        <svg {...sharedProps}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "mill":
      return (
        <svg {...sharedProps}>
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <path d="M5 10h14M5 14h14M10 5v14M14 5v14" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...sharedProps}>
          <path d="M14.5 5.5a4.5 4.5 0 0 0 4.84 5.9l-7.7 7.7a2 2 0 1 1-2.83-2.83l7.7-7.7a4.5 4.5 0 0 0-5.9-4.84l2.3 2.3-2.8 2.8-2.3-2.3a4.5 4.5 0 0 0 5.9 5.9" />
        </svg>
      );
    case "flame":
      return (
        <svg {...sharedProps}>
          <path d="M12 3c1.2 3-1.8 3.8-1.8 6.4A3.8 3.8 0 0 0 14 13.2c1 0 2.2-.5 2.8-1.5.8 1 1.7 2.4 1.7 4.1A6.5 6.5 0 1 1 6 13.7c0-2 1-3.8 2.6-5.4.7 1.9 1.8 2.7 2.8 2.7 1.3 0 2.4-1.2 2-2.9" />
        </svg>
      );
    case "grinding":
      return (
        <svg {...sharedProps}>
          <path d="M4 16h16" />
          <path d="M7 16a5 5 0 1 1 10 0" />
          <path d="M12 6v5" />
        </svg>
      );
    case "heat":
      return (
        <svg {...sharedProps}>
          <path d="M12 4v9" />
          <path d="M9 6.5a3 3 0 1 1 6 0v6.25a4.25 4.25 0 1 1-6 0Z" />
        </svg>
      );
    case "glass":
      return (
        <svg {...sharedProps}>
          <path d="M7 4.75h10l-1 10.25a4 4 0 0 1-8 0L7 4.75Z" />
          <path d="M6 4.75h12" />
          <path d="M10 20h4" />
        </svg>
      );
    case "cheese":
      return (
        <svg {...sharedProps}>
          <path d="M5 15.5 11.5 7 19 11v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 15.5Z" />
          <circle cx="14.5" cy="13" r="1" />
          <circle cx="11.25" cy="15.5" r="1" />
          <circle cx="16.25" cy="16" r="1" />
        </svg>
      );
  }
}

export function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function CheckIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}
