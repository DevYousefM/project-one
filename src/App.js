import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import ClientDetails from "./components/clientDetails";
import Clients from "./components/clients";
import ClientsProjects from "./components/clientsProjects";
import ExpectedParts from "./components/expectedParts";
import Home from "./components/home";
import InventoryList from "./components/inventoryList";
import Invoices from "./components/invoices";
import Issueables from "./components/Issueables";
import JopCards from "./components/jopCards";
import Navbar from "./components/navbar";
import Payments from "./components/payments";
import PendingTasks from "./components/pendingTasks";
import ClientProfile from "./components/profile";
import Projects from "./components/projects";
import Recieveables from "./components/recieveables";
import Sidebar from "./components/sidebar";
import Team from "./components/teams";
import UnpaidParts from "./components/unpaidParts";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <div className=" bg-gray-100 w-4/5 p-8 float-right lg:w-full">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/clients/profile" element={<ClientProfile />} />
              <Route
                path="/clients/profile/projects"
                element={<ClientsProjects />}
              />
              <Route path="/clients/profile/jopcards" element={<JopCards />} />
              <Route path="/clients/profile/invoices" element={<Invoices />} />
              <Route path="/clients/profile/payments" element={<Payments />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/pendingtasks" element={<PendingTasks />} />
              <Route path="/expected-parts" element={<ExpectedParts />} />
              <Route path="/unpaid-parts" element={<UnpaidParts />} />
              <Route path="/team" element={<Team />} />
              <Route path="/inventory-list" element={<InventoryList />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
