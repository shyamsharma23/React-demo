import axios from "axios";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import Display from "./components/Display";

const App = () => {
  const [data, setData] = useState<any>([]);
  const nameRef = useRef<any>();
  let obj: any;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(nameRef.current.value);
    obj = nameRef.current.value;
    setData(obj);
  };
  useEffect(() => {
    const url = "http://localhost:5000/api/v1/todos";
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef} />
        <button className="btn btn-primary">Submit</button>
      </form>
      <h1>{`Hello, welcome ${data[0]?.todo}`}</h1>
      {data.map((item: any) => (
        <Display value={item} key={item.todoId} />
      ))}
    </div>
  );
};

export default App;
