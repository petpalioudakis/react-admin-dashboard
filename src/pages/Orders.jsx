import React from 'react';
import { GridComponent } from '@syncfusion/ej2-react-grids';
import { Header } from '../components';

const Orders = () => (
  <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Orders" />
    <GridComponent />
  </div>
);

export default Orders;
