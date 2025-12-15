
import { Constants, Routes } from "../../lib";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export function Footer(){
    return (
        <footer style={{height:Constants.footerHeight}} className="w-100 d-flex justify-content-center align-items-center text-nowrap overflow-auto text-slight bg-brand py-1">
            <span className="px-2">&copy;2021-Present LithiumGit Contributors.</span>
            <a href={Routes.Privacy} className="underline px-2 hover">Privacy Policy</a>
            <a href={Routes.Terms} className="underline px-2 hover">Terms of Use</a>
            {/* <div className="px-5"></div> */}
            {/* Social Media Icons */}
            <span className="ps-5"></span>
            <a href="https://www.linkedin.com/company/lithiumgit" className="pe-2 hover" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={15} />
            </a>
            <a href="http://facebook.com/profile.php?id=61573993821255" className="px-2 hover" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook size={15} />
            </a>
            <a href="https://x.com/LithiumGit" className="px-2 hover" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter size={15} />
            </a>
        </footer>
    )

}