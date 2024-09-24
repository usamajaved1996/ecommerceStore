import { useEffect, useState } from "react";
import datas from "../../data/products.json";
import SectionStyleFour from "../Helpers/SectionStyleFour";
import SectionStyleOne from "../Helpers/SectionStyleOne";
import SectionStyleThree from "../Helpers/SectionStyleThree";
import SectionStyleTwo from "../Helpers/SectionStyleTwo";
import ViewMoreTitle from "../Helpers/ViewMoreTitle";
import Layout from "../Partials/Layout";
// import Ads from "./Ads";
import Banner from "./Banner";
import BestSellers from "./BestSellers";
import BrandSection from "./BrandSection";
import CampaignCountDown from "./CampaignCountDown";
import ProductsAds from "./ProductsAds";
import BASE_URL from "../../Network/endPoint.js";
import axios from 'axios';

export default function Home() {
  
  const [products, setProduct] = useState([]);
  const [brands , setBrands] = useState([]);

  useEffect(() => {
    getProduct();
    getBrand();
  }, []);
  const getProduct = async () => {
    try {
      const res = await axios.get(BASE_URL + 'products/getProducts');
      let response = res.data;
      console.log('response api 2', response)
      setProduct(response)

    } catch (error) {
      console.log('err', error)
    }
  }
  const getBrand = async () => {
    try {
      const res = await axios.get(BASE_URL + 'products/getBrands');
      let response = res.data;
      console.log('response getBrands 2', response)
      const brandNames = response.map(brand => brand.name);
      console.log(brandNames);
      setBrands(brandNames)


    } catch (error) {
      console.log('err', error)
    }
  }
  // const [ads, setAds] = useState(false);
  // const adsHandle = () => {
  //   setAds(false);
  // };
  // useEffect(() => gs
  // {
  //   setAds(true);
  // }, []);
  return (

    <>

      <Layout>
        {/* {ads && <Ads handler={adsHandle} />} */}
        <div className="btn w-5 h-5 "></div>
        <Banner className="banner-wrapper mb-[60px]" />
        <SectionStyleOne
          products={products}
          brands={brands}
          categoryTitle="Mobile & Tablet"
          sectionTitle="Gamer World"
          seeMoreUrl="/all-products"
          className="category-products mb-[60px]"
        />
        <BrandSection
          sectionTitle="Shop by Brand"
          className="brand-section-wrapper mb-[60px]"
        />
        <CampaignCountDown
          className="mb-[60px]"
          lastDate="2023-10-04 4:00:00"
        />
        <ViewMoreTitle
          className="top-selling-product mb-[60px]"
          seeMoreUrl="/all-products"
          categoryTitle="Top Selling Products"
        >
          <SectionStyleTwo products={products.slice(3, products.length)} />
        </ViewMoreTitle>
        <ViewMoreTitle
          className="best-sallers-section mb-[60px]"
          seeMoreUrl="/sallers"
          categoryTitle="Best Saller"
        >
          <BestSellers />
        </ViewMoreTitle>
        <ProductsAds
          ads={[
            `${import.meta.env.VITE_PUBLIC_URL}/assets/images/ads-1.png`,
            `${import.meta.env.VITE_PUBLIC_URL}/assets/images/ads-2.png`,
          ]}
          sectionHeight="sm:h-[295px] h-full"
          className="products-ads-section mb-[60px]"
        />
        <SectionStyleOne
          categoryBackground={`${
            import.meta.env.VITE_PUBLIC_URL
          }/assets/images/section-category-2.jpg`}
          products={products.slice(4, products.length)}
          brands={brands}
          categoryTitle="Electronics"
          sectionTitle="Popular Sales"
          seeMoreUrl="/all-products"
          className="category-products mb-[60px]"
        />
        <ProductsAds
          ads={[`${import.meta.env.VITE_PUBLIC_URL}/assets/images/ads-3.png`]}
          className="products-ads-section mb-[60px]"
        />
        <SectionStyleThree
          products={products}
          sectionTitle="New Arrivals"
          seeMoreUrl="/all-products"
          className="new-products mb-[60px]"
        />
        <ProductsAds
          sectionHeight="164"
          ads={[`${import.meta.env.VITE_PUBLIC_URL}assets/images/ads-4.png`]}
          className="products-ads-section mb-[60px]"
        />
        <SectionStyleFour
          products={products}
          sectionTitle="Popular Sales"
          seeMoreUrl="/all-products"
          className="category-products mb-[60px]"
        />
      </Layout>
    </>
  );
}
