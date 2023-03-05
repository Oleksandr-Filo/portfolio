import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaEnvelopeOpenText,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import BtnToggleTheme from '../BtnToggleTheme/BtnToggleTheme';

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <BtnToggleTheme />

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://www.canva.com/design/DAFa6i_sneU/twCvbdv40fPqR3DIrQGYcw/view"
                target="_blank"
                rel="noreferrer"
              >
                CV
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Oleksandr-Filo"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li>
              <a
                href="https://t.me/Oleksandr_Filo"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/oleksandr-filo-2a0372265/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li>
              <a
                href="mailto:oleksandr.filo.job@gmail.com"
                rel="noreferrer"
              >
                <FaEnvelopeOpenText />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
