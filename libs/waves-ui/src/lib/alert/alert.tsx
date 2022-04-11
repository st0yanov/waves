/* eslint-disable-next-line */
export interface AlertProps {
  variant?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}

export function Alert({ variant = 'success', showIcon = true, children }: AlertProps) {
  const styleClasses: string[] = [];
  let Icon;

  const addClasses = (style: string[]) => {
    styleClasses.push(...style);
  }

  switch (variant) {
    case 'success':
    default:
      addClasses(['border-green-600', 'text-green-600']);
      if (showIcon) {
        Icon = require(`@heroicons/react/outline/InformationCircleIcon`);
      }
      break;
  }

  const styleClassesToAppend = styleClasses.join(' ');

  return (
    <div className={`flex items-center border-l-4 p-2 ${styleClassesToAppend}`} role="alert">
        { showIcon && <Icon className="w-5 h-5" /> }
        <p className="pl-2">
            { children }
        </p>
    </div>
  );
}

export default Alert;
