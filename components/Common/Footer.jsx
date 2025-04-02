import { AiFillCopyrightCircle } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { CONTACTS, CONTACTS_ACTIONS } from "../../constants/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      id="footer"
      className="w-full shadow-2xl md:py-4 pt-4 pb-10 px-2 md:px-4 rounded-lg md:mb-4"
    >
      <div className="flex px-2 md:px-4 mb-2 py-2 bg-MidNightBlack items-center justify-between text-xs font-normal text-LightGray rounded-2xl">
        <div className="flex items-center">
          <div className="mr-1 text-base">
            <AiFillCopyrightCircle />
          </div>
          <span className="md:block hidden">
            {currentYear} Tous droits réservés.
          </span>
          <span className="block md:hidden pr-2">{currentYear}</span>
        </div>
        <div className="flex items-center">
          <a
            href="https://github.com/osamajavaid"
            target="_blank"
            rel="noreferrer"
          >
            Créé à partir du dépôt original d&apos;Osama Javaid, modifié pour un
            usage personnel.
          </a>
        </div>
        <div className="hidden md:flex items-center">
          <div className="mr-1 text-base">
            <MdMail />
          </div>
          <a href={CONTACTS_ACTIONS.EMAIL}>{CONTACTS.EMAIL}</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
