import { useState } from "react";
import { IoArrowUp, IoPieChart } from "react-icons/io5";
import Layout from "./Layout";
const AdminDashboard = () => {
    const [isEditUserModalOpen, setEditUserModalOpen] = useState(false);
    // Sample user data
    const userData = [
        {
            id: 1,
            firstName: 'Bonnie',
            lastName: 'Green',
            email: 'bonnie@example.com',
            phoneNumber: '+(123)456 789',
            department: 'Development',
            company: '123 Company',
            streetAddress: '1234 Elm St.',
            city: 'New York',
            zip: '10001',
            status: 'Offline',
        },
        {
            id: 2,
            firstName: 'Leslie',
            lastName: 'Livingston',
            email: 'leslie@flowbite.com',
            phoneNumber: '+(12)3456 789',
            department: 'SEO Specialist',
            company: '456 Company',
            streetAddress: '5678 Oak St.',
            city: 'Los Angeles',
            zip: '90001',
            status: 'Online',
        },
    ];



    return (
        <Layout>

            {/* <div>
                <div>
                    <IoStatsChart />
                    <h2>23 website Vistes</h2>
                </div>
            </div> */}


            <div className="grid grid-cols-2 mx-2 md:mx-8 dark:bg-gray-800 bg-gray-100 text-gray-700">


                <div className="">
                    <div className=" mx-4 mt-4 px-2 bg-white shadow-md py-2 pt-8" >
                        <div className="space-y-4">
                            <h1 className="text-sm font-serif">Daily Revenue</h1>

                            <span className="flex space-x-1 text-xl pl-8">
                                <IoArrowUp className="text-3xl text-green-600" />
                                <h3 className="font-serif">NGN 400,000</h3>
                            </span>

                            <div className="flex place-items-center">
                                <div className=" bg-gray-200 rounded-full h-2.5  w-[70%] mx-auto">
                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                                </div>
                                <h4>45%</h4>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mx-4 mt-4 px-2 font-serif bg-white shadow-md py-2 pt-8">
                    <h3 className="text-sm">Website visits</h3>
                    {/* <Views /> */}
                    <IoPieChart className="mx-auto text-[62px] text-green-800" />
                </div>

                <div className=" mx-4 mt-4 px-2 font-serif bg-white shadow-md py-2 pt-8" >
                    <div className="space-y-4">
                        <h1 className="text-sm">Total P2p Transactions</h1>

                        <span className="flex space-x-1 text-xl pl-8">
                            <IoArrowUp className="text-3xl text-green-600" />
                            <h3>30K</h3>
                        </span>

                        <div className="flex place-items-center">
                            <div className=" bg-gray-200 rounded-full h-2.5  w-[70%] mx-auto">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                            </div>
                            <h4>70%</h4>
                        </div>
                    </div>
                </div>


                <div className=" mx-4 mt-4 px-2 bg-white font-serif shadow-md py-2 pt-8" >
                    <div className="space-y-4">
                        <h1 className="text-sm">New Users</h1>

                        <span className="flex space-x-1 text-xl pl-8">
                            <IoArrowUp className="text-3xl text-green-600" />
                            <h3>3K</h3>
                        </span>

                        <div className="flex place-items-center">
                            <div className=" bg-gray-200 rounded-full h-2.5  w-[70%] mx-auto">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                            </div>
                            <h4>60%</h4>
                        </div>
                    </div>
                </div>

                <div className=" mx-4 mt-4 px-2 bg-white font-serif shadow-md py-2 pt-8" >
                    <div className="space-y-4">
                        <h1 className="text-sm">Reported Issue</h1>

                        <span className="flex space-x-1 text-xl pl-8">
                            <IoArrowUp className="text-3xl text-green-600" />
                            <h3>1</h3>
                        </span>

                        <div className="flex place-items-center">
                            <div className=" bg-gray-200 rounded-full h-2.5  w-[70%] mx-auto">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '4%' }}></div>
                            </div>
                            <h4>4%</h4>
                        </div>
                    </div>
                </div>

            </div>



            <div className="mt-12"> 

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
                        <div>
                            <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                <span className="sr-only">Action button</span>
                                Action
                                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                                </div>
                            </div>
                        </div>
                        <label for="table-search" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
                        </div>
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src="/p.jpeg" alt="Jese " />
                                    <div className="pl-3">
                                        <div className="text-base font-semibold">Neil Sims</div>
                                        <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                    </div>
                                </th>

                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Block user</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src="/p.jpeg" alt="Jese " />
                                    <div className="pl-3">
                                        <div className="text-base font-semibold">Bonnie Green</div>
                                        <div className="font-normal text-gray-500">bonnie@flowbite.com</div>
                                    </div>
                                </th>

                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" type="button" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Block user</a>
                                </td>
                            </tr>
                            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src="/p.jpeg"  alt="Jese " />
                                    <div className="pl-3">
                                        <div className="text-base font-semibold">Jese Leos</div>
                                        <div className="font-normal text-gray-500">jese@flowbite.com</div>
                                    </div>
                                </th>

                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" type="button" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Block user</a>
                                </td>
                            </tr> */}
                            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Jese " />
                                    <div className="pl-3">
                                        <div className="text-base font-semibold">Thomas Lean</div>
                                        <div className="font-normal text-gray-500">thomes@flowbite.com</div>
                                    </div>
                                </th>

                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" type="button" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Block user</a>
                                </td>
                            </tr> */}

                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Jese " />
                                    <div className="pl-3">
                                        <div className="text-base font-semibold">Leslie Livingston</div>
                                        <div className="font-normal text-gray-500">leslie@flowbite.com</div>
                                    </div>
                                </th>

                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" type="button" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Block user</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div id="editUserModal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative w-full max-w-2xl max-h-full">

                            <form action="#" className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Block user
                                    </h3>
                                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="editUserModal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                {/* <div className="p-6 space-y-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="first-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                            <input type="text" name="first-name" id="first-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie" required=""/>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                            <input type="text" name="last-name" id="last-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Green" required=""/>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                            <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@company.com" required=""/>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="phone-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                            <input type="number" name="phone-number" id="phone-number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. +(12)3456 789" required=""/>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                                            <input type="text" name="department" id="department" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Development" required=""/>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                                            <input type="number" name="company" id="company" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123456" required=""/>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="current-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password</label>
                                            <input type="password" name="current-password" id="current-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required=""/>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="new-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                                            <input type="password" name="new-password" id="new-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required=""/>
                                        </div>
                                    </div>
                                </div> */}


                                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save all</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>



            </div>



        </Layout>
    );
}

export default AdminDashboard;