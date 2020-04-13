import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product'
class Products extends React.Component {
    render() {
        var products = [
            {
                id: 1,
                slug: 'iphone',
                name: 'iphone X',
                price: '235000000'
            },
            {
                id: 2,
                slug: 'samsung',
                name: 'Samsung Galaxy S7',
                price: '26680000'
            },
            {
                id: 3,
                slug: 'oppo',
                name: 'Oppo F1s',
                price: '45000000'
            },
        ];
        var { match } = this.props;
        var url = match.url;
        var result = products.map((product, index) => {
            return (
                <NavLink to={`${url}/${product.slug}`} key={product.id}>
                    <li className="list-group-item" >
                        {product.id} - {product.name} - {product.price}
                    </li>
                </NavLink>
            )
        });


        // var {location} = this.props;
        return (
            <div className="container">
                <h1>Danh Sách Sản Phẩm</h1>
                <div className="row">
                    <ul className="list-group">
                        {result}
                    </ul>
                </div>
                <div className="row">
                    <Route path="/products/:slug" component={Product}></Route>
                </div>
            </div>
        );
    }
}
export default Products;
