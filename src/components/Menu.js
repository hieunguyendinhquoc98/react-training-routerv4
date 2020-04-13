import React from 'react';
import { Route, Link } from 'react-router-dom';


const menus = [
    {
        to: '/',
        label: 'Trang Chủ',
        activeOnlyWhenExact: true
    },
    {
        to: '/about',
        label: 'Giới Thiệu',
        activeOnlyWhenExact: false
    },
    {
        to: '/contact',
        label: 'Liên Hệ',
        activeOnlyWhenExact: false
    },
    {
        to: '/products',
        label: 'Sản Phẩm',
        activeOnlyWhenExact: false
    },
    {
        to: '/login',
        label: 'Đăng Nhập',
        activeOnlyWhenExact: false
    }
]

const MenuLink = ({ label, to }) => {
    return (
        <Route
            exact path={to}  children={
                ({ match }) => {
                    var active = match ? 'active abc' : ''
                    return (
                        <li className={`${active}`}> {/* ES6 */}
                            <Link to={to} className="my-link">
                                {label}
                            </Link>
                            {/* <a href="/">Trang Chủ</a> */}
                        </li>
                    )
                }
            }
        ></Route>
    )
}
class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    {this.showMenu(menus)}
                </ul>
            </nav>
        );
    }
    showMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.label} 
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}></MenuLink>
                )
            })
        }
        return result;
    }
}
export default Menu;
