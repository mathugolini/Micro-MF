<<<<<<< HEAD
import FooterComponent from "./components/FooterComponent";


function App() {
  return (
    <>
      <FooterComponent />
    </>
  );
}

export default App;
=======
const FooterComponent = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between">
        <span className="text-xs m-2 text-center">
          © 2023 All rights reserved. Developed by Aline and Matheus.
        </span>

        <h1>
          <span className="text-teal-400">Nav</span>
        </h1>
      </div>
    </footer>
  );
};

export default FooterComponent;
>>>>>>> 7dd31000a343ef3c345ed111ecdbadc5cb678353
