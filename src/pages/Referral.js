import Layout from "./Layout";

const Referral = () => {
    return (
        <Layout>
            <div className="bg-white  h-full  dark:bg-gray-800 dark:text-gray-200 shadow-md p-6 text-center">
                <h2 className="text-2xl font-semibold mb-4">Referral Program</h2>
                <p className="mb-4">
                    Invite your friends to join our crypto P2P platform and earn rewards!
                </p>

                <div className="flex justify-center pt-4 pb-12">
                    <div>
                        <h2 className="shadow-lg w-fit px-8 py-2">
                            f89289239219821892112981289</h2>
                    </div>

                    <button className="bg-yellow-600 dark:bg-blue-500 text-white rounded-md px-4 text-sm py-1 hover:bg-blue-600">
                        copy
                    </button>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4">Your Earnings</h2>

                    <div className="space-y-12">
                        <div className="shadow-xl py-6">Total Earnings: $0</div>
                        <div className="shadow-xl py-6">Total Referrals: 2</div>
                    </div>

                </div>
            </div>
        </Layout>
    );
}

export default Referral;