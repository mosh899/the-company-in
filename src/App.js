import "./App.css";
import { TheCompanyIn } from "./components";
import { CompanyProvider } from "./contexts/CompanyContext";
function App() {
  return (
    <div className="App">
      <CompanyProvider>
        <TheCompanyIn />
      </CompanyProvider>
    </div>
  );
}

export default App;
