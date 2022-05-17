export default function HomePage() {
    return (
        <div className="bg-gray-200 h-screen flex justify-between">

            {/* SIDEBAR */}
            <div className="bg-white h-full w-[15%] shadow-xl">
                <div className=" h-[15%] border-b-2 border-black">
                    <h1 className="p-10">WISMALOKA</h1>
                </div>
                <div className="bg-red-400 h-[20%]">
                    <button></button>
                </div>
            </div>

            <div className=" h-full w-[85%]">

            {/* HEADER */}
                <div className=" h-[15%] flex justify-between items-center px-6">
                    <input
                        type="text"
                        className="h-8 rounded-3xl px-5 shadow-lg"
                        placeholder="Search..."
                    />
                    <img
                        src="https://sps.widyatama.ac.id/wp-content/uploads/2020/08/dummy-profile-pic-male1.jpg"
                        className="bg-gray-200 h-16 w-16 rounded-full flex items-center justify-center shadow-lg"
                    />
                </div>

                {/* BODY */}
                <div className="h-[85%] px-6 pb-3">
                    <div className="bg-white h-full rounded-3xl p-2 shadow-xl">
                        <table className="text-center w-full">
                            <thead>
                                <tr>
                                    <th>TEST</th>
                                    <th>TEST</th>
                                    <th>TEST</th>
                                    <th>TEST</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="border">
                                <tr>
                                    <td>TEST</td>
                                    <td>TEST</td>
                                    <td>TEST</td>
                                    <td>TEST</td>
                                    <td className="border">
                                        <select
                                            name=""
                                            className="w-[50%] text-center rounded-md p-1"
                                        >
                                            <option value="">Active</option>
                                            <option value="">inctive</option>
                                            <option value="">Sold</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button className="bg-green-400 w-[50%] p-1 rounded-md hover:bg-green-500 duration-200">Update</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
