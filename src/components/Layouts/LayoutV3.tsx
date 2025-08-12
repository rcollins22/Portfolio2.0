import FooterV2 from '../footer/FooterV2';
import HeaderV3 from '../header/HeaderV3';

interface LayoutProps {
    children?: React.ReactNode
}

const LayoutV3 = ({ children }: LayoutProps) => {
    return (
        <>
            <HeaderV3 />
            {children}
            <FooterV2 />
        </>
    );
};

export default LayoutV3;