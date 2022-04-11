import './base-layout.module.scss';

/* eslint-disable-next-line */
export interface BaseLayoutProps {
  children: React.ReactNode;
}

export function BaseLayout(props: BaseLayoutProps) {
  return (
    <div className="w-full h-screen bg-gray-100 dark:bg-gray-800">
      <div className="container h-full mx-auto flex flex-1 items-center justify-center">
        {props.children}
      </div>
    </div>
  );
}

export default BaseLayout;
