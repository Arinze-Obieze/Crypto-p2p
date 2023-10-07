import React from 'react';

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
        <div className="container mx-auto mt-4">
            <h2 className="text-2xl font-semibold mb-4 text-center pb-8">My Wallet</h2>

            <div className="bg-white p-4 rounded shadow-lg">
                <div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Total Money:</h3>
                        <p className="text-2xl">{totalMoney} USD</p>
                    </div>
                </div>

                <div className='mt-8'>
                    <h3 className="text-xl font-semibold pb-2">Your Crypto Balance</h3>
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
    );
};

export default Wallet;
