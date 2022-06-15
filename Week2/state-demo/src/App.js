import './App.css';
import Product from "./components/product"

function App() {
    const products = [
      {
        id: 1,
        name: 'Iphone 13',
        price: 999,
        category: 'Smartphone',
        image: 'http://via.placeholder.com/200x400',
      },
      {
        id: 2,
        name: 'Ipad Pro',
        price: 799,
        category: 'Tablet',
        image: 'http://via.placeholder.com/200x400',
      },
      {
        id: 3,
        name: 'Macbook Pro',
        price: 2999,
        category: 'Laptop',
        image: 'http://via.placeholder.com/200x400',
      },
      {
        id: 4,
        name: 'Apple Watch',
        price: 299,
        category: 'Watch',
        image: 'http://via.placeholder.com/200x400',
      },
    ];
    return (
      <div className="App">
        <Product product={products[0]}/>
      </div>
  );
}

export default App;
