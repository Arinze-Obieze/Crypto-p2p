import { CiFilter } from 'react-icons/ci';
import { AiOutlineLike } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { FaNairaSign } from 'react-icons/fa6';
import { dummyData } from '../data/p2p';

const Market = () => {

    return (
        <div>
            <div>
                <div className="mt-2 bg-white pb-4">

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

            <div className="grid grid-cols-1 space-y-2">
                {dummyData.map((item) => (
                    <div key={item.id} className="bg-white px-4 mt-1 flex cursor-pointer py-2">
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
                                    <FaNairaSign className="text-gray-700" />
                                    <h2>{item.limit.min}</h2>
                                    <h2>- {item.limit.max}</h2>
                                </span>
                            </span>
                        </div>
                        <div className="ml-auto mt-auto">
                            <button className="bg-yellow-500 px-4 py-2 text-sm text-white">BUY</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Market;
