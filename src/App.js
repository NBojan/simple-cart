import CartContainer from "./CartContainer";
import { useGlobalContext } from "./context";
import Navbar from "./Navbar";

function App() {
  const { loading, err, data } = useGlobalContext();
  
  return (
    <div className="App">
      {loading && 
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      }
      {err && 
        <div className="loading">
          <h1>{err}</h1>
        </div>
      }
      {data && 
        <>
          <Navbar />
          <CartContainer />
        </>
      }
    </div>
  ) 
}

export default App;

// if(loading){
  //   return (
  //     <div className="loading">
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }
  // else {
  //   return (
  //     <div className="App">
  //       <Navbar />
  //       <CartContainer />
  //     </div>
  //   );
  // }