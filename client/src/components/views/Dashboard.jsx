import UserIcon from "@/components/icons/UserIcon";
import CartIcon from "@/components/icons/CartIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import DollarIcon from "@/components/icons/DollarIcon";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
        const navigate = useNavigate()
    
        const toDatos = () => navigate('/mis-datos')
        const toCompras = () => navigate('/mis-compras')
        const toFavoritos = () => navigate('/favoritos')
        const toVentas = () => navigate('/mis-ventas')


    return (
        <div className="container mx-auto mt-6">
            <h2 className="text-center font-medium text-2xl mb-8">Dashboard</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mx-auto w-fit mb-8">
                <div onClick={ toDatos } className="flex flex-col justify-end text-center mx-auto bg-white p-4 rounded-lg w-44 cursor-pointer hover:bg-gray-300">
                    <UserIcon className="w-20 mx-auto"/>
                    <h2 className="mt-3 text-sky-400 font-bold text-lg">Mis Datos</h2>
                </div>
                <div onClick={ toCompras } className="flex flex-col justify-end text-center mx-auto bg-white p-4 rounded-lg w-44 cursor-pointer hover:bg-gray-300">
                    <CartIcon className="w-20 mx-auto" />
                    <h2 className="mt-3 text-sky-400 font-bold text-lg">Mis Compras</h2>
                </div>
                <div onClick={ toFavoritos } className="flex flex-col justify-end text-center mx-auto bg-white p-4 rounded-lg w-44 cursor-pointer hover:bg-gray-300">
                    <HeartIcon stroke="#38bdf8" className="w-20 mx-auto" />
                    <h2 className="mt-3 text-sky-400 font-bold text-lg">Favoritos</h2>
                </div>
                <div onClick={ toVentas } className="flex flex-col justify-end text-center mx-auto bg-white p-4 rounded-lg w-44 cursor-pointer hover:bg-gray-300">
                    <DollarIcon className="w-12 mx-auto" />
                    <h2 className="mt-3 text-sky-400 font-bold text-lg">Mis Ventas</h2>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;