import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import CustomButton from '@/components/CustomButton';
import LightLayout from '@/components/LightLayout';
import TotalPayment from '@/components/TotalPayment';
import { CheckoutResult, useCartStore } from '@/store/cart';
import { ModalType, useModalStore } from '@/store/modal';

const PaymentInformation = () => {
  const navigate = useNavigate();
  const cartDetail = useCartStore((store) => store.cartDetail);
  const checkOutCart = useCartStore((store) => store.checkOutCart);
  const open = useModalStore((state) => state.open);

  const [checkoutDetail, setCheckoutDetail] = useState<CheckoutResult['checkoutDetail']>(null);

  const isCheckout = useMemo(() => checkoutDetail !== null, [checkoutDetail]);

  useEffect(() => {
    if (!cartDetail) navigate('/cart');
  }, []);

  const onCheckOut = useCallback(() => {
    open(ModalType.CheckOutConfirm, {
      buttons: [
        {
          text: '取消',
          isOutline: true
        },
        {
          text: '確認結帳',
          onClick: async () => {
            const result = await checkOutCart();
            if (result.isSuccess) setCheckoutDetail(result.checkoutDetail);
          }
        }
      ]
    });
  }, []);

  return (
    <LightLayout>
      <div className="pt-7">
        <h2 className="text-[28px] border-l-4 pl-2 text-navy-blue">付款資訊</h2>
        <div className="grid grid-cols-3 gap-6">
          {/* First col */}
          <div className="box-shadow bg-white rounded-[10px] mt-5 h-[900px] xl:h-[800px] 2xl:h-[735px] flex flex-col justify-between py-5">
            <div>
              <div className="flex justify-between mb-2.5">
                <p className="border-l-[7px] border-pale-yellow pl-[20px] text-lg font-bold">商品共計</p>
                <p className="text-lg font-bold pr-7">NT$ {cartDetail?.total_amount}</p>
              </div>
              <div className="px-7">
                <p className="text-grey text-sm font-bold mb-5">3項(以下含稅金5%及手續費)</p>
                {cartDetail?.product_list?.map((product) => (
                  <TextRow key={product.name} title={product.name} value={`$ ${product.amount}`} />
                ))}
              </div>
            </div>
            <div className="px-7">
              <TextRow title="手續費" value={`$ ${cartDetail?.cost}`} />
              <TextRow title="稅金5%" value={`$ ${cartDetail?.tax}`} />
              <div className="flex gap-4 justify-between">
                <p className="text-lg font-bold text-black">總付款金額</p>
                <p className="text-lg font-bold text-bright-red">NT$ {cartDetail?.total_amount}</p>
              </div>
            </div>
          </div>
          {/* Second col */}
          <div className="box-shadow bg-white rounded-[10px] mt-5 h-[900px] xl:h-[800px] 2xl:h-[735px] flex flex-col justify-between py-5">
            <h4 className="text-xl font-bold text-navy-blue text-center">購買須知</h4>
            <div className="yellowScrollNoBg mr-2 overflow-scroll overflow-x-hidden mt-4">
              <div className="bg-neutral-150 m-4 rounded pt-4">
                {PURCHASE_NOTES.map((note, index) => (
                  <div key={index} className="px-7 mb-7 text-black">
                    <p className="text-sm mb-3">{note.title}:</p>
                    <p className="text-sm indent-8">{note.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <CustomButton onClick={onCheckOut} variant="rounded" isDisabled={isCheckout}>
                {isCheckout ? '已確認' : '確認付款'}
              </CustomButton>
            </div>
          </div>
          {/* Third col */}
          {isCheckout && (
            <div className="box-shadow bg-white rounded-[10px] mt-5 h-[900px] xl:h-[800px] 2xl:h-[735px] flex flex-col justify-between py-5">
              <TotalPayment checkoutDetail={checkoutDetail} totalPrice={cartDetail?.total_amount || 0} />
            </div>
          )}
        </div>
        <div className="flex justify-end pt-5">
          <Link to="/cart">
            <CustomButton variant="outline" className="rounded-[10px] py-2 px-12 flex items-center text-xl gap-3">
              <img src="/images/certificate/left-arrow.svg" alt="download" />
              回上一頁
            </CustomButton>
          </Link>
        </div>
      </div>
    </LightLayout>
  );
};

export default PaymentInformation;

interface TextRowProps {
  title: string;
  value: string;
}

const TextRow = ({ title, value }: TextRowProps) => {
  return (
    <div className="flex gap-4 justify-between mb-5">
      <p className="text-lg font-bold text-grey w-[72%]">{title}</p>
      <p className="text-lg font-bold text-grey  w-[28%] whitespace-nowrap text-end">{value}</p>
    </div>
  );
};

const PURCHASE_NOTES = [
  {
    title: '購買須知1',
    content:
      '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容.....'
  },
  {
    title: '購買須知2',
    content:
      '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容.....'
  },
  {
    title: '購買須知3',
    content:
      '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容.....'
  },
  {
    title: '購買須知4',
    content:
      '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容.....'
  },
  {
    title: '購買須知5',
    content:
      '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容.....'
  },
  {
    title: '購買須知6',
    content:
      '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容.....'
  },
  {
    title: '購買須知7',
    content:
      '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容.....'
  },
  {
    title: '購買須知8',
    content:
      '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容.....'
  },
  {
    title: '購買須知9',
    content:
      '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容.....'
  },
  {
    title: '購買須知10',
    content:
      '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容.....'
  },
  {
    title: '購買須知11',
    content:
      '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容.....'
  }
];
