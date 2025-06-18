import { useState } from "react";
import { FileChartColumnIncreasing, CalendarDays } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReportsTable from "../components/ReportsTable";

export default function Reports() {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return (
        <div className="bg-[#17212B] min-h-screen text-white">
            <div className="container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition duration-300 mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-3">
                            <FileChartColumnIncreasing size={32} />
                            <h3 className="text-base sm:text-lg font-medium">
                                Qo'yliq ombor ҳисоботлари
                            </h3>
                        </div>

                        {/* Başlangıç ve Bitiş tarih aralığı seçimi */}
                        <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-md">
                            <CalendarDays size={20} />
                            <DatePicker
                                selectsRange
                                startDate={startDate}
                                endDate={endDate}
                                onChange={(update) => setDateRange(update)}
                                dateFormat="yyyy-MM-dd"
                                placeholderText="Sana oralig'ini tanlang"
                                className="bg-transparent focus:outline-none text-white"
                                isClearable
                            />
                        </div>
                    </div>
                </div>

                {/* Bu iki tarihi ReportsTable bileşenine props olarak gönderiyoruz */}
                <ReportsTable startDate={startDate} endDate={endDate} />
            </div>
        </div>
    );
}
