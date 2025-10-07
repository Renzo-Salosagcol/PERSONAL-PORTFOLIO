import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { NotFound } from "./pages/notFound"
import { Toast } from "radix-ui"

function App() {
  return (
    <>
      <Toast.Provider />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
