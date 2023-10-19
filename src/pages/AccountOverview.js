import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Layout from "./Layout";

const AccountOverview = () => {
    const transactions = [
        { id: 1, type: 'Deposit', amount: 0.1, date: '2023-10-01' },
        { id: 2, type: 'Withdrawal', amount: 0.05, date: '2023-10-02' },
        // Add more transaction data here
    ];

    const p2pInfo = {
        balance: 0.2,
        pendingOrders: 3,
        // Add more P2P information here
    };

    return (
        <Layout>

        <div className="flex space-x-2">


            <div className="container flex flex-col justify-center mx-auto mt-4">

                <h2 className="text-2xl text-center font-semibold mb-4 text-yellow-500 font-serif">Account Overview</h2>

                <div className="bg-white p-4 rounded shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Current Balance</h3>
                    <p>Balance: {p2pInfo.balance} BTC</p>

                </div>

                <div className="bg-white p-4 mt-4 rounded shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">P2P Information</h3>
                    <div className="flex justify-between">
                        <div>
                            <p>Balance: {p2pInfo.balance} BTC</p>
                            <p>Pending Orders: {p2pInfo.pendingOrders}</p>
                            <p>Total No Buys : 20</p>
                            <p>Total No of Sells :30</p>
                            <p>Total Sales : 70,000</p>
                            <p>Total Buys : 50,000</p>
                        </div>
                        <div>
                            <h1>
                                Total Money Spent
                                <h2>800,000,000</h2>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-2">Transaction History</h3>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b">
                                <th className="py-2">ID</th>
                                <th className="py-2">Type</th>
                                <th className="py-2">Amount (BTC)</th>
                                <th className="py-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => (
                                <tr key={transaction.id} className="border-b">
                                    <td className="py-2">{transaction.id}</td>
                                    <td className="py-2">{transaction.type}</td>
                                    <td className="py-2">{transaction.amount}</td>
                                    <td className="py-2">{transaction.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </Layout>
    );
};

export default AccountOverview;
