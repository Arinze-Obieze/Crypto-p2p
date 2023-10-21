import { CiFilter } from 'react-icons/ci';
import { AiOutlineLike } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { FaNairaSign } from 'react-icons/fa6';
import { dummyData } from '../data/p2p';
import Layout from './Layout';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Market = () => {
    const [choice, setChoice] = useState("buy")
    return (
        <Layout>
            <div className='dark:bg-gray-500'>
                <div className="pt-4 dark:bg-gray-800 bg-white pb-4">

                    <span className="flex space-x-6 dark:text-green-600 px-4">
                        <button className={`hover:underline-offset-4 hover:underline ${choice ==="buy" ? 'underline underline-offset-4' : ''}`}
                        onClick={e=>setChoice("buy")}
                        >Buy</button>
                        <button 
                        className={`hover:underline-offset-4 hover:underline ${choice ==="buy" ? 'underline underline-offset-4' : ''}`}
                        onClick={e=>setChoice("sell")}>Sell</button>
                    </span>

                    <div>
                        <span className="flex justify-evenly dark:text-gray-200 mt-4 mb-2">
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
                            <h2 className='text-gray-700 dark:text-gray-300'>Filter</h2>
                            <CiFilter className="text-yellow-600 dark:text-blue-500" />
                        </span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 space-y-2 dark:bg-gray-700">
                {
                    choice === "buy" ?
                        (
                            dummyData.map((item) => (
                                <div key={item.id} className="bg-white dark:bg-gray-800 dark:text-gray-300 px-4 mt-1 flex cursor-pointer py-2">
                                    <div className="space-y-1">
                                        <h1 >{item.username}</h1>
                                        <span className="flex space-x-1 dark:text-gray-400 text-sm">
                                            <h2>{item.trades} Trades |</h2>
                                            <h2>completion {item.completion}%</h2>
                                        </span>
                                        <span className="flex space-x-4 dark:text-gray-400 text-sm">
                                            <div className="flex place-items-center space-x-2">
                                                <AiOutlineLike className="text-green-800" />
                                                <h2>{item.likePercentage}%</h2>
                                            </div>
                                            <div className="flex place-items-center space-x-2">
                                                <BiTime />
                                                <h2>{item.time}</h2>
                                            </div>
                                        </span>
                                        <span className="text-sm dark:text-gray-300">
                                            <h2>Crypto Amount {item.cryptoAmount}</h2>
                                        </span>
                                        <span className="flex space-x-4 text-sm">
                                            <h2>Limit</h2>
                                            <span className="flex place-items-center dark:text-green-600 space-x-1 text-sm">
                                                <FaNairaSign className="text-gray-700 dark:text-green-600" />
                                                <h2>{item.limit.min}</h2>
                                                <h2>- {item.limit.max}</h2>
                                            </span>
                                        </span>
                                    </div>

                                    <Link to={'/buy'} className="ml-auto mt-auto">
                                        <button className=" bg-green-600 rounded-md px-4 py-2 text-sm text-white">BUY</button>
                                    </Link>
                                </div>
                            ))
                        )
                        :
                        (
                            dummyData.map((item) => (
                                <div key={item.id} className="bg-white dark:bg-gray-800 dark:text-gray-300 px-4 mt-1 flex cursor-pointer py-2">
                                    <div className="space-y-1">
                                        <h1 >{item.username}</h1>
                                        <span className="flex space-x-1 dark:text-gray-400 text-sm">
                                            <h2>{item.trades} Trades |</h2>
                                            <h2>completion {item.completion}%</h2>
                                        </span>
                                        <span className="flex space-x-4 dark:text-gray-400 text-sm">
                                            <div className="flex place-items-center space-x-2">
                                                <AiOutlineLike className="text-green-800" />
                                                <h2>{item.likePercentage}%</h2>
                                            </div>
                                            <div className="flex place-items-center space-x-2">
                                                <BiTime />
                                                <h2>{item.time}</h2>
                                            </div>
                                        </span>
                                        <span className="text-sm dark:text-gray-300">
                                            <h2>Crypto Amount {item.cryptoAmount}</h2>
                                        </span>
                                        <span className="flex space-x-4 text-sm">
                                            <h2>Limit</h2>
                                            <span className="flex place-items-center dark:text-green-600 space-x-1 text-sm">
                                                <FaNairaSign className="text-gray-700 dark:text-green-600" />
                                                <h2>{item.limit.min}</h2>
                                                <h2>- {item.limit.max}</h2>
                                            </span>
                                        </span>
                                    </div>

                                    <Link to={'/sell'} className="ml-auto mt-auto">
                                        <button className=" bg-red-600 rounded-md px-4 py-2 text-sm text-white">Sell</button>
                                    </Link>
                                </div>
                            ))
                        )
                }
            </div>
        </Layout>
    );
};

export default Market;
