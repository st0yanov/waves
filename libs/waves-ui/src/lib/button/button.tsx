/* eslint-disable-next-line */
export interface ButtonProps {
  rounded?: boolean;
  color?: string;
  disabled?: boolean;
  submit?: boolean;
  onClick?: () => void;
  icon?: JSX.Element;
  children?: React.ReactNode;
}

const colors = {
  white: 'bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500',
  gray: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200',
  red: 'bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200',
  yellow: 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 focus:ring-offset-yellow-200',
  green: 'bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200',
  blue: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200',
  indigo: 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200',
  purple: 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200',
  pink: 'bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200',
} as {
  [key: string]: string;
};

export function Button({ rounded, color = 'gray', disabled, submit, onClick, icon, children }: ButtonProps) {
  const styleClasses = [];

  styleClasses.push(rounded ? 'rounded-full' : 'rounded-lg');
  styleClasses.push(colors[color]);
  styleClasses.push(disabled ? 'opacity-70 cursor-not-allowed' : '');
  styleClasses.push(icon ? 'flex justify-center items-center' : '');

  const styleClassesToAppend = styleClasses.join(' ');

  return (
    <button
      type={submit ? 'submit' : 'button'}
      disabled={disabled}
      className={`py-2 px-4 w-full transition ease-in duration-200 text-white text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${styleClassesToAppend}`}
      onClick={onClick}>
        {icon && icon}
        {children}
    </button>
  );
}

export default Button;
