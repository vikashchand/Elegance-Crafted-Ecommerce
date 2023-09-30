import React from "react";
import { FaApple } from "react-icons/fa";

import s from "../../Images/LinenSuit.jpg"
import f from "../../Images/PremiumSuit.jpg"

const Cart=()=>{
    return(
        <div id="cart-page" className=" md:w-screen h-screen w-[450px]">
            <div className="flex md:flex-row flex-col md:w-full w-[450px] h-full md:text-sm text-lg font-medium ">

 {/* Detail entering page  */}

                <div className=" md:w-[950px] w-[450px] h-full ">
                    <div id="checkout-form" className="md:w-[600px] w-[450px] h-[650px] md:ml-[200px] md:mt-[50px]   ">
                        <button className="  md:w-[500px] w-[330px] md:h-[40px] h-[50px]  md:mt-[20px] mt-[70px] ml-[50px] font-bold bg-white rounded-lg border-solid text-lg border-2 hover:bg-slate-100 flex md:pl-[200px] pl-[100px] gap-2 md:pt-1 pt-2 ">
                            <FaApple className="w-[25px] h-[25px]"/>
                            <h1 className="md:pt-0">Apple pay</h1>
                        </button>
                        <hr className="mt-10 md:w-[350px] w-[250px] md:ml-32 ml-24 border-gray-400"></hr>
                        <div className="flex flex-col ml-[50px] mt-10 gap-2 md:gap-0">
                            <h1>Name</h1>
                            <input type="text" placeholder="Enter your username" className=" md:w-[500px] w-[330px] md:h-[40px] h-[50px]  font-normal border-2 pl-3 focus:outline-none focus:shadow-md rounded-md md:text-sm text-lg"></input>
                        </div>
                        <div className="flex flex-col ml-[50px] md:mt-4 mt-6 gap-2 md:gap-0">
                            <h1>Name on card</h1>
                            <input type="text" placeholder="Enter card holder's name" className=" md:w-[500px] w-[330px] md:h-[40px] h-[50px]  font-normal border-2 pl-3 focus:outline-none focus:shadow-md rounded-md md:text-sm text-lg"></input>
                        </div>
                        <div className="flex flex-col ml-[50px] md:mt-4 mt-6 gap-2 md:gap-0">
                            <h1>Card number</h1>
                            <input type="text" placeholder="Enter card number" className=" md:w-[500px] w-[330px] md:h-[40px] h-[50px]  font-normal border-2 pl-3 focus:outline-none focus:shadow-md rounded-md md:text-sm text-lg" ></input>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex flex-col ml-[50px] md:mt-4 mt-6 gap-2 md:gap-0">
                                <h1>Expiration date</h1>
                                <input type="text" placeholder="Enter the date" className="md:w-[220px] w-[150px] md:h-[40px] h-[50px]  font-normal border-2 pl-3 focus:outline-none focus:shadow-md rounded-md text-sm" ></input>
                            </div>
                            <div className="flex flex-col md:ml-[60px] ml-[29px] md:mt-4 mt-6 gap-2 md:gap-0">
                                <h1>CVC</h1>
                                <input type="password" placeholder="Enter the three digits" className="md:w-[220px] w-[150px] md:h-[40px] h-[50px]  font-normal border-2 pl-3 focus:outline-none focus:shadow-md rounded-md text-sm" ></input>
                            </div>
                        </div>
                        <div className="flex flex-col ml-[50px] md:mt-4 mt-6 gap-2 md:gap-0">
                            <h1>Address</h1>
                            <input  type="text" placeholder="Street,no" className=" md:w-[500px] w-[300px] md:h-[40px] h-[50px]  font-normal border-2 pl-3 focus:outline-none focus:shadow-md rounded-md md:text-sm text-lg" ></input>
                        </div>
                        <div className="flex md:flex-row flex-col">
                            <div className="flex flex-col ml-[50px] md:mt-4 mt-6 gap-2 md:gap-0">
                                <h1>City</h1>
                                <input placeholder="Enter city" className="md:w-[150px] w-[200px] md:h-[40px] h-[50px]  font-normal border-2 pl-3 focus:outline-none focus:shadow-md rounded-md md:text-sm text-lg" ></input>
                            </div>
                            <div className="flex flex-col md:ml-[25px] ml-[50px] md:mt-4 mt-6 gap-2 md:gap-0">
                                <h1>Country</h1>
                                <input type="text" placeholder="Enter your country" className="md:w-[150px] w-[200px] md:h-[40px] h-[50px]  font-normal border-2 pl-3 focus:outline-none focus:shadow-md rounded-md md:text-sm text-lg" ></input>
                            </div>
                            <div className="flex flex-col md:ml-[25px] ml-[50px] md:mt-4 mt-6 gap-2 md:gap-0">
                                <h1>Postal code</h1>
                                <input type="text" placeholder="Postal code" className="md:w-[150px] w-[200px] md:h-[40px] h-[50px]  font-normal border-2 pl-3 focus:outline-none focus:shadow-md rounded-md md:text-sm text-lg" ></input>
                            </div>     
                        </div>
                        <div className="md:mt-4 mt-8 ml-[50px]">
                            <input  type="checkbox" className=" mr-3"></input>
                            <label className="text-sm ">Billing address is the same as shipping address</label>
                        </div>
                        <button className="  md:w-[500px] w-[330px] md:h-[40px] h-[50px] md:mt-[20px] mt-[30px] ml-[50px] font-bold bg-slate-800 hover:bg-slate-950 text-white rounded-lg text-sm">Pay $1,560</button>
                    </div>
                </div>



{/* Product detail overview display page  */}

                <div className=" md:w-[550px] w-[450px] md:mt-0 mt-[550px] md:h-full h-[950px] md:pb-[0px]  pb-[150px] bg-slate-900 ">
                    <div className=" w-full h-[400px]  pt-5 ">
                        <div className="w-[400px] h-[330px]  md:ml-[70px] ml-[50px] flex flex-col  text-white ">
                            <div className="w-full h-[150px]  mt-[30px] flex md:mb-4  mb-20">
                                <div className="md:w-[150px] md:h-[150px] w-[180px] h-[180px] bg-orange-100 rounded-lg">
                                    <img src={s} alt="PremiumSuit.jpg"></img>
                                </div>
                                <div className="flex flex-col gap-1 ml-4">
                                    <div>
                                        <h1>Premium Suit</h1>
                                        <h1>$790</h1>
                                    </div>
                                    <h3>Wool</h3>
                                    <h3>Size: M</h3>
                                    <div className="flex gap-2">
                                        <button className="hover:bg-white  w-[70px] h-[30px] hover:text-black rounded-md text-xs font-medium bg-gray-700  border-solid border-2 border-gray-400 text-white">Edit</button> 
                                        <button className="hover:bg-white  w-[70px] h-[30px] hover:text-black rounded-md text-xs font-medium border-solid border-2 border-gray-400 text-white">Remove</button>
                                    </div>
                                </div>
                            </div>


                            <hr className=" border-1 md:w-[300px] w-[250px] md:ml-[50px] ml-[20px] border-slate-400"></hr>
                            

                            <div className="w-full h-[150px] md:mt-[20px] mt-[45px] flex ">
                                <div className="md:w-[150px] md:h-[150px] w-[180px] h-[180px] bg-orange-100 rounded-lg">
                                    <img src={f}alt="LinenSuit.jpg"></img>
                                </div>
                                <div className="flex flex-col gap-1 ml-4">
                                    <div>
                                        <h1>Linen Suit</h1>
                                        <h1>$790</h1>
                                    </div>
                                        <h3>Wool</h3>
                                        <h3>Size: XL</h3>
                                        <div className="flex gap-2 ">
                                            <button className="hover:bg-white  w-[70px] h-[30px] hover:text-black rounded-md text-xs font-medium bg-gray-700  border-solid border-2 border-gray-400 text-white">Edit</button> 
                                            <button className="hover:bg-white  w-[70px] h-[30px] hover:text-black rounded-md text-xs font-medium border-solid border-2 border-gray-400 text-white">Remove</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className=" md:w-[400px] w-[330px] h-[300px] md:ml-[70px] ml-[50px] md:mt-[10px] mt-[150px] text-white font-medium md:text-sm text-lg">
                        <div>
                            <h1>Discount</h1>
                            <input className="w-[250px] md:h-[37px] h-[45px] focus:outline-none focus:shadow-sm md:text-sm text-lg font-normal rounded-md pl-2 mr-3 mt-1 text-black"></input><label><button className=" w-[40px] h-[30px] rounded-md md:text-xs text-sm font-medium text-white hover:text-gray-500">Apply</button></label>
                        </div>
                        <div className="flex flex-col w-full h-[200px] mt-[30px] gap-2 ">
                            <div className="flex justify-between text-lg font-light">
                                <h1>Subtotal</h1>
                                <h1>$1580</h1>
                            </div>
                            <div className="flex justify-between text-lg font-light">
                                <h1>Discount<button className="hover:bg-white  w-[70px] h-[20px] hover:text-black rounded-md text-xs font-medium bg-gray-700 ml-3 border-solid border-2 border-gray-400">Get lucky</button>  </h1>
                                <h1>-$30</h1>
                            </div>
                            <div className="flex justify-between text-lg font-light">
                                <h1>Tax estimate</h1>
                                <h1>$0</h1>
                            </div>
                            <div className="flex justify-between text-lg font-light">
                                <h1>Shipping estimate</h1>
                                <h1>$10</h1>
                            </div>
                            <div className="flex justify-between md:text-lg text-xl mt-[30px] font-semibold ">
                                <h1>Order total</h1>
                                <h1>$1560</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export  default Cart;

