import Header from "./components/Header";
import Gallery from "./components/Gallery";
// import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <div>
      <h1>
        <Header />
        <Gallery />
        {/* <Pagination /> */}
      </h1>
    </div>
  )
}
