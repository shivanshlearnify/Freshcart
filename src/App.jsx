import { Outlet } from "react-router-dom";
import "./App.css";
import DataFetcher from "./hooks/DataFetcher";
import DataContext from "./utils/DataContext";
import PromoBar from "./components/promoBar/PromoBar";
import Navbar from "./components/navbar/Navbar";
import Footer1 from "./components/footer/Footer1";
import ScrollTop from "./components/ScrollTop";
import ScrollTopArrow from "./components/ScrollTopArrow";
import { Provider } from "react-redux";
import store from "./utils/store";
import { Toaster } from "react-hot-toast";

function App() {
  const { data: categoryData, loading: categoryLoading } = DataFetcher(
    "https://dummyjson.com/products/category-list"
  );
  const { data: productData, loading: productLoading } = DataFetcher(
    "https://dummyjson.com/products/category/groceries"
  );

  return (
    <div>
      <Provider store={store}>
        <DataContext.Provider
          value={{
            categoryData,
            categoryLoading,
            productData,
            productLoading,
          }}
        >
          <ScrollTop />
          <ScrollTopArrow />
          <PromoBar />
          <Toaster/>
          <Navbar />
          <Outlet />
          <Footer1 />
        </DataContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
