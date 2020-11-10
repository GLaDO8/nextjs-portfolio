export default function PostTitle({ children }) {
  return (
    <h1 className="text-3xl font-title md:text-5xl lg:text-7xl ml-6 mr-24 font-bold tracking-tighter leading-tight md:leading-none mb-2 md:text-left">
      {children}
    </h1>
  );
}
