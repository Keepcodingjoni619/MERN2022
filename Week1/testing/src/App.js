import logo from './logo.svg';
import './App.css';


const Header = (props) => {
  const { title, subtitle } = props;
  return (
    <>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </>
  );
};


const App = () => {
  return (
    <div
      style={{
        color: "red",
        backgroundColor: "blue",
      }}
    >
      <Header title={"Hello"} subtitle={"World"} />
      <Header title={"Hello"} subtitle={"Johnnie"} />
      <Header title={"Hello"} subtitle={"Ryan"} />
    </div>  
  );
}
export default App;
  