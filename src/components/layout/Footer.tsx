import Link from "next/link";
import { DefaultLinks, AppConfig } from "@/lib/config";

function getYear() {
  return new Date().getFullYear();
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-4 justify-center">
            {DefaultLinks.map((link: { href: string; name: string; title?: string }, i: number) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="text-dark dark:text-light"
                  title={link.title || link.name}
                  prefetch={false}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="copyright">
          &copy; {getYear()} {AppConfig.author.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
