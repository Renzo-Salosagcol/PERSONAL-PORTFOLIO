import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "@/pages/home"
import { NotFound } from "@/pages/notFound"

function App() {
  const [count, setCount] = useState(0)

  return 
    <>
      <BrowserRouter>
        <Routes>
          <Route indexelement={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
}

export default App
