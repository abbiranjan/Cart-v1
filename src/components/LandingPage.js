import React, {useState, useEffect} from 'react';
import axios from 'axios';

function LandingPage() {
    const [product, setProduct] = useState([]);
    const [addedItem, activateAddedItem] = useState(true);
    const [cartItemNumber, modifyCartItem]  = useState(0);
    useEffect(() =>{
        axios.get('mockjson/data.json')
        .then(res => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch(err => {
            console.log('error from server--', err)
        })
    },[])
    const removeItem = (index) => {
        if(product[index].selectedItem === 0) {
            product[index].selectedItem = 0;
        } else {
            // modifyCartItem(cartItemNumber-1);
            product[index].selectedItem = product[index].selectedItem-1;
            setProduct([...product])
        }
    }
    const addItem = (index) => {
        // modifyCartItem(cartItemNumber+1);
        product[index].selectedItem =  product[index].selectedItem+1;
        setProduct([...product])
    }
    const onAddingItem = (index) => {
        console.log(index);
        product[index].addToCart =true;
        setProduct([...product])
    }
    const onRemovingItem = (index) => {
        console.log(index);
        product[index].addToCart =false;
        setProduct([...product])
    }
   
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <header className='header-part col-sm-12 col-md-12 d-flex justify-content-between'>
                        <div className="poc-shop align-self-center">Poc Shop</div>
                        <div className="align-self-center cart-container d-flex"> 
                                <input type="text" className="search-bar"/>
                            <div className="align-self-center">
                                <img src='assets/MaterialIcon.svg' alt='cart-icon'></img>
                                <span className="total-cart-item">({cartItemNumber})</span>
                            </div>
                         </div> 
                    </header>
                </div>
            </div>
            <div className="container-fluid content-wrapper mt-1">
                <div className="row ml-0 mr-0">
                   <div className='col-sm-2 col-md-2 my-row'> 
                   {/* <div className="container filter-section">
                       <div className="row">
                            <div className="col filter-header">
                               Filters
                            </div>
                            <div className="w-100"></div>
                            <div className="col single-filter">
                                Category
                            </div>
                            <div className="w-100"></div>
                            <div className="col single-filter">
                                Price
                            </div>
                            <div className="w-100"></div>
                            <div className="col single-filter">
                                Rating
                            </div>
                            <div className="w-100"></div>
                            <div className="col single-filter">
                                Discounts / Offers
                            </div>
                            <div className="w-100"></div>
                        </div>
                    </div> */}
                    <div className="d-flex flex-column filter-section">
                        <div className="p-2 filter-header">Filters</div>
                        <div className="p-2 single-filter">Category</div>
                        <div className="p-2 single-filter">Price</div>
                        <div className="p-2 single-filter">Rating</div>
                        <div className="p-2"> Discounts / Offers</div>
                    </div>
                   </div>
                   <div className="col-sm-10 col-md-10">
                   <div className="row my-row">
                    {product.map((pro, index) =>{
                        return(
                              
                                <div className="product p-2 rounded-lg col-sm-3 my-col-3" key={index}> 
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
                                    <div className="mt-3">
                                        {pro.addToCart === false ?
                                         <button type='button' 
                                                className='add-to-cart float-left'
                                                onClick={onAddingItem.bind(this, index)}>
                                                Add to Cart
                                        </button> : 
                                        <button type='button' 
                                                className='remove-from-cart float-left'
                                                onClick={onRemovingItem.bind(this, index)}>
                                                Remove from Cart
                                        </button>} 
                                        <span className=''>
                                            <span className='remove-item hand' onClick={(e) =>removeItem(e.target.id)}>
                                                <img src='assets/FontAwesome47.svg' id ={index} alt='Remove Item'></img>
                                            </span>
                                            <span className='item-selected justify-content-center align-items-center'>{pro.selectedItem}</span>
                                            <span className='add-item ml-2 hand'  onClick={(e) => addItem(e.target.id)}>
                                                <img src='assets/PixleIcon.svg' id={index} alt='Add Item'></img>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                        )
                    })}
                    </div>
                    </div>
                </div>
                </div>
        </React.Fragment>    
    )
}

export default LandingPage
