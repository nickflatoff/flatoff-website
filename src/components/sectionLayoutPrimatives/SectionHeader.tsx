const SectionHeader: React.FC<{ children: string; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <h2
      className={`text-4xl font-semibold my-20 underline underline-offset-8 ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionHeader;
