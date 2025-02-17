import Header from "./components/header";
import Home from "./components/home";


export default function Component() {
  return (
    <div>
      <Header />
      <div className="px-10">
        <Home />
      </div>
    </div>
  )
}