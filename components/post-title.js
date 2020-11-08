export default function PostTitle({ children }) {
  return (
    <h1 className="text-2xl font-title md:text-5xl lg:text-7xl ml-6 font-bold tracking-tighter leading-tight md:leading-none mb-2 mt-8 text-center md:text-left">
      {children}
    </h1>
  );
}
