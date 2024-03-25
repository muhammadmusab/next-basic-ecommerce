import { Fragment } from "react";
// import Columns from "@/components/ui/data-table/columns";
import { Order, columns } from "@/components/account/orders/order-columns";
import { DataTable } from "@/components/ui/data-table/data-table";
const Orders = () => {
  // Fetch data from your API here.
  const data: Order[] = [
    {
      id: "728ed52f",
      total: 150,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      orderNumber: 1012,
      orderStatus:'pending',
      paymentStatus:'success',
    },
    {
      id: "489e1d42",
      total: 160,
      date: new Date('2024-03-03').toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      orderNumber: 1011,
      orderStatus:'success',
      paymentStatus:'success',
    },
  ];

  return (
    <Fragment>
      <DataTable columns={columns} data={data} />
    </Fragment>
  );
};

export default Orders;
