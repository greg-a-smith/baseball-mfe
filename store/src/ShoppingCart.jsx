import Button from "uiComponents/Button";
import Table from "uiComponents/Table";
import "./ShoppingCart.css";

const items = [
  { desc: "Signed home jersey", cost: 125.00, qty: 1 },
  { desc: "Bobblehead", cost: 19.99, qty: 1 },
];

const ShoppingCart = () => {
  const columnDefs = [
    { header: "Description", propertyName: "desc" },
    { header: "Quantity", propertyName: "qty", align: "center" },
    { header: "Cost", propertyName: "cost", align: "right" },
  ];

  return (
    <>
    <div className="app-header">
      Team Store
    </div>
    <div className="app-body">
      <h1>Shopping Cart</h1>
      <Table
        allowDelete
        allowUpdate
        columns={columnDefs}
        data={items}
      />
      <br />
      <br />
      <Button>Checkout</Button>
    </div>
    </>
  );
};

export default ShoppingCart;
