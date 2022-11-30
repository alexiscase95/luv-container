import React from "react";
import ReactDOM from "react-dom";
import Home from "./routes/home/home.component";
import "./index.css";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AddCharge from "./routes/add-charge/add-charge";
import SignIn from "./routes/sign-in/sign-in";

const Navigation =
  React.lazy(() =>
    import('shared_components/navigation')
  );

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<React.Suspense fallback='Loading Button'>
                <Navigation />
            </React.Suspense>}>
      <Route index element={<Home />} />
      <Route path='add-charge' element={<AddCharge />} />
      <Route path='sign-in' element={<SignIn />} />
        {/* 
        <Route path='checkout' element={<Checkout />} /> */}
      </Route>
    </Routes>
    </Router>
  );
};
  // <div className="container">
  //   <React.Suspense fallback='Loading Button'>
  //     <MFE1_Button />
  //   </React.Suspense>
  //   <div>Name: luv-container</div>
  //   <div>Framework: react</div>
  //   <div>Language: JavaScript</div>
  //   <div>CSS: Empty CSS</div>
  // </div>

ReactDOM.render(<App />, document.getElementById("app"));
