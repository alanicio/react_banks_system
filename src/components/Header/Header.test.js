import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DataRouteProvider,{DataRouteContext} from "../../context/DataRouteContext";
import Header from "./Header";

let bank = null;
let branch = null;
let employe = null;
let createEmploye = false;

const setBank  = jest.fn();
const setBranch = jest.fn();
const setEmploye = jest.fn();
const setCreateEmploye = jest.fn();

test('<Header/> Testing title on first render', () => {
  render(
    <DataRouteProvider >
      <Header />
    </DataRouteProvider>
  );

  const title = screen.getByTestId("title");
  const titleContent = title.textContent;
  
  const arrow = screen.queryByTestId("arrow");

  expect(titleContent).toBe("BANCOS");
  expect(arrow).not.toBeInTheDocument();
});


test('<Header/> Testing title after select Bank', () => {
  bank={ pk:1, name:"mockBank" }
  render(
    <DataRouteContext.Provider value={{
      bank,
      setBank,
      branch,
      setBranch,
      employe,
      setEmploye,
      createEmploye,
      setCreateEmploye,
    }}
    >
      <Header />
    </DataRouteContext.Provider>
  );

  const title = screen.getByTestId("title");
  const titleContent = title.textContent;
  
  const arrow = screen.queryByTestId("arrow");

  expect(titleContent).toBe("Sucursales de mockBank");
  expect(arrow).toBeInTheDocument();

});

test('<Header/> Testing title after select Branch', () => {
  bank={ pk:1, name:"mockBank" }
  branch={ pk:3, name:"mockBranch", bank:1 }
  render(
    <DataRouteContext.Provider value={{
      bank,
      setBank,
      branch,
      setBranch,
      employe,
      setEmploye,
      createEmploye,
      setCreateEmploye,
    }}
    >
      <Header />
    </DataRouteContext.Provider>
  );

  const title = screen.getByTestId("title");
  const titleContent = title.textContent;
  
  const arrow = screen.queryByTestId("arrow");

  expect(titleContent).toBe("Empleados de mockBank sucursal mockBranch");
  expect(arrow).toBeInTheDocument();
});

test('<Header/> Testing title form to add an employe', () => {
  bank={ pk:1, name:"mockBank" }
  branch={ pk:3, name:"mockBranch", bank:1 }
  createEmploye = true;
  render(
    <DataRouteContext.Provider value={{
      bank,
      setBank,
      branch,
      setBranch,
      employe,
      setEmploye,
      createEmploye,
      setCreateEmploye,
    }}
    >
      <Header />
    </DataRouteContext.Provider>
  );

  const title = screen.getByTestId("title");
  const titleContent = title.textContent;
  
  const arrow = screen.queryByTestId("arrow");

  expect(titleContent).toBe("Agregar empleado a mockBank sucursal mockBranch");
  expect(arrow).toBeInTheDocument();
});

test('<Header/> Testing title after select an employe', () => {
  bank={ pk:1, name:"mockBank" }
  branch={ pk:3, name:"mockBranch", bank:1 }
  employe={
    "id": 1,
    "name": "Mock",
    "middle_name": "Dummy",
    "last_name": "Test",
    "branch": 3
  };
  createEmploye = false;
  render(
    <DataRouteContext.Provider value={{
      bank,
      setBank,
      branch,
      setBranch,
      employe,
      setEmploye,
      createEmploye,
      setCreateEmploye,
    }}
    >
      <Header />
    </DataRouteContext.Provider>
  );

  const title = screen.getByTestId("title");
  const titleContent = title.textContent;
  
  const arrow = screen.queryByTestId("arrow");

  expect(titleContent).toBe("Mock Dummy Test, Empleado de mockBank sucursal mockBranch");
  expect(arrow).toBeInTheDocument();

});

