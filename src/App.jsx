import { Outlet } from "react-router-dom";
import "./App.css";
import DataFetcher from "./hooks/DataFetcher";
import DataContext from "./utils/DataContext";
import PromoBar from "./components/promoBar/PromoBar";
import Navbar from "./components/navbar/Navbar";
import Footer1 from "./components/footer/Footer1";
import ScrollTop from "./components/ScrollTop";
import ScrollTopArrow from "./components/ScrollTopArrow";

function App() {
  const { data: categoryData, loading: categoryLoading } = DataFetcher(
    "https://dummyjson.com/products/category-list"
  );
  const { data: productData, loading: productLoading } = DataFetcher(
    "https://dummyjson.com/products/category/groceries"
  );

  return (
    <div>
      <DataContext.Provider
        value={{
          categoryData,
          categoryLoading,
          productData,
          productLoading,
        }}
      >
        <ScrollTop/>
        <ScrollTopArrow/>
        <PromoBar />
        <Navbar />
        <Outlet />
        <Footer1 />
      </DataContext.Provider>
    </div>
  );
}

export default App;
