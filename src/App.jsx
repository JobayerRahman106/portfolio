import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage"
import CommonLayout from "./components/CommonLayout";
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route> 
      </Routes>    
    </>
  )
}

export default App
