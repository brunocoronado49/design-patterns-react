import { Product } from "./Product";
import { filterItems } from "../utils/filterItems";

export const ProductList = ({ query, dataset }) => {
    const items = filterItems(query, dataset);

    return (
        <div>
            {items.map((product) => (
                <Product key={product.id} title={product.title} />
            ))}
        </div>
    );
};
