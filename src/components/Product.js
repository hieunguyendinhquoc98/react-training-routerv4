import React from 'react';
;

class Product extends React.Component{
    render() {
        var {match} = this.props;
        console.log(match);
        var name = match.params.slug;
        return (
            <div className="App">
                <h1>This is detailed product: { name } </h1>
            </div>
        );
    }
}
export default Product;
