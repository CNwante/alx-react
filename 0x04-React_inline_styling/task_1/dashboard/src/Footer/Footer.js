import {getFullYear, getFooterCopy} from '../utils/utils';

const Footer = () => {
  return (
    <footer className="App-footer ">
      Copyright {getFullYear()} - {getFooterCopy(true)}
    </footer>
  );
};

export default Footer;
