import { AiOutlineWallet } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";
// import { RiP2PFill } from "react-icons/fc";
import { RiP2PLine } from "react-icons/ri";
const Footer = () => {
    return (
        <div className="py-4">
            <div className="flex justify-between px-8 place-items-center ">
                <span>
                    <BiHomeAlt2 className="text-yellow-600 text-2xl" />
                    <h2>Home</h2>
                </span>
                <span>
                    <RiP2PLine className="text-yellow-600 text-2xl" />
                    <h2>P2P</h2>
                </span>

                <span>
                    <AiOutlineWallet className="text-yellow-600 text-2xl" />
                    <h2>Wallet</h2>
                </span>
            </div>
        </div>
    );
}

export default Footer;