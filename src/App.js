import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseTracker from "./components/ExpenseTracker";

function App() {
  return (
    <div className="container">
      <h1 className="text-center margin-t">Expense Tracker - Basic</h1>
      <ExpenseTracker />
    </div>
  );
}

export default App;
