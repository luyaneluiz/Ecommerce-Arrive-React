// types
interface CounterBlockProps {
  value: number;
  title: string;
}

export function CounterBlock({ value, title }: CounterBlockProps) {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 w-14 h-14 text-center rounded-lg p-1">
      <h4 className="font-bold">{value}</h4>
      <p className="uppercase text-xs">{title}</p>
    </div>
  );
}
