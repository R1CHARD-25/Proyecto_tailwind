import Item from "../Item/Item"
import { getProducts } from "../../data/asyncMock"
import { useEffect, useState } from "react"
import Loading from "../Loading/Loading";

export default function ItemList({ products: initialProducts }){
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(!initialProducts);

    useEffect(() => {
        if(!initialProducts) {
            getProducts().then((data) =>{
                setProducts(data)
                setLoading(false)
            });
        }else{
            setLoading(false)
        }
    }, [initialProducts]);

    return(
        <>
            {loading ?(
                <div>
                    <Loading />
                </div>
            ):(
                <div className="flex flex-wrap justify-center items-center w-full">
                    {products.map((prod) =>(
                        <Item {...prod} key={prod.id}/>
                    ))}
                </div>
            )}

        </>
    )
}
