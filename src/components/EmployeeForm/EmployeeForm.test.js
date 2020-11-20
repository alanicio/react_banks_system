import React from "react";
import { render, screen, waitFor, } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EmployeeForm from "./EmployeeForm";
import userEvent from "@testing-library/user-event";
import mockAxios from "axios";

const setCreateEmploye = jest.fn();
const branchId = 2;

test('<EmployeeForm/> testing validation in form', async () => {

  mockAxios.post = jest.fn().mockResolvedValue({
    data: {}
  });

  render(
    <EmployeeForm setCreateEmploye={setCreateEmploye} branchId={branchId} />
  );

  const name = screen.getByTestId("name");
  const middleName = screen.getByTestId("middle_name");
  const lastName = screen.getByTestId("last_name");
  const submit = screen.getByTestId("submit");
  let alert = screen.queryByTestId("alert");

  expect(alert).not.toBeInTheDocument();

  userEvent.click(submit);
  alert = screen.getByTestId("alert");
  expect(alert).toBeInTheDocument();

  userEvent.type(name, "Dummy");
  userEvent.type(middleName, "test");

  userEvent.click(submit);
  expect(alert).toBeInTheDocument();

  userEvent.type(lastName, "testing");

  userEvent.click(submit);
  alert = screen.queryByTestId("alert");
  await waitFor(() => expect(mockAxios.post).toHaveBeenCalledTimes(1));
  expect(alert).not.toBeInTheDocument();
  expect(setCreateEmploye).toHaveBeenCalledTimes(1);
})
