import { PropsWithChildren } from "react";
import Head from "next/head";
import useDarkMode from "use-dark-mode";
import Link from "next/link";
import {
  GitHub,
  Instagram,
  Twitter,
  Linkedin,
  ArrowLeftCircle,
  Sun,
  Moon,
  ToggleLeft,
  ToggleRight,
} from "react-feather";
import { useLocale } from "utils/useLocale";

export interface LayoutProps {
  title?: string;
  description?: string;
  disableBack?: boolean;
  parentPage?: string;
}

export const Layout = ({
  children,
  title,
  description,
  disableBack,
  parentPage,
}: PropsWithChildren<LayoutProps>) => {
  const darkMode = useDarkMode();
  const { lang, toggleLang } = useLocale();

  return (
    <>
      <Head>
        {title && <title>{title}</title>}
        {title && <meta property="og:title" content={title} />}
        {description && <meta name="description" content={description} />}
        {description && <meta name="og:description" content={description} />}
      </Head>
      <div className="container">
        <main>
          <button
            aria-label="toggle theme"
            className="lang"
            onClick={toggleLang}
          >
            <span className={lang === "ru" ? "current" : ""}>RU</span>
            {lang === "ru" ? <ToggleLeft /> : <ToggleRight />}
            <span className={lang === "en" ? "current" : ""}>EN</span>
          </button>
          <button
            aria-label="toggle theme"
            className="theme"
            onClick={darkMode.toggle}
          >
            {darkMode.value ? <Moon /> : <Sun />}
          </button>
          {title && (
            <h1 className="page-title">
              {!disableBack && (
                <Link href={parentPage ? parentPage : "/" + lang}>
                  <a className="back">
                    <ArrowLeftCircle />
                  </a>
                </Link>
              )}
              {title}
            </h1>
          )}
          {children}
        </main>
        <footer>
          <div className="links">
            <a href="https://github.com/ewgenius" target="__blank">
              <GitHub size={16} />
            </a>
            <a href="https://instagram.com/ewgeniux" target="__blank">
              <Instagram size={16} />
            </a>
            <a href="https://twitter.com/ewgeniux" target="__blank">
              <Twitter size={16} />
            </a>
            <a href="https://www.linkedin.com/in/ewgenius/" target="__blank">
              <Linkedin size={16} />
            </a>
          </div>
          <small>&copy; 2020, ewgenius.me</small>
        </footer>
      </div>
    </>
  );
};
