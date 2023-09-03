import { cn } from '~/libs/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        className,
        'h-10 px-4 py-2 rounded-md text-sm font-medium text-white bg-gray-900 active:bg-gray-800 transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
      )}
    />
  );
}
