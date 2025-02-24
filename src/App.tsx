import React from 'react';
import logo from './logo.svg';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import { ColDef } from 'ag-grid-community';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import './App.css';

type CarType = {
  make: string;
  model: string;
  price: number;
  electric: boolean;
};


function App(){
  const rowData: CarType[] = [
    { 
      make: "Tesla", 
      model: "Model Y", 
      price: 64950, 
      electric: true 
    },
    { 
      make: "Ford", 
      model: "F-Series", 
      price: 33850, 
      electric: false 
    },
    { 
      make: "Toyota", 
      model: "Corolla", 
      price: 29600, 
      electric: false },
  ];

  const colDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }];

  return (
    <div 
      className={"ag-theme-quartz-dark"} 
      style={{ height: 500}}
    >
      <AgGridReact 
        rowData={rowData}
        columnDefs={colDefs}
      />
    </div>
  );
}

export default App;
// Render GridExample
