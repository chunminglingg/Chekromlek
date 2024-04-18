import SideLeft from "@/components/Molecules/SideLeft/SideLeft";

export const Sidebar = () => {
  return (
    <>
      <aside className="fixed top-0 left-0 z-30 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 ">
        <SideLeft />
      </aside>
    </>
  );
};
