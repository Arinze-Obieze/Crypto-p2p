import { FaNairaSign } from "react-icons/fa6";
import Layout from "./Layout";

const Profile = () => {
    return (
        <Layout>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-8">
                <div className="flex justify-center">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="User Profile"
                        className="w-32 h-32 rounded-full border-4 border-yellow-500 dark:border-blue-700 transition-transform transform-gpu hover:scale-105"
                    />
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">John Doe</h1>
                    <p className="text-gray-600 dark:text-gray-200  flex justify-center space-x-1 place-items-center mt-1">
                        <FaNairaSign /> <h2>600,000,000</h2>
                    </p>
                </div>

                <div className="mt-4">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Profile Information</h2>
                    <div className="mt-4 space-y-4">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:scale-105 transition-transform transform-gpu">
                            <p className="text-gray-600 dark:text-gray-400">
                                <span className="font-semibold">Username:</span> johndoe123
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:scale-105 transition-transform transform-gpu">
                            <p className="text-gray-600 dark:text-gray-400">
                                <span className="font-semibold">Email:</span> johndoe@example.com
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:scale-105 transition-transform transform-gpu">
                            <p className="text-gray-600 dark:text-gray-400">
                                <span className="font-semibold">Location:</span> New York, USA
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="flex justify-between place-items-center">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Crypto Wallet</h2>

                        <div className="bg-white flex dark:bg-gray-200 rounded-lg shadow-md p-4 place-items-center space-x-1">
                            <h2> Total :</h2>  <FaNairaSign /> <h2> 60000</h2>
                        </div>

                    </div>
                    <div className="mt-4 space-y-4">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:scale-105 transition-transform transform-gpu">
                            <p className="text-gray-600 dark:text-gray-400">
                                <span className="font-semibold">BTC Balance:</span> 0.5 BTC
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:scale-105 transition-transform transform-gpu">
                            <p className="text-gray-600 dark:text-gray-400">
                                <span className="font-semibold">ETH Balance:</span> 5 ETH
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:scale-105 transition-transform transform-gpu">
                            <p className="text-gray-600 dark:text-gray-400">
                                <span className="font-semibold">USDT Balance:</span> 1000 USDT
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Profile;