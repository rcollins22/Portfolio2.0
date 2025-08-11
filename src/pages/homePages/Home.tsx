import AboutV1 from "../../components/about/AboutV1";
import BannerV1 from "../../components/banner/BannerV1";
import BlogV1 from "../../components/blog/BlogV1";
import ContactV1 from "../../components/contact/ContactV1";
import FactV1 from "../../components/fact/FactV1";
import LayoutV1 from "../../components/Layouts/LayoutV1";
import PartnerV1 from "../../components/partner/PartnerV1";
import PortfolioV1 from "../../components/portfolio/PortfolioV1";
import PromoV1 from "../../components/promo/PromoV1";
import ResumeV1 from "../../components/resume/ResumeV1";
import ServicesV1 from "../../components/services/ServicesV1";

const Home = () => {
    return (
        <>
            <LayoutV1>
                <BannerV1 />
                <AboutV1 />
                <ServicesV1 sectionClass="default-padding" hasTitle={true} />
                <PortfolioV1 sectionClass="bg-gray default-padding" hasTitle={true} />
                <FactV1 />
                <ResumeV1 sectionClass="bg-gray default-padding" />
                <ContactV1 sectionClass="bg-gray default-padding" />
                <BlogV1 />
            </LayoutV1>
        </>
    );
};

export default Home;