import './App.css';
import Product from "./components/product"

function App() {
    const products = [
      {
        id: 1,
        name: 'Iphone 13',
        price: 999,
        category: 'Smartphone',
        image: 'https://via.placeholder.com/200x200',
      },
      {
        id: 2,
        name: 'Ipad Pro',
        price: 799,
        category: 'Tablet',
        image: 'https://via.placeholder.com/200x200',
      },
      {
        id: 3,
        name: 'Macbook Pro',
        price: 2999,
        category: 'Laptop',
        image: 'https://via.placeholder.com/200x200',
      },
      {
        id: 4,
        name: 'Apple Watch',
        price: 299,
        category: 'Watch',
        image: 'https://via.placeholder.com/200x200',
      },
    ];
    return (
      <div className="App">
        <Product product={products[0]}/>
      </div>
  );
}

export default App;
