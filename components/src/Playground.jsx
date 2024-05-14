import Button from "./Button";
import Table from "./Table";
import "./Playground.css";

const Playground = () => {
  const columnDefs = [
    { header: "Column 1", propertyName: "value1" },
    { header: "Column 2", propertyName: "value2", align: "center" },
    { header: "Column 3", propertyName: "value3", align: "right" },
  ];

  const data = [
    { value1: "One", value2: "Two", value3: "Three" },
    { value1: "Four", value2: "Five", value3: "Six" },
    { value1: "Seven", value2: "Eight", value3: "Nine" },
  ];

  return (
    <div className="playground">
      <h1>Component Playground</h1>
      <h2>Button</h2>
      <Button>
        Default Button
      </Button>
      <Button type="link">
        Link Button
      </Button>
      <h2>Display Table</h2>
      <Table
        columns={columnDefs}
        data={data}
      />
      <h2>CRUD Table</h2>
      <Table
        allowCreate
        allowDelete
        allowUpdate
        columns={columnDefs}
        data={data}
      />
    </div>
  );
};

export default Playground;
