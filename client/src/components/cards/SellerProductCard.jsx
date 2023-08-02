import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import Context from "../../Context";
import axios from "axios";

const priceFormat = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
});

const SellerProductCard = ({id, img, titulo, descripcion, precio}) => {
    const { usuario, userSells, setUserSells } = useContext(Context);
    const navigate = useNavigate();
    const url = "http://localhost:3000";

    const getData = async () => {
        const endpoint = `/users/${usuario.user_id}/ventas`;
        try {
          const { data: productList } = await axios.get(url + endpoint);
          setUserSells(productList);
        } catch (error) {
          console.log(error);
        }
      };

    const deleteProduct = async () => {
      const endpoint = `/users/${usuario.user_id}/ventas/${id}`;
      try {
        await axios.delete(url + endpoint);
        alert("Producto eliminado exitosamente");
        getData();
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <div className="flex flex-col justify-between bg-white h-90 p-3 rounded-xl relative shadow-md" id={id}> 
            <div>
                <img className="rounded-xl xl:h-44 w-full" src={img} alt="img" />
                <h3 className="text-lg font-medium my-2 mx-2">{titulo}</h3>
                <p className="text-sm mx-2 h-24">{descripcion}</p>
            </div>
            <div className="flex justify-between">
                <p className="text-xl font-extrabold mt-2 mx-2 bg-white text-sky-400">{priceFormat.format(precio)}</p>
                <p  onClick={deleteProduct} className="text-xl font-extrabold mt-2 mx-2 bg-white text-red-500 hover:cursor-pointer">Eliminar</p>
            </div>
        </div>

    )
}

export default SellerProductCard