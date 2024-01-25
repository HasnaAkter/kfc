import { Link } from "react-router-dom";
import fi from "../../assets/icon/footeric.svg";
import inbox from "../../assets/icon/inbox.svg";
import app from "../../assets/icon/app.svg";
import play from "../../assets/icon/play.svg";

const Footer = () => {
  return (
    <div>
      <footer className="p-20">
        <h1 className="p-10 font-bold text-xl">Even easier in the app</h1>
        <div className="flex flex-wrap justify-start py-3 px-5  gap-4">
          <Link to="/" className="btn mb-4 md:mb-0 ">
            <img src={app} alt="app store" />
          </Link>
          <Link to="/" className="btn">
            <img src={play} alt="play store" />
          </Link>
        </div>
        <br />
      </footer>
      <hr />
      <footer className="footer p-20 md:p-10 bg-base-200 text-base-content">
        <nav>
          <header className="footer-title">Company information</header>
          <div className="text-gray-500">
            <Link className="block md:inline-block p-1 md:p-0 md:mr-4">
              User agreement
            </Link>
            <Link className="block md:inline-block p-1 md:p-0 md:mr-4">
              Delivery
            </Link>
            <Link className="block md:inline-block p-1 md:p-0 md:mr-4">
              Contacts
            </Link>
            <Link className="block md:inline-block p-1 md:p-0 md:mr-4">
              FAQ
            </Link>
            <Link className="block md:inline-block p-1 md:p-0 md:mr-4">
              footer-title
            </Link>
            <Link className="block md:inline-block p-1 md:p-0 md:mr-4">
              Become a partner
            </Link>
            <Link className="block md:inline-block p-1 md:p-0 md:mr-4">
              Become a courier
            </Link>
            <Link className="block md:inline-block p-1 md:p-0 md:mr-4">
              Eats for Business
            </Link>
            <Link className="block md:inline-block p-1 md:p-0 md:mr-4">
              Plastic recycling
            </Link>
            <Link className="block md:inline-block p-1 md:p-0 md:mr-4">
              Order food in the Yandex Go app
            </Link>
            <Link className="block md:inline-block p-1 md:p-0 md:mr-4">
              © Feedback
            </Link>
          </div>
        </nav>
      </footer>
      <footer className="footer p-4 md:p-10 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <p>© 2018–2024 Yandex Eats LLC</p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <p>Project for Yandex</p>
            <a>
              <img src={fi} alt="" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
