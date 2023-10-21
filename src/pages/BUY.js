import { BiChat } from "react-icons/bi";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const BUY = () => {
    return (
        <Layout>
            <div className="dark:bg-gray-900 dark:text-gray-300 pb-24">

                <span className="flex space-x-2 pt-8 pb-4 px-4 text-sm">
                    <h1>Price</h1>
                    <h3 className="text-green-600">1,174.48 NGN</h3>
                </span>

                <div className="border-2 mx-4 py-4 font-serif dark:border-gray-700 ">
                    <div className="flex justify-between px-4">
                        <span>
                            <h1>I want to pay</h1>
                            <input type="text" placeholder="15,000 - 25,00" />
                        </span>
                        <span className="flex space-x-2">
                            <h2>All</h2>
                            <h2>NGN</h2>
                        </span>
                    </div>
                </div>

                <div className="border-2 mt-8 mx-4 py-4 font-serif dark:border-gray-700 ">
                    <div className="flex justify-between px-4">
                        <span>
                            <h1>I will receive</h1>
                            <input type="text" placeholder="0.00" />
                        </span>
                        <span className="flex space-x-2">
                            <h2>All</h2>
                            <h2>NGN</h2>
                        </span>
                    </div>
                </div>


                <div className="mx-12 ">
                    <button className="bg-green-600 mt-8   w-full py-3 text-white font-mono text-xl">BUY USDT</button>
                </div>
                <div>

                    <div className="px-4">

                        <div className="px-4 flex place-items-center justify-between">
                            <div className=" mt-8 font-sans ">
                                <img src="" alt="" />
                                <div className="text-sm mb-4">
                                    <h4>2259 orders</h4>
                                    <h4>85.18% compeletion</h4>
                                </div>
                            </div>

                            <Link className="flex space-x-2 ">
                                <BiChat className="text-green-600 text-3xl" />
                                <h1>Chat with seller</h1>
                            </Link>
                        </div>
                        <div className="space-y-1">
                            <div className="flex justify-between dark:border-gray-500">
                                <h2>Payment Time Limit</h2>
                                <h2>15 Minutes</h2>
                            </div>

                            <div className="flex justify-between dark:border-gray-500">
                                <h2>Avg.Release Time</h2>
                                <h2>5.48 Minutes</h2>
                            </div>


                            <div className="flex justify-between dark:border-gray-500">
                                <h2>Available</h2>
                                <h2>144.14 USDT</h2>
                            </div>

                            <div className="flex  flex-col space-y-4 pt-4 justify-between dark:border-gray-500">
                                <h2>Bank Transfer</h2>
                                <div className="border-2 dark:border-gray-700  mt-4 ">
                                    <span className="flex space-x-2 px-1 text-sm py-2">
                                        <h1>Advertiser's Terms </h1>
                                        <h2 className="text-red-600">(Please read carefully)</h2>
                                    </span>
                                    <div className="">
                                        <p className="py-2 px-2 font-serif overflow-y-scroll">
                                            Pls make sure you make payment before you ask me to release.
                                            Thanks
                                            No third party or company payment.
                                            No crypto related like Binance, coin, usdt btc, etc, as narration in the payment or
                                            else i report your account for permanent suspension on binance for risking my bank
                                            account. Thanks
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default BUY;