import { createContext } from "react";

const DataContext = createContext({
  data: null,
  loading: false,
});

export default DataContext;
