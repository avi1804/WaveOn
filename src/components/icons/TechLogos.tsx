import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export const TypeScriptLogo: React.FC<LogoProps> = ({ className = "h-5 w-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path
      d="M11.5 10.5H7.5V12.2H9V19H10.8V12.2H12.3V10.5H11.5ZM13.8 17.2C14.3 17.5 15 17.7 15.7 17.7C16.8 17.7 17.4 17.1 17.4 16.3C17.4 15.6 17 15.2 15.8 14.7C14.2 14.1 13.3 13.4 13.3 12.1C13.3 10.7 14.4 9.8 16 9.8C16.8 9.8 17.6 10 18.2 10.4L17.7 11.9C17.2 11.6 16.6 11.4 15.9 11.4C15.1 11.4 14.6 11.8 14.6 12.4C14.6 13 15 13.4 16.2 13.9C17.9 14.5 18.8 15.2 18.8 16.6C18.8 18.1 17.6 19.2 15.7 19.2C14.7 19.2 13.8 18.9 13.2 18.4L13.8 17.2Z"
      fill="#FFFFFF"
    />
  </svg>
);

export const JavaScriptLogo: React.FC<LogoProps> = ({ className = "h-5 w-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="4" fill="#F7DF1E" />
    <path
      d="M12.5 17.5C12.5 18.4 11.8 18.9 10.8 18.9C9.8 18.9 9.1 18.3 8.7 17.5L10 16.7C10.2 17.1 10.5 17.4 10.8 17.4C11.1 17.4 11.3 17.2 11.3 16.9V11.5H12.5V17.5ZM17.8 15.6C17.8 17.4 16.4 18.9 14.4 18.9C13.2 18.9 12.3 18.4 11.7 17.5L12.9 16.7C13.3 17.3 13.8 17.5 14.4 17.5C15 17.5 15.4 17.2 15.4 16.7C15.4 16.2 15.1 15.9 14.3 15.5C12.8 14.9 12 14.2 12 13C12 11.7 13.1 10.7 14.7 10.7C15.7 10.7 16.5 11.1 17 11.8L15.9 12.6C15.5 12.1 15.1 11.9 14.6 11.9C14.1 11.9 13.7 12.2 13.7 12.6C13.7 13 14 13.3 14.7 13.6C16.3 14.2 17.8 14.6 17.8 15.6Z"
      fill="#000000"
    />
  </svg>
);

export const PythonLogo: React.FC<LogoProps> = ({ className = "h-5 w-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M11.8 2C8.3 2 8.5 3.5 8.5 3.5L8.5 5.1H12.3V5.6H5.2C3.1 5.6 2 6.8 2 9.5C2 12.2 3.1 13.2 5 13.2H6.4V11.6C6.4 9.6 8 8.1 10.1 8.1H13.9C14.8 8.1 15.5 7.4 15.5 6.4V3.5C15.5 3.5 15.4 2 11.8 2ZM10.4 3.5C10.8 3.5 11.1 3.8 11.1 4.2C11.1 4.6 10.8 4.9 10.4 4.9C10 4.9 9.7 4.6 9.7 4.2C9.7 3.8 10 3.5 10.4 3.5Z"
      fill="#3776AB"
    />
    <path
      d="M12.2 22C15.7 22 15.5 20.5 15.5 20.5V18.9H11.7V18.4H18.8C20.9 18.4 22 17.2 22 14.5C22 11.8 20.9 10.8 19 10.8H17.6V12.4C17.6 14.4 16 15.9 13.9 15.9H10.1C9.2 15.9 8.5 16.6 8.5 17.6V20.5C8.5 20.5 8.6 22 12.2 22ZM13.6 20.5C13.2 20.5 12.9 20.2 12.9 19.8C12.9 19.4 13.2 19.1 13.6 19.1C14 19.1 14.3 19.4 14.3 19.8C14.3 20.2 14 20.5 13.6 20.5Z"
      fill="#FFD438"
    />
  </svg>
);

export const ReactLogo: React.FC<LogoProps> = ({ className = "h-5 w-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
  </svg>
);

export const NextjsLogo: React.FC<LogoProps> = ({ className = "h-5 w-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="11" fill="#000000" />
    <path
      d="M15.5 8.5V15.5M8.5 8.5V15.5L16.2 17.2"
      stroke="#FFFFFF"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const NodeLogo: React.FC<LogoProps> = ({ className = "h-5 w-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z"
      fill="#339933"
    />
    <path
      d="M12 4.5L18.8 8.4V15.6L12 19.5L5.2 15.6V8.4L12 4.5Z"
      fill="#215732"
    />
    <path
      d="M11.5 8.5C11.5 7.7 12.1 7.2 12.9 7.2C13.8 7.2 14.4 7.8 14.4 8.7V14.5H12.8V9.1C12.8 8.8 12.6 8.6 12.3 8.6C12 8.6 11.8 8.8 11.8 9.1V14.5H10.2V8.5H11.5Z"
      fill="#FFFFFF"
    />
  </svg>
);

export const TailwindLogo: React.FC<LogoProps> = ({ className = "h-5 w-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M6 12C7.3 9.4 9.3 8.3 12 8.6C13.6 8.8 14.7 9.8 15.6 10.7C17 12.1 18.4 13.4 21.6 13.4C23.6 13.4 25.1 12.6 26.1 10.9C24.8 13.5 22.8 14.6 20.1 14.3C18.5 14.1 17.4 13.1 16.5 12.2C15.1 10.8 13.7 9.5 10.5 9.5C8.5 9.5 7 10.3 6 12ZM0 17.5C1.3 14.9 3.3 13.8 6 14.1C7.6 14.3 8.7 15.3 9.6 16.2C11 17.6 12.4 18.9 15.6 18.9C17.6 18.9 19.1 18.1 20.1 16.4C18.8 19 16.8 20.1 14.1 19.8C12.5 19.6 11.4 18.6 10.5 17.7C9.1 16.3 7.7 15 4.5 15C2.5 15 1 15.8 0 17.5Z"
      fill="#06B6D4"
      transform="scale(0.85) translate(2, 0)"
    />
  </svg>
);

export const ShopifyLogo: React.FC<LogoProps> = ({ className = "h-5 w-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M19.4 6.2C19.3 6.1 19.1 6.1 19 6.2L17.5 6.7C17 4.8 15.7 3.5 13.9 3.5C13.3 3.5 12.7 3.8 12.2 4.1C11.9 4.3 11.4 4.5 11 4.5C9.8 4.5 8.7 3.9 8.2 3.9C7.7 3.9 7.4 4.1 7.2 4.3L3.8 7.3C3.6 7.5 3.6 7.7 3.6 7.8L5.2 20.1C5.3 20.4 5.6 20.6 5.9 20.6H17.8C18.1 20.6 18.4 20.4 18.4 20.1L20.4 7C20.4 6.6 20 6.3 19.4 6.2ZM13.8 5.2C14.7 5.2 15.6 6.3 15.9 7.8L11.5 9.1C11.9 7.5 12.8 5.2 13.8 5.2ZM11.6 15.8C10.7 15.8 10 15.2 10 14.4C10 13.1 12.6 12.8 12.6 11.6C12.6 11.1 12.2 10.7 11.6 10.7C10.8 10.7 10.3 11.1 9.9 11.6L9.1 10.7C9.7 9.9 10.6 9.4 11.6 9.4C12.7 9.4 13.7 10.1 13.7 11.3C13.7 12.8 11.1 13.1 11.1 14.1C11.1 14.4 11.3 14.6 11.7 14.6C12.4 14.6 13 14.1 13.4 13.5L14.2 14.4C13.5 15.3 12.5 15.8 11.6 15.8Z"
      fill="#95BF47"
    />
  </svg>
);

export const WordPressLogo: React.FC<LogoProps> = ({ className = "h-5 w-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="#21759B" strokeWidth="2" fill="none" />
    <path
      d="M3.5 12C3.5 15 5 17.6 7.3 19.1L4.8 12.3C4.8 12.2 3.5 12 3.5 12ZM18.5 11.4C18.5 10.3 18.1 9.5 17.7 8.8C17.2 7.9 16.7 7.2 16.7 6.4C16.7 5.5 17.4 4.7 18.3 4.7C18.4 4.7 18.5 4.7 18.6 4.7C16.9 3.3 14.5 2.5 12 2.5C8.8 2.5 6 4 4.3 6.3C4.6 6.4 5.2 6.4 5.8 6.4C6.8 6.4 8.2 6.3 8.2 6.3C8.7 6.3 8.7 6.9 8.3 7C8.3 7 7.7 7.1 7.2 7.1L10.3 16.3L12.2 10.7L10.9 7.1C10.4 7.1 9.9 7 9.9 7C9.4 7 9.5 6.3 9.9 6.3C9.9 6.3 11.4 6.4 12.3 6.4C13.3 6.4 14.7 6.3 14.7 6.3C15.2 6.3 15.3 7 14.8 7C14.8 7 14.2 7.1 13.8 7.1L16.8 16.2L18.4 11.4Z"
      fill="#21759B"
    />
  </svg>
);

export const PostgresLogo: React.FC<LogoProps> = ({ className = "h-5 w-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2C6.8 2 3.5 5.5 3.5 9.8C3.5 12.4 4.8 14.7 7.1 16.2V20.5C7.1 21.3 7.8 22 8.6 22H11.5C11.5 22 11.7 19.5 12 18.5C12.3 19.5 12.5 22 12.5 22H15.4C16.2 22 16.9 21.3 16.9 20.5V16.2C19.2 14.7 20.5 12.4 20.5 9.8C20.5 5.5 17.2 2 12 2Z"
      fill="#336791"
    />
    <path
      d="M12 6C9.5 6 7.5 7.8 7.5 10C7.5 11.5 8.3 12.8 9.6 13.5V17H14.4V13.5C15.7 12.8 16.5 11.5 16.5 10C16.5 7.8 14.5 6 12 6Z"
      fill="#FFFFFF"
    />
  </svg>
);

export const DockerLogo: React.FC<LogoProps> = ({ className = "h-5 w-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M23.5 12.3C23.1 12 22.3 11.9 21.6 12.1C21.4 11.2 20.8 10.5 20.1 10.1L19.4 10.8C19.8 11.3 20 12 20.1 12.7C19.5 13 18.4 13 17.4 12.6C15.8 11.9 14.5 9.8 14.5 9.8H12V7.4H9.6V9.8H7.2V7.4H4.8V9.8H2.4V12.2H0V14.6C1.1 17.8 4.2 19.8 8.4 19.8C14.7 19.8 19.8 16.6 21.8 12.8C22.6 12.9 23.3 12.7 23.5 12.3Z"
      fill="#2496ED"
    />
    <rect x="7.2" y="5" width="2.4" height="2.4" fill="#2496ED" />
    <rect x="9.6" y="5" width="2.4" height="2.4" fill="#2496ED" />
    <rect x="12" y="5" width="2.4" height="2.4" fill="#2496ED" />
  </svg>
);

export const AwsLogo: React.FC<LogoProps> = ({ className = "h-5 w-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M6.8 11.8C6.3 12.2 5.5 12.5 4.8 12.5C3.5 12.5 2.7 11.7 2.7 10.4C2.7 9 3.8 8.1 5.3 8.1C6 8.1 6.5 8.2 6.8 8.4V11.8ZM6.8 6.9C6.3 6.6 5.5 6.5 4.7 6.5C2.5 6.5 1 7.9 1 10.3C1 12.7 2.6 14.1 4.7 14.1C5.6 14.1 6.3 13.8 6.8 13.4V13.9H8.3V7.2H6.8V6.9Z"
      fill="#232F3E"
    />
    <path
      d="M10.8 13.9H12.3L13.7 8.3L15 13.9H16.5L18.4 7.2H16.9L15.8 12.2L14.4 7.2H13.1L11.7 12.2L10.6 7.2H9.1L10.8 13.9Z"
      fill="#232F3E"
    />
    <path
      d="M20.2 12.7C19.5 12.7 19.1 12.4 19.1 11.9C19.1 11.4 19.5 11.1 20.3 10.9L21.2 10.7C22.1 10.5 22.5 10 22.5 9.3C22.5 8.1 21.4 7.2 19.9 7.2C19 7.2 18.2 7.5 17.6 7.9L18.2 9.1C18.7 8.7 19.3 8.5 19.9 8.5C20.6 8.5 21 8.8 21 9.2C21 9.6 20.6 9.8 19.9 10L19 10.2C18 10.5 17.5 11.1 17.5 11.9C17.5 13.2 18.6 14.1 20.1 14.1C21 14.1 21.8 13.7 22.4 13.2L21.7 12.1C21.2 12.5 20.7 12.7 20.2 12.7Z"
      fill="#232F3E"
    />
    <path
      d="M21.5 17.2C18.6 19.4 14.5 20.5 10.5 20.5C6.3 20.5 2.8 19.1 0.5 16.8C0.3 16.6 0.5 16.3 0.8 16.5C4.2 18.8 8.1 20 12.2 20C15.8 20 19.4 18.9 22.2 16.7C22.5 16.5 22.8 16.9 21.5 17.2Z"
      fill="#FF9900"
    />
    <path
      d="M22.9 15.6C22.7 15.3 21.4 15.7 20.6 15.9C20.4 16 20.4 16.2 20.6 16.3C21.5 16.9 22.7 17.4 22.9 17.1C23.1 16.8 23.1 15.9 22.9 15.6Z"
      fill="#FF9900"
    />
  </svg>
);

export const FlutterLogo: React.FC<LogoProps> = ({ className = "h-5 w-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M14.5 2L5 11.5L8 14.5L20.5 2H14.5Z" fill="#02569B" />
    <path d="M14.5 12.5L9.5 17.5L12.5 20.5L20.5 12.5H14.5Z" fill="#0175C2" />
    <path d="M9.5 17.5L12.5 14.5L15.5 17.5L12.5 20.5L9.5 17.5Z" fill="#13B9FD" />
  </svg>
);

export const SwiftLogo: React.FC<LogoProps> = ({ className = "h-5 w-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#F05138" />
    <path
      d="M18.8 17.8C16.8 19.8 13.8 20.6 11.2 19.8C14.2 18.2 16.2 15.3 16.8 12.2C15.2 13.5 13.1 14.2 11 14.1C9.6 14 8.3 13.4 7.2 12.5C9.5 12.1 11.4 10.9 12.5 9.2C10.2 9.5 8.2 8.4 7.2 6.8C8.5 7.2 10.2 7.2 11.8 6.5C8.8 5.6 6.8 3.5 6.2 2C5.5 3.5 5.8 7.2 8.2 10.5C5.8 8.8 4.5 6.5 4.5 6.5C4.5 9.8 7.2 12.8 9.5 14.5C6.8 14.2 4.8 12.8 4.8 12.8C5.2 16.5 9.2 19.8 14.2 20.5C16.2 20.2 18.5 19.2 18.8 17.8Z"
      fill="#FFFFFF"
    />
  </svg>
);

export const LaravelLogo: React.FC<LogoProps> = ({ className = "h-5 w-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M8.5 3L2 7V17L8.5 21L15 17V12.5L13 11.2V15.5L8.5 18.2L4 15.5V8.5L8.5 5.8L13 8.5V10L15 11.2V7L8.5 3Z"
      fill="#FF2D20"
    />
    <path
      d="M15.5 7L22 11V17L15.5 21V19L20 16.2V12.2L15.5 9.5L11 12.2V14.5L9 13.2V11L15.5 7Z"
      fill="#FF2D20"
    />
  </svg>
);

export const FigmaLogo: React.FC<LogoProps> = ({ className = "h-5 w-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M8 2H12V8H8C6.3 8 5 6.7 5 5C5 3.3 6.3 2 8 2Z" fill="#F24E1E" />
    <path d="M12 2H16C17.7 2 19 3.3 19 5C19 6.7 17.7 8 16 8H12V2Z" fill="#FF7262" />
    <path d="M12 8H16C17.7 8 19 9.3 19 11C19 12.7 17.7 14 16 14H12V8Z" fill="#1ABCFE" />
    <path d="M8 8H12V14H8C6.3 14 5 12.7 5 11C5 9.3 6.3 8 8 8Z" fill="#A259FF" />
    <path d="M8 14H12V18C12 19.7 10.7 21 9 21C7.3 21 6 19.7 6 18C6 16.3 6.9 14.9 8 14Z" fill="#0ACF83" />
  </svg>
);

export const GraphQLLogo: React.FC<LogoProps> = ({ className = "h-5 w-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2L20.7 7V17L12 22L3.3 17V7L12 2Z"
      stroke="#E10098"
      strokeWidth="1.8"
      fill="none"
    />
    <circle cx="12" cy="2" r="2" fill="#E10098" />
    <circle cx="20.7" cy="7" r="2" fill="#E10098" />
    <circle cx="20.7" cy="17" r="2" fill="#E10098" />
    <circle cx="12" cy="22" r="2" fill="#E10098" />
    <circle cx="3.3" cy="17" r="2" fill="#E10098" />
    <circle cx="3.3" cy="7" r="2" fill="#E10098" />
    <path d="M12 2L12 22M3.3 7L20.7 17M3.3 17L20.7 7" stroke="#E10098" strokeWidth="1.2" />
  </svg>
);

export const RedisLogo: React.FC<LogoProps> = ({ className = "h-5 w-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 3L20 7.5L12 12L4 7.5L12 3Z"
      fill="#DC382D"
    />
    <path
      d="M4 10L12 14.5L20 10V12.5L12 17L4 12.5V10Z"
      fill="#B7281F"
    />
    <path
      d="M4 14.5L12 19L20 14.5V17L12 21.5L4 17V14.5Z"
      fill="#8F1B14"
    />
  </svg>
);

export const NestLogo: React.FC<LogoProps> = ({ className = "h-5 w-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2C8 2 4 5 4 10C4 14 6 17 8 20L12 22L16 20C18 17 20 14 20 10C20 5 16 2 12 2Z"
      fill="#E0234E"
    />
    <path
      d="M12 5C10 5 7 7 7 11C7 14 9 16 12 18C15 16 17 14 17 11C17 7 14 5 12 5Z"
      fill="#FFFFFF"
    />
  </svg>
);
