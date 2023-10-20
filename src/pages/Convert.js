import React, { useState } from 'react';
import Layout from './Layout';

function CryptoConverter() {
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [convertToCrypto, setConvertToCrypto] = useState(true);
    const [selectedCurrency, setSelectedCurrency] = useState('USD'); // Default target currency

    const handleConvert = () => {

        const conversionRate = 0.001;
        const amountToConvert = parseFloat(document.getElementById('amount').value);
        const converted = convertToCrypto
            ? amountToConvert * conversionRate
            : amountToConvert / conversionRate;
        setConvertedAmount(converted);
    };

    const toggleConversionDirection = () => {
        setConvertToCrypto(!convertToCrypto);
    };

    const handleCurrencyChange = (e) => {
        setSelectedCurrency(e.target.value);
    };

    return (
        <Layout>
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen flex items-center justify-center">
            <div className="bg-white dark:bg-gray-700 dark:text-gray-200 rounded-lg shadow-md p-8 w-full max-w-md">
                <h1 className="text-2xl font-semibold mb-6">Crypto Converter</h1>

                <div className="mb-6">
                    <label className="text-gray-700 block mb-2" htmlFor="fromCurrency">
                        {convertToCrypto ? 'Convert From' : 'Convert To'}
                    </label>
                    <select
                        id="fromCurrency"
                        className="w-full border dark:text-gray-200 rounded-md px-3 py-2"
                    >
                        <option value="BTC">Bitcoin (BTC)</option>
                        <option value="ETH">Ethereum (ETH)</option>
                        <option value="XRP">USDT Tether(USDT)</option>

                    </select>
                </div>

                <div className="mb-6">
                    <label className="text-gray-700 dark:text-gray-200 block mb-2" htmlFor="amount">
                        Amount
                    </label>
                    <input
                        type="number"
                        id="amount"
                        className="w-full border rounded-md px-3 py-2"
                        placeholder={`Enter ${convertToCrypto ? 'crypto' : 'USD'} amount`}
                    />
                </div>

                <div className="mb-6">
                    <label className="text-gray-700 dark:text-gray-200 block mb-2" htmlFor="toCurrency">
                        Target Currency
                    </label>
                    <select
                        id="toCurrency"
                        className="w-full border dark:text-gray-200 rounded-md px-3 py-2"
                        value={selectedCurrency}
                        onChange={handleCurrencyChange}
                    >
                        <option value="USD" className='dark:text-gray-200'>US Dollar (USD)</option>
                        <option value="EUR">Naira (NGN)</option>

                    </select>
                </div>

                <div className="flex justify-between items-center">
                    <button
                        className="dark:bg-blue-500 bg-yellow-600 text-white rounded-md px-4 py-2 hover:bg-blue-600"
                        onClick={handleConvert}
                    >
                        {convertToCrypto ? 'Convert' : 'Convert Back'}
                    </button>
                    <label className="flex items-center cursor-pointer">
                        <span className="mr-2">Convert Back</span>
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-blue-500"
                            checked={!convertToCrypto}
                            onChange={toggleConversionDirection}
                        />
                    </label>
                </div>

                {convertedAmount !== null && (
                    <div className="mt-6">
                        <p className="text-gray-700 dark:text-gray-200">
                            You will receive{''}
                            <span className="font-semibold">
                                {convertedAmount.toFixed(2)} {selectedCurrency}
                            </span>{' '}
                            on the other end.
                        </p>
                    </div>
                )}
            </div>
        </div>
        </Layout>
    );
}

export default CryptoConverter;
