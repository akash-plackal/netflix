import Nav from "./components/Nav";
import Features from "./components/Features";
import List from "./components/List";
// import Register from "./pages/Register";

const App = () => {
  return (
    <div className="bg-zinc-900 font-roboto">
      <div className="bg-hero h-screen bg-cover relative">
        <Nav />
        <Features />
      </div>
      <List />
      <List />
      <List />
    </div>
  );
};

export default App;
