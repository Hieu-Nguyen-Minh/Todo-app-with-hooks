import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from './components/ThemeToggle';
import TodoContextProvider from "./contexts/TodoContext";
import AuthContextProvider from "./contexts/AuthContext";

const { default: NavBar } = require("./components/NavBar");
const { default: Todos } = require("./components/Todos");

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <TodoContextProvider>
            <Todos />
          </TodoContextProvider>
        </AuthContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;