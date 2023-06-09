import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

export default function Home({ toggleMode }) {
  return (
    <>
      <div className="w-screen h-screen">
        <Sidebar mode={toggleMode} />
      </div>
    </>
  );
}

// api key: 3deaa2f5f8e64ccfa91064d33d80d2f5
// base url: https://api.rawg.io/api
