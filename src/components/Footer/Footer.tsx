import React from 'react';
import styles from './Footer.module.css';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

interface NavItem {
    label: string;
    href: string;
}

interface SocialItem {
    icon: React.ElementType;
    href: string;
    ariaLabel: string;
}

const PROGRAMS_LINKS: NavItem[] = [
    { label: "Model UN", href: "/modelun" },
    { label: "Mock Trial", href: "/mocktrial" },
    { label: "Mathletes", href: "/mathletes" },
    { label: "Leaderboards", href: "/leaderboards" },
];

const ORGANIZATION_LINKS: NavItem[] = [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
];

const RESOURCES_LINKS: NavItem[] = [
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Support", href: "/support" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
];

const SOCIAL_LINKS: SocialItem[] = [
    { icon: FaTwitter, href: "https://twitter.com/jamun", ariaLabel: "Follow JAMUN on Twitter" },
    { icon: FaFacebookF, href: "https://facebook.com/jamun", ariaLabel: "Like JAMUN on Facebook" },
    { icon: FaInstagram, href: "https://instagram.com/jamun", ariaLabel: "Follow JAMUN on Instagram" },
    { icon: FaLinkedin, href: "https://linkedin.com/company/jamun", ariaLabel: "Connect with JAMUN on LinkedIn" },
    { icon: FaYoutube, href: "https://youtube.com/@jamun", ariaLabel: "Subscribe to JAMUN on YouTube" },
];

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.contentWrapper}>
                {/* Brand Column */}
                <div className={styles.brandColumn}>
                    <a href="/" className={styles.logoLink}>
                        <img
                            src="/images/jamun-white-side-logo.webp"
                            alt="JAMUN logo"
                            className={styles.actualLogoImage}
                        />
                    </a>
                    <p className={styles.tagline}>
                        Empowering students through competitive academic excellence and meaningful debate.
                    </p>
                    <p className={styles.taxStatus}>
                        The Junior Assembly of the Model United Nations is a registered 501(c)(3) nonprofit organization.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className={styles.linksGrid}>
                    <div className={styles.linkColumn}>
                        <h4 className={styles.columnTitle}>Programs</h4>
                        <ul>
                            {PROGRAMS_LINKS.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href} className={styles.footerLink}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.linkColumn}>
                        <h4 className={styles.columnTitle}>Organization</h4>
                        <ul>
                            {ORGANIZATION_LINKS.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href} className={styles.footerLink}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.linkColumn}>
                        <h4 className={styles.columnTitle}>Resources</h4>
                        <ul>
                            {RESOURCES_LINKS.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href} className={styles.footerLink}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <hr className={styles.divider} />

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <p className={styles.copyright}>
                    &copy; {currentYear} The Junior Assembly of the Model United Nations. All rights reserved.
                </p>

                <div className={styles.socials}>
                    {SOCIAL_LINKS.map((social) => (
                        <a
                            key={social.ariaLabel}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.ariaLabel}
                            className={styles.socialIcon}
                        >
                            <social.icon size={18} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
