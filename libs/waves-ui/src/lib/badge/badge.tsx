/* eslint-disable-next-line */
export interface BadgeProps {
  variant?: string;
  ping?: boolean;
  children?: React.ReactNode;
}

export function Badge({ variant, ping = false, children }: BadgeProps) {
  const styleClasses: string[] = [];
  const pingClasses: string[] = [];

  const addClasses = (style: string[], ping: string[]) => {
    styleClasses.push(...style);

    if (ping) {
      pingClasses.push(...ping);
    }
  }

  switch (variant) {
    case 'success':
      addClasses(['bg-green-500'], ['bg-green-400']);
      break;
    case 'warning':
      addClasses(['bg-yellow-500'], ['bg-yellow-400']);
      break;
    case 'danger':
    default:
      addClasses(['bg-red-500'], ['bg-red-400']);
      break;
  }

  const styleClassesToAppend = styleClasses.join(' ');
  const pingStyleClassesToAppend = pingClasses.join(' ');

  return (
    <span className="flex relative justify-center items-center flex-shrink-0">
      <span className={`inline-flex rounded-full h-6 px-3 justify-center items-center text-sm text-white font-bold z-10 ${styleClassesToAppend}`}>
        { children }
      </span>
      { ping && <span className={`animate-ping absolute inline-flex h-2/3 w-2/3 rounded-full opacity-75 z-0 ${pingStyleClassesToAppend}`} /> }
    </span>
  );
}

export default Badge;
