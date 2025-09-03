// components/ui/SectionHeading.tsx
interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-8 ${className}`}>
      {children}
      <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mt-4 rounded-full"></div>
    </h2>
  );
}