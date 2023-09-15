interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  ref?: React.LegacyRef<HTMLDivElement>;
}

const BackgroundPhone = ({ children, className, id, ref }: Props) => {
  return (
    <div ref={ref} className={`${className}`} id={id}>
      {children}
    </div>
  );
};

export default BackgroundPhone;
