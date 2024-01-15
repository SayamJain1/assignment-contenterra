import { useEffect, useState } from "react";
import Card from "./component/Card";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/reactjs.json")
      .then((res) => res.json())
      .then((data) => {
        const {
          data: { children },
        } = data;
        return setData(children);
      });
  }, []);

  return (
    <div className="p-4 min-w-screen ">
      <Card data={data} />
    </div>
  );
}
