import "./HomePage.css";
import { About } from "./components/About/About";
import { Banner } from "./components/Banner/Banner";
import { Blog } from "./components/Blog/Blog";
import { Gallery } from "./components/Gallery/Gallery";
import { Offer } from "./components/Offer/Offer";
import { OfferBanner } from "./components/OfferBanner/OfferBanner";
import { Shop } from "./components/Shop/Shop";
import { Testimonial } from "./components/Testimonial/Testimonial";
import { WhoWeAre } from "./components/WhoWeAre/WhoWeAre";
export const HomePage = () => {
    return (
        <>
        <Banner />
        <OfferBanner />
        <About />
        <Shop />
        <Testimonial />
        <Offer />
        <WhoWeAre />
        <Gallery />
        <Blog />
        </>
    );
};