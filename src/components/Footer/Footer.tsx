import React from 'react';
import styles from './Footer.module.css';
// Note: You must have 'react-icons' installed for these imports to work
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

// Define the structure for navigation links
interface NavItem {
    label: string;
    href: string;
}

// Define the structure for social media icons
interface SocialItem {
    icon: React.ElementType; // Use React.ElementType for the icon component
    href: string;
    ariaLabel: string;
}

// Data for navigation columns
const EXPLORE_LINKS: NavItem[] = [
    { label: "Model UN", href: "/modelun" },
    { label: "Mock Trial", href: "/mocktrial" },
    { label: "Mathletes", href: "/mathletes" },
    { label: "Leaderboards", href: "/leaderboards" },
];

const COMPANY_LINKS: NavItem[] = [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Careers", href: "/careers" },
    { label: "FAQ", href: "/faq" },
];

const LEGAL_LINKS: NavItem[] = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Support", href: "/support" },
];

// Data for social media icons
const SOCIAL_LINKS: SocialItem[] = [
    { icon: FaTwitter, href: "https://twitter.com/yourhandle", ariaLabel: "JAMUN Twitter" },
    { icon: FaFacebookF, href: "https://facebook.com/yourpage", ariaLabel: "JAMUN Facebook" },
    { icon: FaInstagram, href: "https://instagram.com/yourpage", ariaLabel: "JAMUN Instagram" },
    { icon: FaLinkedin, href: "https://linkedin.com/company/yourcompany", ariaLabel: "JAMUN LinkedIn" },
];

const Footer: React.FC = () => {
    // Get the current year for the copyright notice
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.contentWrapper}>
                
                {/* 1. Logo and Tax Status */}
                <div className={styles.brandColumn}>
                    <a href="/" className={styles.logoLink}>
                        {/* REPLACED WITH IMAGE TAG USING PUBLIC PATH */}
                        <img 
                            src="/images/jamun-white-side-logo.webp" 
                            alt="JAMUN official logo" 
                            className={styles.actualLogoImage} 
                        />
                    </a>
                    <p className={styles.tagline}>Making learning fun, competitive, and accessible.</p>
                    <p className={styles.taxStatus}>
                        JAMUN is a registered 501(c)(3) nonprofit organization.
                    </p>
                </div>

                {/* 2. Navigation Link Columns */}
                <div className={styles.linksGrid}>
                    <div className={styles.linkColumn}>
                        <h4 className={styles.columnTitle}>Explore</h4>
                        <ul>
                            {EXPLORE_LINKS.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href} className={styles.footerLink}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.linkColumn}>
                        <h4 className={styles.columnTitle}>Company</h4>
                        <ul>
                            {COMPANY_LINKS.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href} className={styles.footerLink}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className={styles.linkColumn}>
                        <h4 className={styles.columnTitle}>Legal</h4>
                        <ul>
                            {LEGAL_LINKS.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href} className={styles.footerLink}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            
            {/* Horizontal Rule / Separator */}
            <hr className={styles.divider} />

            {/* 3. Bottom Bar: Socials and Copyright */}
            <div className={styles.bottomBar}>
                <p className={styles.copyright}>
                    &copy; {currentYear} JAMUN, Inc. All rights reserved.
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
                            <social.icon size={20} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;