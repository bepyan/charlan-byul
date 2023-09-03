import { cn } from '~/libs/utils';

export interface TextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {}

export default function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        'flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm ring-gray-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}
