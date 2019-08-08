import React, {useState, useEffect} from 'react';
import axios from 'axios';
function LandingPage() {
    const [product, setProduct] = useState([]);
    useEffect(() =>{
        axios.get('mockjson/data.js')
        .then(res => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch(err => {
            console.log('error from server--', err)
        })
    },[])
   
    return (
            <div className="container mt-1">
                <div className="row">
                    {/* <div className='col-sm-4'></div> */}
                    {product.map((pro) =>{
                        return(
                            //  <div className="col-sm-8">
                                <div className="product p-2 rounded-lg col-sm mr-2" key={pro.id}> 
                                    <div className='product-image'>
                                    <img src='https://via.placeholder.com/240' className="dummy-image" alt={pro.imageUrl}/>
                                     {/* Condition for checking discount from service, if greater than 0, then display */}
                                     {pro.discount>0 
                                     ? 
                                     <div className="discount-badge">
                                          <img src='assets/Icon 2.svg' alt='discount%'/>
                                     </div>
                                     :
                                     null
                                    } 
                                    </div>
                                    <div className='product-name pt-3 text-left'>{pro.name}</div>
                                    <div className='product-description text-left'>{pro.body}</div>
                                    <div className='product-rating pt-3 text-left'>
                                        <span> <img src='assets/RetinaIcon.svg' alt='rating star'/> </span>
                                        <span> <img src='assets/RetinaIcon.svg' alt='rating star'/> </span>
                                        <span> <img src='assets/RetinaIcon.svg' alt='rating star'/> </span>
                                        <span> <img src='assets/RetinaIcon.svg' alt='rating star'/> </span>
                                        <span> <img src='assets/RetinaIcon.svg' alt='rating star'/> </span>
                                        <span className="numeric-rating pl-1">({pro.rating})</span> 
                                    </div>
                                    <div className='product-price text-left pt-4'>${pro.price}</div>
                                    <button type='button' className='add-to-cart float-left mt-3'>Add to Cart</button>
                                </div>
                            //  </div>
                             
                        )
                    })}
                    
                </div>
            </div>
    )
}

export default LandingPage
