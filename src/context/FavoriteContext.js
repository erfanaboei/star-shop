import React, { useState , useContext, createContext } from "react";
import { toast } from "react-toastify";
const FavoriteContext = createContext([]);
const SetFavoriteContext = createContext();

// console.log("<FavoriteContext/> rendered");

function FavoriteProvider(props) {
    const [favorite, setFavorite] = useState([]);
    return (
        <FavoriteContext.Provider value={favorite}>
            <SetFavoriteContext.Provider value={setFavorite}>
                {props.children}
            </SetFavoriteContext.Provider>
        </FavoriteContext.Provider>
    );
}
function useFavorite() {
    return useContext(FavoriteContext);
}
function useSetFavorite() {
    return useContext(SetFavoriteContext);
}
function useFavoriteAction() {
    const favorite = useFavorite();
    const setFavorite = useSetFavorite();

    const OperationSuccess = (message) => {
        toast(message, {
            className: "Success",
            autoClose: 2000,
            bodyStyle: { color: "black", fontWeight: "bold" },
            position: toast.POSITION.BOTTOM_LEFT,
            draggable: true
        })
    }

    const toggleFavorite = (id) => {
        if (!favorite.includes(id)) {
            setFavorite(prevFavorite => [...prevFavorite, id]);
            OperationSuccess("محصول شما به لیست علاقه مندی ها اضافه شد");
        } else {
            let index = favorite.indexOf(id);
            let temp = favorite.splice(index, 1);
            setFavorite(prevFavorite => [...prevFavorite, temp]);
            OperationSuccess("محصول شما از لیست علاقه مندی ها حذف شد");
        }
    }
    return { toggleFavorite }
};


export { useFavorite, useSetFavorite, useFavoriteAction }
export default FavoriteProvider;