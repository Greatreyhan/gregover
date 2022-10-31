import {Analysis,Condition,Control,History,Profile, Header, Navigation, Footer, Login} from "./components"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return(
    <BrowserRouter className="w-full">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/kontrol" element={<Control />} />
        <Route path="/analisis" element={<Analysis />} />
        <Route path="/data" element={<History />} />
        <Route path="/kondisi" element={<Condition />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;