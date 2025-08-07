import { Link } from 'react-scroll';

interface DataType {
    closeMenu?: () => void;
}

const ScrollMenu: React.FC<DataType> = ({ closeMenu }) => {
    return (
            <li>
                <Link className="smooth-menu" to="services" offset={-50} onClick={closeMenu}>Skills</Link>
            </li>
            <li>
                <Link className="smooth-menu" to="portfolio" offset={-50} onClick={closeMenu}>Portfolio</Link>
            </li>
            <li>
                <Link className="smooth-menu" to="resume" offset={-50} onClick={closeMenu}>Resume</Link>
            </li>
        </>
    );
};

export default ScrollMenu;