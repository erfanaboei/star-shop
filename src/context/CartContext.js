import React, { createContext, useContext, useState } from "react";
import { toast } from 'react-toastify';

const CartContext = createContext([]);
const SetCartContext = createContext();

function CartProvider(props) {
    const [cart, setCart] = useState([]);
    return (
        <CartContext.Provider value={[...cart]}>
            <SetCartContext.Provider value={setCart}>
                {props.children}
            </SetCartContext.Provider>
        </CartContext.Provider>
    );
}
function useCart() {
    return useContext(CartContext);
}
function useSetCart() {
    return useContext(SetCartContext);
}
function useCartAction() {
    const cart = useCart();
    const setCart = useSetCart();

    const OperationSuccess = (message) => {
        toast(message, {
            className: "custom-toast",
            draggable: true,
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 2000,
            bodyStyle: { color: "black", fontWeight: "bold" }
        });
    }
    const incrementProduct = (productId) => {
        const newCart = cart.map((item) => {
            if (productId === item.id) {
                item = {
                    ...item, count: item.count + 1
                }
                OperationSuccess("تعداد محصول مورد نظر افزایش یافت");
            }
            return item;
        });
        setCart(newCart);
    }
    const decrementProduct = (productId) => {
        const newCart = cart.map((item) => {
            if (productId === item.id) {
                if (item.count > 0) {
                    item = {
                        ...item, count: item.count - 1
                    }
                    OperationSuccess("تعداد محصول مورد نظر کاهش یافت");
                }
            }
            return item;
        });
        setCart(newCart);

    }
    const addProduct = (productId) => {
        if (!cart.find(c => c.id === productId)) {
            setCart(prevCart => [...prevCart, { id: productId, count: 1 }]);
            OperationSuccess("عملیات افزودن با موفقیت انجام شد");
        }
    }
    const removeProduct = (productId) => {
        if (cart.find(c => c.id === productId)) {
            let index = cart.findIndex((p) => p.id === productId);;
            let temp = cart.splice(index, 1);
            setCart([...cart, temp]);
            OperationSuccess("عملیات حذف با موفقیت انجام شد");
        }
    }
    const currentProductCount = (productId) => {
        // const productCount = cart.map((item) => {
        //     if (item.id === productId) {
        //         return item.count;
        //     }
        // });
        // return productCount
        let productCount = 0;
        for (let p = 0; p < cart.length; p++) {
            if (cart[p].id === productId) {
                productCount = cart[p].count;
            }
        }
        return productCount;
    }

    const allProductCount = cart.reduce(function (prev, current) {
        const output = parseInt(prev) + parseInt(current.count);
        return output;
    }, 0);

    return {
        addProduct,
        removeProduct,
        incrementProduct,
        decrementProduct,
        currentProductCount,
        allProductCount
    };
}

export { useCart, useSetCart, useCartAction };
export default CartProvider;