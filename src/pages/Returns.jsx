import { useEffect, useState } from "react";
import axios from "axios";
import { Package, CalendarDays } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReturnTable from "../components/ReturnTable";

export default function Returns() {
    const [shops, setShops] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null); // 📅

    const warehouseId = "4905a54b-bfa3-42bd-8e82-6a9373058c0b";
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchShops = async () => {
            if (!token) return;

            try {
                const response = await axios.get(
                    `https://testwalldesign.limsa.uz/shop/all-shops/${warehouseId}`,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                        params: { page: 1, limit: 100 },
                    }
                );

                const res = response.data?.data?.shops;

                if (Array.isArray(res)) {
                    setShops(res);
                } else {
                    console.warn("Данные магазинов не массив.");
                }
            } catch (err) {
                console.error("Ошибка при загрузке:", err);
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
        return <div className="text-red-500 p-4">Ma'lumotlar olinayotganda hatolik yuz berdi</div>;
    }

    return (
        <div className="bg-[#17212B] min-h-screen text-white">
            <div className="container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition duration-300 mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-3">
                            <Package size={32} />
                            <h3 className="text-base sm:text-lg font-medium">
                                Sotilgan maxsulotlar
                            </h3>
                        </div>

                        {/* 📅 Kalendar uchun */}
                        <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-md">
                            <CalendarDays size={20} />
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="yyyy-MM-dd"
                                placeholderText="Sanani tanlang"
                                className="bg-transparent focus:outline-none text-white"
                            />
                        </div>
                    </div>
                </div>

                <ReturnTable products={products} />
            </div>
        </div>
    );
}
