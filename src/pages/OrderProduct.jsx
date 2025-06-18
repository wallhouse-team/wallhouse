import { useEffect, useState } from 'react';
import axios from 'axios';
import { Warehouse } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchInput from '../components/SeacrhInput';

const OrderProduct = () => {
    const [shops, setShops] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const warehouseId = '4905a54b-bfa3-42bd-8e82-6a9373058c0b';
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchShops = async () => {
            try {
                const response = await axios.get(
                    `https://testwalldesign.limsa.uz/shop-requests/all-requests/byWarehouse/${warehouseId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const res = response.data?.data?.shops;

                if (Array.isArray(res)) {
                    setShops(res);
                } else {
                    setShops([]); // veri boşsa, boş set et
                }
            } catch (err) {
                console.error('Xatolik:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchShops();
    }, [token]);

    if (loading) {
        return <div className="text-white p-4">Yuklanmoqda...</div>;
    }

    if (error) {
        return (
            <div className="text-red-500 p-4">
                Ma'lumotlar olinayotganda hatolik yuz berdi
            </div>
        );
    }

    return (
        <div className="bg-[#17212B] min-h-screen text-white">
            <div className="container mx-auto p-8">
                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4 hover:bg-white/30 transition-all duration-300 ease-in mb-6">
                    <div className="flex items-center gap-5">
                        <Warehouse size={40} />
                        <p className="text-xl font-semibold">Omborlar</p>
                    </div>
                    {/* Arama inputu özelleştirilmiş placeholder ile */}
                    <SearchInput placeholder="Ombor nomi orqali qidiring" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {shops.length === 0 ? (
                        <div className="col-span-3 text-center text-white p-8">
                            <p className="text-2xl font-semibold">Ombor topilmadi</p>
                        </div>
                    ) : (
                        shops.map((shop) => (
                            <Link
                                key={shop.id}
                                to="return"
                                className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-all cursor-pointer block"
                            >
                                <h3 className="text-lg font-medium">{shop.name}</h3>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default OrderProduct;
