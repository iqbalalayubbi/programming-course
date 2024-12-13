const LabelRounded = ({ label }: { label: string }) => {
  return (
    <span className={`bg-secondary text-white px-3 py-1 rounded-full`}>
      {label}
    </span>
  );
};

export { LabelRounded };
