type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.LegacyRef<HTMLDivElement>;
};

export default function Container({ children, className, style, ref }: Props) {
  return (
    <>
      <div
        style={style}
        ref={ref}
        className={`container px-16 4xl:px-40 m-auto max-w-7xl xl:max-w-[1600px] 4xl:max-w-[1920px] ${className}`}
      >
        {children}
      </div>
    </>
  );
}
