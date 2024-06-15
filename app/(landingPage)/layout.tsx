import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-20 sm:pt-32 md:pt-40">{children}</main>
    </div>
  );
};

export default MarketingLayout;
