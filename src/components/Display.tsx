import { FormEvent, useRef } from "react";
import NavBar from "./NavBar";

const Display = (props: any) => {
  const nameRef = useRef<any>();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(nameRef.current.value);
  }

  return (
    <div>
      <h1></h1>
      <NavBar />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
        mollitia odit? Dolore, dolorum quibusdam cum, ipsam placeat nam
        excepturi temporibus debitis totam consectetur eveniet ipsa harum.
        Obcaecati illum repudiandae natus!
      </p>
      <button className="btn btn-primary" onClick={props.onSubmit}>
        Change Heading
      </button>

      <form className="form-control mt-5" onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label">
          Name :
        </label>
        <input type="text" id="name" ref={nameRef} />
        <button type="submit" className="btn btn-info ms-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Display;
