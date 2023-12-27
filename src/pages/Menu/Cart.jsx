

const Cart = () => {
    return (
        <div className="max-w-screen-2xl  mx-auto container justify-center">
            <div className="mt-28 ">
                {/* item added to the cart */}
                <div className="text-center items-center mx-auto space-y-4 px-7">
                    <h2 className="text-4xl font-bold">Items added to the  <span className="text-green">Cart</span></h2>
                </div>
            </div>
            {/* Items Table  */}
            <div className="mx-auto container lg:px-20 mt-28">
                <div className="overflow-x-auto">
                    <table className="table  mx-auto container max-w-screen-2xl">
                        {/* head */}
                        <thead className="bg-green mx-auto container max-w-screen-2xl">
                            <tr>
                                <th>#</th>
                                <th>Food</th>
                                <th>Item Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;