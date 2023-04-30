import "./ShopSinglePage.css";
import { Banner } from "./components/Banner/Banner";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";
import { ProductInformation } from "./components/ProductInformation/ProductInformation";
import { RelatedProduct } from "./components/RelatedProduct/RelatedProduct";

export const ShopSinglePage = () => {
    return (
        <>
       <Banner />
       <ProductDetails />
       <ProductInformation />
       <RelatedProduct />
        </>
    );
}