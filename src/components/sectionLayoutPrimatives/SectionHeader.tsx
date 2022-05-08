const SectionHeader: React.FC<{ children: string; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <h2
      className={`my-20 text-5xl font-semibold underline underline-offset-8 ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionHeader;
