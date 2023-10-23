import React from 'react';
import Layout from './Layout';

const dummyUser = {
    totalMoney: 10000, // Total money in USD
    cryptocurrencies: [
        { id: 1, name: 'Bitcoin', symbol: 'BTC', amount: 2.5 },
        { id: 2, name: 'Ethereum', symbol: 'ETH', amount: 10 },
        { id: 3, name: 'Litecoin', symbol: 'LTC', amount: 25 },
    ],
};

const Wallet = () => {
    const { totalMoney, cryptocurrencies } = dummyUser;

    return (
        <Layout>
            <div className="container  h-full  dark:text-gray-200 dark:bg-gray-800 mx-auto pt-4">
                <h2 className="text-2xl font-semibold mb-4 text-center pb-8">My Wallet</h2>

                <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-lg">
                    <div>
                        <div className="bg-white place-items-center py-2 justify-evenly flex dark:bg-gray-700 mt-4 p-4 rounded shadow-lg">
                            <h3 className="text-xl font-semibold mb-2"> Total Balance</h3>
                            <h2 className="">800,000,000 USDT</h2>
                        </div>
                    </div>


                    <div className='mt-8 dark:bg-gray-700 py-4 px-2'>
                        <h3 className="text-xl font-semibold text-center pb-4">Your Crypto Balance</h3>
                        <ul className="list-disc list-inside">
                            {cryptocurrencies.map((crypto) => (
                                <li key={crypto.id} className="mb-2">
                                    {crypto.name} ({crypto.symbol}): {crypto.amount} {crypto.symbol}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Wallet;
