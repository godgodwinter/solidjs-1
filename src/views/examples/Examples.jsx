import { Icon } from "solid-heroicons";
import { arrowLeft } from "solid-heroicons/solid";
import { arrowRight } from "solid-heroicons/outline";
import { SimpleTable } from "solid-simple-table";
// import type { SortDirection } from "solid-simple-table";
import "./styleTable.css";
// import "./styleTable.less";
const rows = [
  {
    file: "C:/a",
    message: "Lorem ipsum dolor sit amet, consectetur",
    severity: "error",
  },
  {
    file: "C:/b",
    message: "Vivamus tincidunt ligula ut ligula laoreet faucibus",
    severity: "warning",
  },
  {
    file: "C:/c",
    message:
      "Proin tincidunt justo nulla, sit amet accumsan lectus pretium vel",
    severity: "info",
  },
  {
    file: "C:/d",
    message: "Cras faucibus eget ante ut consectetur",
    severity: "error",
  },
];

const Examples = () => {
  console.log("ini examples");
  return (
    <>
      <SimpleTable rows={rows} class="table border-2" />
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Icon path={arrowLeft} class="h-6 w-6" />
        tes
      </div>
    </>
  );
};

export default Examples;
