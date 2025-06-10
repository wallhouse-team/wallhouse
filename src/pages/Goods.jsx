import { Inbox, Search, File, X } from "lucide-react";
import GoodsTable from "../components/GoodsTable";
import SearchInput from "../components/SeacrhInput";

const Goods = () => {
  return (
    <div className="bg-black/50 min-h-screen">
      <div
        className="absolute inset-0 bg-cover h-screen bg-black bg-center blur-md z-0"
        style={{
          backgroundImage:
            "url('https://walldesign-tests-jgda.vercel.app/assets/bg-sklad-BclbMkb4.png')",
          zIndex: -1,
        }}
      ></div>

      <div className="relative container mx-auto flex gap-5 flex-col top-30  p-8 rounded-xl text-white text-center">
        <div className="flex items-center justify-between bg-white/10 rounded-xl p-4 hover:bg-white/30 transition-all duration-300 ease-in">
          <div className="flex items-center gap-5">
            <Inbox size={40} />
            <p className="text-xl font-semibold">Маҳсулотлар</p>
          </div>
          <SearchInput />
        </div>

        <div className="flex items-center justify-between p-4 bg-[#1E2939] rounded-md text-xl font-semibold">
          <p>Жами нарх: $2400.0</p> <p>Жами миқдор: 12</p>
        </div>

        <div className="flex justify-end">
          <button className="flex items-center gap-3 bg-[#00A63E] px-3 py-2 rounded-md cursor-pointer">
            <File />
            <p>Excel orqali yuklab olish</p>
          </button>
        </div>

        <GoodsTable />
      </div>
    </div>
  );
};

export default Goods;
