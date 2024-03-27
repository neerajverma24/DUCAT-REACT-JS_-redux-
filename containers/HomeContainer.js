import { connect } from "react-redux";

import Home from "../components/Home";

import { addToCart } from "../service/actions/action";

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
})

const mapStateToProps = state => ({
    data: state

})

export default connect(mapStateToProps, mapDispatchToProps)(Home);