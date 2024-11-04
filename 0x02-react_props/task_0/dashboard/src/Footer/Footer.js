import {getFullYear, getFooterCopy} from '../utils/utils';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="App-footer ">
      Copyright {getFullYear()} - {getFooterCopy(true)}
    </footer>
  );
};

export default Footer;
