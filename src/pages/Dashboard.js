import { RiContractLeftRightFill } from "react-icons/ri";
import { BsBank, BsPeople, BsPersonCircle } from "react-icons/bs";
import { PiHandCoinsBold } from "react-icons/pi";
import P2P from "./P2P";
// import MessageCard from "../components/MessageCard";
import { AiOutlineWallet } from "react-icons/ai";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
// import { useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "../components/Faq";
import Carousel from "../components/Carousel";
// import Footer from "../components/footer";


const Dashboard = () => {

    return (

        <div className="bg-gray-100 md:flex-1">
            <div>
                <Carousel />
            </div>

            <div className=" grid grid-cols-2 bg-white md:grid-cols-4  md:px-2">

                <Link to={'/profile'} className=" m-2 py-1 text-center flex flex-col">
                    <span className="bg-yellow-200 w-fit mx-auto md:p-4 p-2 rounded-full">
                        <BsPersonCircle className="text-2xl text-yellow-600" />
                    </span>
                    <h2 clasName="m-[670px]:text-sm"> Profile  </h2>
                </Link>


                <Link to={'/account-overview'} className="m-2 py-1 text-center flex flex-col">
                    <span className="bg-yellow-200 w-fit mx-auto md:p-4 p-2 rounded-full">
                        <BsBank className="text-2xl text-yellow-600" />
                    </span>
                    <h2 clasName="m-[670px]:text-sm"> Account Overview</h2>
                </Link>

                <Link to={'/balance'} className=" m-2 py-1 text-center flex flex-col">
                    <span className="bg-yellow-200 w-fit mx-auto md:p-4 p-2 rounded-full">
                        <AiOutlineWallet className="text-2xl text-yellow-600" />
                    </span>
                    <h2 clasName="m-[670px]:text-sm">Wallet Balance</h2>
                </Link>

                <Link to={'/deposit'} className=" m-2 py-1 text-center flex flex-col">
                    <span className="bg-yellow-200 w-fit mx-auto md:p-4 p-2 rounded-full">
                        <PiHandCoinsBold className="text-2xl text-yellow-600" />
                    </span>
                    <h2 clasName="m-[670px]:text-sm">Deposit</h2>
                </Link>

                <Link to={'/convert'} className=" m-2 py-1 text-center flex flex-col">
                    <span className="bg-yellow-200 w-fit mx-auto md:p-4 p-2 rounded-full">
                        <RiContractLeftRightFill className="text-2xl text-yellow-600" />
                    </span>
                    <h2 clasName="m-[670px]:text-sm">Convert</h2>
                </Link>

                <Link to={'/referral'} className=" m-2 py-1 text-center flex flex-col">
                    <span className="bg-yellow-200 w-fit mx-auto md:p-4 p-2 rounded-full">
                        <BsPeople className="text-2xl text-yellow-600" />
                    </span>
                    <h2 clasName="m-[670px]:text-sm"> Referral</h2>
                </Link>

            </div>


            <P2P />



            <div>
                <h1 className="text-2xl  text-gray-700 font-serif px-8 pt-8 pb-4">FAQ</h1>
                <Accordion />

            </div>


        </div>

    );
}

export default Dashboard;