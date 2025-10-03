import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "@/pages/home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
