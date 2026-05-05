import Child from "./Child";

function PropsDemo() {
  const name = "rohan";
  const age = 20;

  return (
    <div>
      <h2>Props Example</h2>
      <Child name={name} age={age} />
    </div>
  );
}

export default PropsDemo;