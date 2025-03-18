
import { PopularProductCard } from "../components"
import { products } from "../constants"

const PopularProducts = () => {
    return (
        <section id="products"
            className="max-container max-sm:mt-12">
            <div className="flex flex-col justify-start gap-5">
                <h2 className="text-4xl 
                font-palanquin font-bold"> Our
                    <span className="text-coral-red"> Popular </span>Products</h2>
                <p className="lg:max-w-lg 
                font-montserrat text-slate-gray">Experience top notch quality
                    and style with all our products</p>
            </div>
            <div className="mt-16 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
                {products.map((product) => (
                    <PopularProductCard key={product.name}
                        {...product}
                    />
                ))}
            </div>
        </section>
    )
}

export default PopularProducts