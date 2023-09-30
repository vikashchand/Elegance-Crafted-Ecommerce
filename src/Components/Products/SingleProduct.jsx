import { useState } from "react"
import { ProductImage } from "./ProductImage";
import LinenSuit from "../../Images/LinenSuit.jpg";
export const SingleProduct = (props) => {
    const [imgColor, setImgColor] = useState(props.product.color[0]);
    return (
        <>
            <div className="flex flex-col sm:w-[230px] sm:h-[370px]  border border-solid md:m-4 sm:m-1 border-slate-300 rounded-xl border-3">
                <ProductImage src={LinenSuit} />
                <p className="text-[9px] font-extrabold font-mono ml-2 mt-2 text-slate-500">{props.product.type}</p>
                <h3 className="font-semibold ml-2 font-sans">{props.product.name}</h3>
                <div className="text-[7px] ml-2 mt-1 font-medium text-slate-500">"{props.product.description}"</div>
                <div className="ml-2 flex">
                    <div className="bg-blue-600 w-4 h-4 mt-2 mr-2 rounded-sm"></div>
                    <div className="bg-black w-4 h-4 mt-2 rounded-sm"></div>
                </div>
                <h3 className="text-[14px] font-semibold font-georgia text-slate-900 ml-2 m-1 ">Rs {props.product.price} per peice</h3>
            </div>
        </>
    )
}

