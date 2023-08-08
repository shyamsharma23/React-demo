import { FormEvent, useRef, useState } from "react";
import Display from "./components/Display";

function App() {
  const obj: any = "Hello World";

  const nameRef = useRef<any>();

  const [data, setData] = useState<any>("World"); //useState hook
  const handleSbmit = () => {
    console.log("Changed the heading");
    console.log(data);
    setData("Hello World");
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(nameRef.current.value);
    setData(nameRef.current.value);
  };
  return (
    <>
      <h1>{`Hello ${data}`}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} />
        <button className="btn btn-success ms-4">Change Heading</button>
      </form>
      <Display onSubmit={handleSbmit} value={obj} />
    </>
  );
}

export default App;
