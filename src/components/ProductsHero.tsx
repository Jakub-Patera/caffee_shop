import ProductBagRed from '../assets/ProductBagRed.png'
import ProductBagBlack from '../assets/ProductBagBlack.png'
import ProductBagChrome from '../assets/ProductBagChrome.png'
import BeanssBottom from '../assets/beansBottom.png'

function ProductsHero() {
  return (
    <>
    <div className="h-screen">
    
    
        <div className="h-screen flex justify-center items-center flex-row">
          

            <div className="  flex justify-center items-center flex-row">
              <img src={ProductBagRed} alt="Tree 1" className="stack-image relative z-50 -right-[260px] hover:bottom-24  transform transition-all " />
              <div className="image-description absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-4 opacity-0 transition-opacity duration-800">
                <p>Description of Tree 1</p>
              </div>
            </div>
            <div className="image-container relative">
              <img src={ProductBagBlack} alt="Tree 2" className="stack-image relative z-40 hover:bottom-24 " />
              <div className="image-description absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-4 opacity-0 transition-opacity duration-300">
                <p>Description of Tree 2</p>
              </div>
            </div>
            <div className="image-container relative">
              <img src={ProductBagChrome} alt="Tree 3" className="stack-image relative z-20 -left-[180px] hover:bottom-24 " />
              <div className="image-description absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-4 opacity-0 transition-opacity duration-300">
                <p>Description of Tree 3</p>
              </div>
            </div>
            <div className=" relative  -left-[680px] -bottom-[220px]  z-10 ">
              <img src={BeanssBottom} alt="" className='' />
            </div>
          </div>
          
 
 
 

    

    </div>
    </>
  )
}

export default ProductsHero