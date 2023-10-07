import { CiFilter } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { FaNairaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
const P2P = () => {
    return (
        <div>

            <div>


                <div className="mt-2 bg-white pb-4">
                    <span className="flex mb-4 py-4 text-yellow-600 justify-between px-4">
                        <h1>P2P</h1>
                        <Link to={'/p2p'} className="cursor-pointer">see more...</Link>
                    </span>
                    <span className="flex space-x-6 px-4">
                        <h2>Buy</h2>
                        <h2>Sell</h2>
                    </span>

                    <div>
                        <span className="flex justify-evenly mt-4 mb-2">
                            <h3>USDT</h3>
                            <h3>BTC</h3>
                            <h3>FDUSD</h3>
                            <h3>BNB</h3>
                            <h3>ETH</h3>
                            <h3>NGN</h3>
                            <h3>SOL</h3>
                            <h3>BUSD</h3>
                        </span>
                    </div>

                    <div>
                        <span className="flex space-x-1 px-4 pb-4 place-items-center">
                            <h2>Filter</h2>
                            <CiFilter className="text-yellow-600" />
                        </span>
                    </div>
                </div>

            </div>

            <div className="gird grid-cols-1 space-y-2">

                <div class="bg-white px-4 mt-1 flex  cursor-pointer py-2">

                    <div className="space-y-1">
                        <h1>OLAMOND001</h1>

                        <span className="flex space-x-1 text-sm">
                            <h2>2000 Trades |</h2>
                            <h2>completion 98.70%</h2>
                        </span>

                        <span className="flex space-x-4 text-sm">
                            <div className="flex place-items-center space-x-2">
                                <AiOutlineLike className="text-green-800"/> 
                                <h2>98.8%</h2>
                            </div>
                            <div className="flex place-items-center space-x-2">
                                <BiTime />
                                <h2>13 min</h2>
                            </div>
                        </span>

                        <span className="text-sm">
                            <h2>Crypto Amount 8,465.7 USDT</h2>
                        </span>
                        <span className="flex space-x-4 text-sm">
                            <h2>Limit</h2>

                            <span className="flex place-items-center space-x-1 text-sm">
                                <FaNairaSign className="text-gray-700" />
                                <h2>5000,00000</h2>
                                <h2>- 1000000000</h2>
                            </span>
                        </span>
                    </div>

                    <div className="ml-auto mt-auto">
                        <button className="bg-yellow-500 px-4 py-2 text-sm text-white">BUY</button>
                    </div>

                </div>



                <div class="bg-white px-4 flex py-2 ">
                    <div className="space-y-1">
                        <h1>Philip</h1>

                        <span className="flex space-x-1 text-sm">
                            <h2>400 Trades |</h2>
                            <h2>completion 98.70%</h2>
                        </span>

                        <span className="flex space-x-4 text-sm">
                            <div className="flex place-items-center space-x-2">
                                <AiOutlineLike className="text-green-800"/> 
                                <h2>98.8%</h2>
                            </div>
                            <div className="flex place-items-center space-x-2">
                                <BiTime />
                                <h2>13 min</h2>
                            </div>
                        </span>

                        <span className="text-sm">
                            <h2>Crypto Amount 8,465.7 USDT</h2>
                        </span>
                        <span className="flex space-x-4 text-sm">
                            <h2>Limit</h2>

                            <span className="flex place-items-center space-x-1 text-sm">
                                <FaNairaSign className="text-gray-700" />
                                <h2>50350</h2>
                                <h2>- 65000</h2>
                            </span>
                        </span>
                    </div>

                    <div className="ml-auto mt-auto">
                        <button className="bg-yellow-500 px-4 py-2 text-sm text-white">BUY</button>
                    </div>
                </div>


                <div class="bg-white px-4 flex cursor-pointer py-2">
                    <div className="space-y-1">
                        <h1>Philip</h1>

                        <span className="flex space-x-1 text-sm">
                            <h2>400 Trades |</h2>
                            <h2>completion 98.70%</h2>
                        </span>

                        <span className="flex space-x-4 text-sm">
                            <div className="flex place-items-center space-x-2">
                                <AiOutlineLike className="text-green-800"/> 
                                <h2>98.8%</h2>
                            </div>
                            <div className="flex place-items-center space-x-2">
                                <BiTime />
                                <h2>13 min</h2>
                            </div>
                        </span>

                        <span className="text-sm">
                            <h2>Crypto Amount 8,465.7 USDT</h2>
                        </span>
                        <span className="flex space-x-4 text-sm">
                            <h2>Limit</h2>

                            <span className="flex place-items-center space-x-1 text-sm">
                                <FaNairaSign className="text-gray-700" />
                                <h2>50350</h2>
                                <h2>- 65000</h2>
                            </span>
                        </span>
                    </div>

                    <div className="ml-auto mt-auto">
                        <button className="bg-yellow-500 px-4 py-2 text-sm text-white">BUY</button>
                    </div>
                </div>


                <div class="bg-white px-4 flex cursor-pointer py-2">
                    <div className="space-y-1">
                        <h1>Philip</h1>

                        <span className="flex space-x-1 text-sm">
                            <h2>400 Trades |</h2>
                            <h2>completion 98.70%</h2>
                        </span>

                        <span className="flex space-x-4 text-sm">
                            <div className="flex place-items-center space-x-2">
                                <AiOutlineLike className="text-green-800"/> 
                                <h2>98.8%</h2>
                            </div>
                            <div className="flex place-items-center space-x-2">
                                <BiTime />
                                <h2>13 min</h2>
                            </div>
                        </span>

                        <span className="text-sm">
                            <h2>Crypto Amount 8,465.7 USDT</h2>
                        </span>
                        <span className="flex space-x-4 text-sm">
                            <h2>Limit</h2>

                            <span className="flex place-items-center space-x-1 text-sm">
                                <FaNairaSign className="text-gray-700" />
                                <h2>50350</h2>
                                <h2>- 65000</h2>
                            </span>
                        </span>
                    </div>

                    <div className="ml-auto mt-auto">
                        <button className="bg-yellow-500 px-4 py-2 text-sm text-white">BUY</button>
                    </div>
                </div>

                <div class="bg-white px-4 flex cursor-pointer py-2">
                    <div className="space-y-1">
                        <h1>Philip</h1>

                        <span className="flex space-x-1 text-sm">
                            <h2>400 Trades |</h2>
                            <h2>completion 98.70%</h2>
                        </span>

                        <span className="flex space-x-4 text-sm">
                            <div className="flex place-items-center space-x-2">
                                <AiOutlineLike className="text-green-800"/> 
                                <h2>98.8%</h2>
                            </div>
                            <div className="flex place-items-center space-x-2">
                                <BiTime />
                                <h2>13 min</h2>
                            </div>
                        </span>

                        <span className="text-sm">
                            <h2>Crypto Amount 8,465.7 USDT</h2>
                        </span>
                        <span className="flex space-x-4 text-sm">
                            <h2>Limit</h2>

                            <span className="flex place-items-center space-x-1 text-sm">
                                <FaNairaSign className="text-gray-700" />
                                <h2>50350</h2>
                                <h2>- 65000</h2>
                            </span>
                        </span>
                    </div>

                    <div className="ml-auto mt-auto">
                        <button className="bg-yellow-500 px-4 py-2 text-sm text-white">BUY</button>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default P2P;