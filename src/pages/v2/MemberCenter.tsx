import Layout from '@/components/v2/Layout';

import MemberCenterInput from './MemberCenterInput';

const MemberCenter = () => {
  return (
    <Layout>
      <form action="">
        <div className=" bg-[#FFFFFF] bg-opacity-80 rounded-lg border p-7 m-auto my-28 text-deepseablue w-[90%]">
          <div className="flex gap-5 ">
            {/* child 1 */}
            <div className=" flex flex-col gap-17 items-center">
              <h1 className="text-lg font-bold">| 新增使用者</h1>
              <div className="bg-deepseablue h-28 w-28 rounded-full flex justify-center items-center">
                <h2 className="text-[#FFFFFF]"> 更換照片</h2>
              </div>
            </div>
            {/* second child */}
            <MemberCenterInput />
            {/* Third Child */}
            <div className=" flex flex-col justify-between ">
              {/* third-child-1 */}
              <div className=" flex  justify-between items-center gap-2 mt-13">
                <label htmlFor="" className="font-bold text-xl">
                  操作權限
                </label>
                {/* <input type="select" name="" id="" className="rounded-full h-10 w-60 bg-white outline-none px-4" /> */}
                <div className="border w-60 h-10 rounded-full bg-white py-2 pl-4">
                  <select name="" id="">
                    <option value="">身份選擇</option>
                    <option value="">Saab</option>
                    <option value="">Mercedes</option>
                    <option value="">Audi</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className=" flex flex-col">
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" className="h-8 w-8" />
                    <label htmlFor="" className="font-bold text-base">
                      確認後無法修改, 系統將自動寄送email至指定信箱進行身分驗證。
                    </label>
                  </div>
                  <p className="text-sunset-orange ml-7 text-xs">請務必確認勾選此框。</p>
                </div>
                {/* third-child-2 */}
                <div className="flex justify-end gap-6 items-center">
                  <button className="border px-10 py-1 font-bold rounded-xl outline-none ">取消</button>
                  <button className="px-10 py-1 font-bold rounded-xl bg-deepseablue text-white outline-none ">
                    確認
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default MemberCenter;
