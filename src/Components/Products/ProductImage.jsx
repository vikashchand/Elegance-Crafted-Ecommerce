export const ProductImage=(props)=>{
    return(
        <>
        <div className="flex items-center justify-center">
            <img src={props.src} className="sm:w-[180px] h-[200px] m-1 mt-4 border rounded-xl "></img>
            </div>
        </>
    )
}