import { useEffect, useState } from "react";
import axios from "axios";

export default function ReportsTable({ startDate, endDate }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const warehouseId = "4905a54b-bfa3-42bd-8e82-6a9373058c0b";
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchProducts = async () => {
            if (!token) return;

            setLoading(true);

            try {
                const response = await axios.get(
                    `https://testwalldesign.limsa.uz/shop-requests/all-requests/byWarehouse/${warehouseId}`,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                        params: {
                            ...(startDate && { startDate: startDate.toISOString().split("T")[0] }),
                            ...(endDate && { endDate: endDate.toISOString().split("T")[0] }),
                        },
                    }
                );

                const items = response.data?.data;
                if (Array.isArray(items)) {
                    setProducts(items);
                    setError(false);
                } else {
                    setError(true);
                }
            } catch (error) {
                console.error("API hatası:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [token, startDate, endDate]);

    if (loading) return <div className="text-white p-4">Yuklanmoqda...</div>;
    if (error) return <div className="text-red-500 p-4">Hatolik yuz berdi</div>;

    return (
        <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full table-auto border-collapse bg-slate-800 text-white">
                <thead>
                    <tr className="bg-slate-700">
                        <th className="px-4 py-2 border border-slate-600 rounded-tl-lg">№</th>
                        <th className="px-4 py-2 border border-slate-600">Yuborgan ombor</th>
                        <th className="px-4 py-2 border border-slate-600">Qabul qilgan ombor</th>
                        <th className="px-4 py-2 border border-slate-600">Sana</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0 ? (
                        <tr>
                            <td
                                colSpan={4}
                                className="text-center text-xl text-white py-8"
                            >
                                Ma'lumot topilmadi
                            </td>
                        </tr>
                    ) : (
                        products.map((item, index) => (
                            <tr key={item.id} className="hover:bg-slate-600 transition">
                                <td className="px-4 py-2 border border-slate-700 text-center">
                                    {index + 1}
                                </td>
                                <td className="px-4 py-2 border border-slate-700 text-center">
                                    {item.article || "-"}
                                </td>
                                <td className="px-4 py-2 border border-slate-700 text-center">
                                    {item.batch_number || "-"}
                                </td>
                                <td className="px-4 py-2 border border-slate-700 text-center">
                                    {item.quantity || "-"}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
