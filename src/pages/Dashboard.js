import { RiContractLeftRightFill } from "react-icons/ri";
import { BsBank, BsPeople, BsPersonCircle } from "react-icons/bs";
import { PiHandCoinsBold } from "react-icons/pi";
import P2P from "./P2P";
import MessageCard from "../components/MessageCard";
import { AiOutlineWallet } from "react-icons/ai";
const Dashboard = () => {
    return (
        <div>

            <div className="bg-gray-100 ">
                <div>
                    <MessageCard />
                </div>

                <div className=" grid grid-cols-2  md:grid-cols-4 md:px-2">
                    <div className="bg-white m-2 py-1 text-center flex flex-col">
                        <span className="bg-purple-200 w-fit mx-auto md:p-4 p-2 rounded-full">
                            <BsPersonCircle className="text-2xl text-yellow-600" />
                        </span>
                        <h2>Profile  </h2>
                    </div>

                    <div className="bg-white m-2 py-1 text-center flex flex-col">
                        <span className="bg-purple-200 w-fit mx-auto md:p-4 p-2 rounded-full">
                            <PiHandCoinsBold className="text-2xl text-yellow-600" />
                        </span>
                        <h2>Deposit</h2>
                    </div>

                    <div className="bg-white m-2 py-1 text-center flex flex-col">
                        <span className="bg-purple-200 w-fit mx-auto md:p-4 p-2 rounded-full">
                            <RiContractLeftRightFill className="text-2xl text-yellow-600" />
                        </span>
                        <h2>Convert</h2>
                    </div>

                    <div className="bg-white m-2 py-1 text-center flex flex-col">
                        <span className="bg-purple-200 w-fit mx-auto md:p-4 p-2 rounded-full">
                            <BsPeople className="text-2xl text-yellow-600" />
                        </span>
                        <h2> Referral</h2>
                    </div>

                    <div className="bg-white m-2 py-1 text-center flex flex-col">
                        <span className="bg-purple-200 w-fit mx-auto md:p-4 p-2 rounded-full">
                            <AiOutlineWallet className="text-2xl text-yellow-600" />
                        </span>
                        <h2>Wallet</h2>
                    </div>


                    <div className="bg-white m-2 py-1 text-center flex flex-col">
                        <span className="bg-purple-200 w-fit mx-auto md:p-4 p-2 rounded-full">
                            <BsBank className="text-2xl text-yellow-600" />
                        </span>
                        <h2> Account Overview</h2>
                    </div>

                </div>


                <P2P />
            </div>
        </div>
    );
}

export default Dashboard;