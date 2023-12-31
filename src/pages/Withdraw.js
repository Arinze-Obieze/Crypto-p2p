import React from 'react';
import Layout from './Layout';

function Withdraw() {

    const cryptoBalance = 2.3456; // Replace with actual crypto balance
    const moneyBalance = 9876.54; // Replace with actual money balance

    return (
        <Layout>
            <div className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-900 min-h-screen flex flex-col justify-center items-center ">
                <div className="max-w-md p-6 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-extrabold mb-4">Crypto Withdrawal</h1>
                    <div className="mb-8">
                        <p className="mb-2">Crypto Balance: {cryptoBalance} BTC</p>
                        <p>Money Balance: ${moneyBalance}</p>
                    </div>
                    <form className="space-y-4">
                        {/* <div className="space-y-2">
                    <label className="block text-lg font-semibold">Amount</label>
                    <input
                        type="number"
                        className="w-full bg-white rounded-lg p-3"
                        placeholder="Enter amount"
                    />
                </div> */}
                        <div className="flex justify-center items-center space-x-4">
                            <button className="bg-yellow-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-gold-600">
                                Withdraw Crypto
                            </button>
                            {/* <button className="bg-yellow-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-gold-600">
                               
                            </button> */}
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default Withdraw;
