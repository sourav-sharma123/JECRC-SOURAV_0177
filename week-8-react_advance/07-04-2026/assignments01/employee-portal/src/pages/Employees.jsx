import Navbar from "../components/Navbar";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

export default function Employees() {
  return (
    <>
      <Navbar />
      <EmployeeForm />
      <EmployeeList />
    </>
  );
}