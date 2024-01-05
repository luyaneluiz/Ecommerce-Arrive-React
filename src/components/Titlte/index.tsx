interface TitleProps {
  text: string;
}

export function Title({ text }: TitleProps) {
  return (
    <div className="w-full border-b mb-4 py-3">
      <h3 className="font-bold sm:text-lg">{text}</h3>
    </div>
  );
}
