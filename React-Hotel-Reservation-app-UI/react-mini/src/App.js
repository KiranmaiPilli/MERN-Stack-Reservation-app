//import React from 'react';
//import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";


// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from 'react-router-dom';

// import { Home } from './pages/Home/Home';
// import { List } from './pages/list/List';
// import { Hotel } from './pages/hotel/Hotel';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/hotels" element={<List />} />
//         <Route path="/hotels/:id" element={<Hotel />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


//App.jsx
import React from 'react';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
