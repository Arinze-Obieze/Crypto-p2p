import React from 'react';
import { CiFilter } from 'react-icons/ci';
import { AiOutlineLike } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { FaNairaSign } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { dummyData } from '../data/p2p';
import Layout from './Layout';

const P2P = () => {
    const displayedData = dummyData.slice(0, 2);

    return (
        <>
            <div className='dark:text-gray-200 dark:bg-gray-900'>
                <div className="mt-2  pb-4">
                    <span className="flex mb-4 py-4 dark:text-blue-600 text-yellow-600 justify-between px-4">
                        <h1>P2P</h1>
                        <Link to="/market" className="cursor-pointer">
                            see more...
                        </Link>
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
                            <CiFilter className="text-yellow-600 dark:text-blue-600" />
                        </span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 space-y-2 dark:text-gray-200  dark:bg-gray-600">
                {displayedData.map((item) => (
                    <div key={item.id} className="bg-white dark:bg-gray-900 px-4 mt-1 flex cursor-pointer py-2">
                        <div className="space-y-1">
                            <h1>{item.username}</h1>
                            <span className="flex space-x-1 text-sm">
                                <h2>{item.trades} Trades |</h2>
                                <h2>completion {item.completion}%</h2>
                            </span>
                            <span className="flex space-x-4 text-sm">
                                <div className="flex place-items-center space-x-2">
                                    <AiOutlineLike className="text-green-800" />
                                    <h2>{item.likePercentage}%</h2>
                                </div>
                                <div className="flex place-items-center space-x-2">
                                    <BiTime />
                                    <h2>{item.time}</h2>
                                </div>
                            </span>
                            <span className="text-sm">
                                <h2>Crypto Amount {item.cryptoAmount}</h2>
                            </span>
                            <span className="flex space-x-4 text-sm">
                                <h2>Limit</h2>
                                <span className="flex place-items-center space-x-1 text-sm">
                                    <FaNairaSign className="text-gray-700 dark:text-green-600" />
                                    <h2>{item.limit.min}</h2>
                                    <h2>- {item.limit.max}</h2>
                                </span>
                            </span>
                        </div>
                        <div className="ml-auto mt-auto">
                            <button className="bg-green-600 dark:bg-green-600 px-4 py-2 text-sm rounded-md text-white">BUY</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default P2P;
