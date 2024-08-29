interface HeadingProps {
  title: string;
  description: string;
}

export const DashboardHeading = ({ title, description }: HeadingProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-anton text-5xl uppercase">{title}</h1>
      <span className="text-sm text-muted-foreground">{description}</span>
    </div>
  );
};
