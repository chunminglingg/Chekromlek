import SideLeft from "@/components/Molecules/SideLeft/SideLeft";

export const Sidebar = () => {
  return (
    <>
      <aside className="fixed top-5 left-5 z-30 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 flex flex-col gap-4 ">
        <SideLeft />
      </aside>
    </>
  );
};
