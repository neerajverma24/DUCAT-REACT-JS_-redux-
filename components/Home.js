import "./Home.css";

function Home(props) {
    console.log("Home data :",props.data.cartItem)
    return (
        <div className="wrapper">
            <div className="productDetails">
                <div className="cartIcon">
                    <span>{props.data.cartItem.length}</span>
                    <img src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png"/>
                </div>
                <div className="productItem">
                    <img src="https://m.media-amazon.com/images/I/41xnfQ6+TCL.jpg" />
                </div>
                <div className="produtInfo">
                    <span><b>Name :</b> Iphone 15</span><br/>
                    <span><b>Price :</b> 12345</span>
                </div>
                <div className="addToCartButton">
                    <button onClick={()=>props.addToCartHandler({name:"Iphone 15",price:12345})}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;