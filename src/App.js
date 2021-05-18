import "./App.css";
import Availability from "./Components/Availability";

function App() {
  return (
    <div>
      <header className="header">
        <img src="/joovence-logo.png" className="logo" alt="logo" />
        <h1>Bookings</h1>
      </header>
      <body>
        <Availability />
      </body>
    </div>
  );
}

export default App;
