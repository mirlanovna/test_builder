import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import ListForm from "./componets/ListForm";

function App() {
  const { data } = useSelector((state) => state.data);
  console.log(data);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {data.map((item) => {
            return (
              <Route
                path={`/tests/${item.title.toLowerCase()}`}
                element={<ListForm key={item.id} {...item} />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
