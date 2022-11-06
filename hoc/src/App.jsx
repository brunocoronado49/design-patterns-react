import { ProductList } from "./components/ProductList";
import { TodoList } from "./components/TodoList";
import { withSearch } from "./components/Search";
import { products, todos } from "./data/dataset";
import "./App.css";

/// HOC (High Order Component)
/// Su funcionamiento se trata sobre tener un componente A
/// el cual lo pasamos como parámetro a una función y nos regresa otro componente
/// Ejemplo en app de busqueda.

const ProductListWithSearch = withSearch(ProductList, products);
const TodoListWithSearch = withSearch(TodoList, todos);

function App() {
    return (
        <div className="App">
            <h1>HCO</h1>
            <ProductListWithSearch />
            <TodoListWithSearch />
        </div>
    );
}

export default App;
