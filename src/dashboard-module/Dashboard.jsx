import { Outlet } from "react-router-dom";
import { NavBar } from "../fragment-template/NavBar";
import { SideBar } from "../fragment-template/SideBar";

// import { FooterFragment } from "../fragment-template/Footer";

export function Dashboard() {
  return (
    <>
      <NavBar />

      <div className="flex items-start pt-16">
        <SideBar />

        <main className="relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900 lg:ml-64">
          <Outlet />
        </main>
		
      </div>
    </>
  );
}
