
type LoaderProps = {
    className?: string;
}
export function Loader({className = ""}: LoaderProps)  {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="w-10 h-10 border-4 border-t-transparent border-slate-900 dark:border-t-transparent dark:border-amber-50 rounded-full animate-spin"></div>
      </div>
    );
}