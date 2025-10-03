import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { NotFound } from "./pages/notFound"

function App() {
  return (
    <>test
      <BrowserRouter>
        <Routes>
          <Route indexelement={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
