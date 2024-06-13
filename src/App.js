import React,{ lazy,Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
const Main =lazy(()=>import("./routers/main/main")) 

function App() {
  return (
<Router>
  <Suspense fallback={<div> Loading...</div>}>
   <Routes>
    <Route path="/greencard" element={<Main/>}/>
   </Routes>
  </Suspense>
</Router>
  );
}

export default App;
