import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";


const Cart = () => {
    const [cart, refetch] = useCart()
    const handelDeleteCart = (c) => {
        console.log('cart delete', c);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/carts/${c._id}`,{
                        method:"DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                refetch()
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                            }
                        })
                    }
                })

                }
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
                                            <th>No.</th>
                                            <th>Food</th>
                                            <th>Item Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}

                                        {
                                            cart.map((c, index) => (
                                                <tr key={index}>
                                                    <th>
                                                        <label>
                                                            {index + 1}
                                                        </label>
                                                    </th>
                                                    <td>
                                                        <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle w-12 h-12">
                                                                    <img src={c.image} alt="Avatar Tailwind CSS Component" />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        {c.name}
                                                    </td>
                                                    <td>{c.quantity}</td>
                                                    <td>{c.price}$</td>
                                                    <td>
                                                        <button onClick={() => handelDeleteCart(c)} className="btn text-red"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                        </svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );
            };

        export default Cart;