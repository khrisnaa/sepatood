const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-slate-200">
      {children}
    </main>
  );
};
export default Layout;
