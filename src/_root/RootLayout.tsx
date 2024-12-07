import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div>
        <div>
          {/* <Topbar />
          <LeftSidebar /> */}

          <section>
            <Outlet />
          </section>

          {/* <Bottombar /> */}
        </div>
      </div>
    </>
  );
};

export default RootLayout;
