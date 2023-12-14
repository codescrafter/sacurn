import cloneDeep from 'lodash/cloneDeep';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import CustomButton from '@/components/CustomButton';
import LightLayout from '@/components/LightLayout';
import TotalPayment from '@/components/TotalPayment';
import { CartDetailResonse } from '@/libs/api';
import { CheckoutResult, useCartStore } from '@/store/cart';
import { ModalType, useModalStore } from '@/store/modal';
import { formatNumberByComma } from '@/util/helper';

const PaymentInformation = () => {
  const navigate = useNavigate();
  // clone it when entry this page
  const originalCartDetail = useCartStore((store) => store.cartDetail);
  const checkOutCart = useCartStore((store) => store.checkOutCart);
  const open = useModalStore((state) => state.open);

  const [cartDetail, setCartDetail] = useState<CartDetailResonse | null>(null);
  const [checkoutDetail, setCheckoutDetail] = useState<CheckoutResult['checkoutDetail']>(null);

  const isCheckout = useMemo(() => checkoutDetail !== null, [checkoutDetail]);

  useEffect(() => {
    if (!originalCartDetail) navigate('/cart');
    else setCartDetail(cloneDeep(originalCartDetail));
  }, []);

  const cartDetailComponent = useMemo(() => {
    return (
      <div className="box-shadow bg-white rounded-[10px] mt-5 h-[900px] xl:h-[800px] 2xl:h-[735px] flex flex-col justify-between py-5">
        <div>
          {cartDetail?.product_amount && (
            <div className="flex justify-between mb-2.5">
              <p className="border-l-[7px] border-pale-yellow pl-[20px] text-lg font-bold">商品共計</p>
              <p className="text-lg font-bold pr-7 font-istok-web">
                TWD {formatNumberByComma(cartDetail.product_amount.toString())}
              </p>
            </div>
          )}
          <div className="px-7">
            <p className="text-grey text-sm font-bold mb-5 font-istok-web">3項(以下含稅金5%及手續費)</p>
            {cartDetail?.product_list?.map((product) => (
              <TextRow
                key={product.name}
                title={product.name}
                value={`$ ${formatNumberByComma(product.amount.toString())}`}
              />
            ))}
          </div>
        </div>
        <div className="px-7">
          <TextRow title="手續費" value={`$ ${formatNumberByComma(cartDetail?.cost?.toString() as string)}`} />
          <TextRow title="稅金5%" value={`$ ${formatNumberByComma(cartDetail?.tax?.toString() as string)}`} />
          <div className="flex gap-4 justify-between">
            <p className="text-lg font-bold text-black">總付款金額</p>
            <p className="text-lg font-bold text-bright-red">
              TWD {formatNumberByComma(cartDetail?.total_amount?.toString() as string)}
            </p>
          </div>
        </div>
      </div>
    );
  }, [cartDetail]);

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
            const result = await checkOutCart(cartDetailComponent);
            if (result.isSuccess) setCheckoutDetail(result.checkoutDetail);
          }
        }
      ]
    });
  }, [cartDetailComponent]);

  return (
    <LightLayout>
      <div className="pt-7">
        <h2 className="text-[28px] border-l-4 pl-2 text-navy-blue">付款資訊</h2>
        <div className="grid grid-cols-3 gap-6">
          {/* First col */}
          {cartDetailComponent}
          {/* Second col */}
          <div className="box-shadow bg-white rounded-[10px] mt-5 h-[900px] xl:h-[800px] 2xl:h-[735px] flex flex-col justify-between py-5">
            <h4 className="text-xl font-bold text-navy-blue text-center font-istok-web">購買須知</h4>
            <div className="yellowScrollNoBg mr-2 overflow-scroll overflow-x-hidden mt-4">
              <div className="bg-neutral-150 m-4 rounded py-4 pl-1 pr-2">
                {PURCHASE_INFO_NOTE.map((note) => (
                  <div key={note.id} className="font-istok-web text-sm font-bold">
                    <div className="mb-1 flex gap-2 items-center px-2">
                      <p className="text-sm font-bold">{note.id}.</p>
                      <p className="text-sm font-bold">{note.title}</p>
                    </div>
                    <div>
                      {note.content.map((content) => (
                        <div key={content.id}>
                          <div className="flex mb-2 items-baseline gap-2 indent-8">
                            <p className="font-bold">{content.id}:</p>
                            <p className="indent-0 font-bold">{content.id === 1.2 ? content.title : content.detail}</p>
                          </div>
                          <div>
                            {content.id === 1.2 && (
                              <div>
                                {content.subContent?.map((x) => (
                                  <div className="flex gap-2 indent-16 items-baseline mb-2">
                                    <p>{x.id}:</p>
                                    <p key={x.id} className="indent-0">
                                      {x.detail}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <CustomButton
                onClick={onCheckOut}
                variant="rounded"
                isDisabled={isCheckout}
                className="text-xl font-bold"
              >
                {isCheckout ? '已確認' : '確認付款'}
              </CustomButton>
            </div>
          </div>
          {/* Third col */}
          {isCheckout && cartDetail?.total_amount && (
            <div className="box-shadow bg-white rounded-[10px] mt-5 h-[900px] xl:h-[800px] 2xl:h-[735px] flex flex-col justify-between py-5">
              <TotalPayment checkoutDetail={checkoutDetail} totalPrice={cartDetail?.total_amount} />
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
      <p className="text-lg font-bold text-grey w-[72%] font-istok-web">{title}</p>
      <p className="text-xl font-bold text-grey  w-[28%] whitespace-nowrap text-end font-istok-web">{value}</p>
    </div>
  );
};

export const PURCHASE_INFO_NOTE = [
  {
    id: 1,
    title: '注意事項',
    content: [
      {
        id: 1.1,
        title: '',
        detail:
          '會員確認並同意本條款構成《土星永續股份有限公司 會員服務條款》之附件，效力及於該會員服務條款，若有未盡事宜，請會員參考《土星永續股份有限公司 會員服務條款》之內容。'
      },
      {
        id: 1.2,
        title: '名詞定義',
        detail: '',
        subContent: [
          {
            id: '1.2.1',
            title: '買方',
            detail: '於本平台購買土星碳權憑證之會員。'
          },
          {
            id: '1.2.2',
            title: '賣方',
            detail: '於本平台銷售土星碳權憑證之會員。'
          },
          {
            id: '1.2.3',
            title: '土星碳權憑證銷售契約',
            detail: `
            係指買方與本公司間或賣方與本公司間因購買或銷售土星碳權憑證所成立之契約，以下稱「土星碳權憑證銷售契約」或「契約」。契約成立：當買方或本公司提出申購申請，而本平台顯示「待交付狀態」時，即成立買方與本公司間，或賣方與本公司間之土星碳權憑證銷售契約。
            `
          }
        ]
      },
      {
        id: 1.3,
        title: '',
        detail: '買方或賣方和本公司於本合約所建立的關係中係完全獨立之合約當事人，互無代理關係。'
      },
      {
        id: 1.4,
        title: '',
        detail:
          '本公司有權隨時變更、修訂或更新本條款內容。如會員不同意該等後續的變更、修訂或更新條款，會員仍可存取會員之交易記錄和土星碳權憑證，但會員可能無法繼續使用本公司提供之完整服務。如會員繼續使用本條款內容衍生之服務，即視為會員同意修正或更新後之本條款內容。'
      }
    ]
  },
  {
    id: 2,
    title: '購買土星碳權憑證',
    content: [
      {
        id: 2.1,
        title: '',
        detail: `
        買方於本平台選擇欲申購之土星碳權憑證，得於本平台頁面提出申購申請。本平台收到買方申購申請後，即於本平台顯示該土星碳權憑證為「待交付狀態」，此時買方與本公司間之土星碳權憑證銷售契約即為成立，買方應於待交付狀態顯示後[30分鐘內]將契約顯示之金額全額給付至本公司指定帳戶。若買方未於待交付狀態顯示後[30分鐘內]將契約顯示之金額全額給付至本公司指定帳戶，本公司有權但無義務而解除契約，且不承擔任何法律責任。`
      },
      {
        id: 2.2,
        title: '',
        detail: `本平台將於契約成立後，加計相關手續費、稅費等費用，買方應按最後計算之總金額付款。相關費用之計算，因各會員等級不同，故以平台公告為準，費用如有調整，本公司將於60日前以公告或電子郵件通知方式告知會員，會員若繼續使用本平台服務者，視同同意該更新之費用。`
      },
      {
        id: 2.3,
        title: '',
        detail: `買方擔保，其於提出申購申請前已知悉所購買之土星碳權憑證，且已完成內部相關條件，並完整有權限於本平台提出申購申請而成立契約。買方瞭解並同意，於契約成立後，除非本公司因買方未能付款而解除契約，否則買方均應按契約內容給付金額。`
      },
      {
        id: 2.4,
        title: '',
        detail: '買方僅得以現金、匯款方式依訂單內容所示金額匯款至本公司指定帳戶，付款方式均依本公司通知或本平台頁面所示'
      }
    ]
  },
  {
    id: 3,
    title: '銷售土星碳權憑證與價金',
    content: [
      {
        id: 3.1,
        title: '',
        detail:
          '會員得於自本平台購買而所持有之土星碳權憑證，並依本平台所指定方式自訂售價於本平台上架銷售，成為本平台之賣方。'
      },
      {
        id: 3.2,
        title: '',
        detail: `
        於上架土星碳權憑證後，當賣方收到本公司對該土星碳權憑證之申購申請，且該上架之土星碳權憑證於本平台頁面顯示「待交付狀態」時，本公司與賣方間之土星碳權憑證銷售契約即為成立，賣方應依該契約內容向本公司交付土星碳權憑證。`
      },
      {
        id: 3.3,
        title: '',
        detail: `
        賣方了解並同意，當契約成立時，賣方即不得修改該土星碳權憑證之交易條件，並同意本公司依契約內容移轉土星碳權憑證予本公司以完成交付土星碳權憑證，本公司將於土星碳權憑證完成交付後60分鐘內撥款至賣方帳戶。`
      },
      {
        id: 3.4,
        title: '',
        detail: `契約成立後[30分鐘內]，本公司得不附理由解除契約。當本公司依本條行使契約解除權時，該土星碳權憑證將回復契約未成立時之上架狀態，本公司無給付價金之義務。`
      },
      {
        id: 3.5,
        title: '',
        detail: `賣方擔保，其於事前已知悉其於本平台上架銷售之土星碳權憑證，且已完成公司內部相關條件，並完整有權限於本平台上架銷售土星碳權憑證予本公司。`
      },
      {
        id: 3.6,
        title: '',
        detail: `契約成立後，本公司有權收取交易手續費，並得逕行從本公司支付之款項中扣除賣家應給付之交易手續費及任何適用之稅款。相關費用之計算，因各會員等級不同，故以平台公告為準，費用如有調整，本公司將於60日前以公告或電子郵件通知方式告知會員，會員若繼續使用本平台服務者，視同同意該更新之費用。`
      },
      {
        id: 3.7,
        title: '',
        detail: `賣方了解並同意，本公司不因依第3.4條解除權之行使或賣方於本平台自行設定之交易條件而承擔任何法律或財務上之責任，包括但不限於任何價格波動、間接損失等。`
      },
      {
        id: 3.8,
        title: '',
        detail: `本公司原則上將依第3.3條所定期間給付款項給賣方，若因金融機構之作業期間致使該款項無法如期給付時，本公司將盡速通知賣方該遲延情形，惟本公司不因金融機構作業期間所致之遲延情形而承擔任何財務上及法律上之責任。`
      }
    ]
  },
  {
    id: 4,
    title: '本協議之終止',
    content: [
      {
        id: 4.1,
        title: '',
        detail: `除另有約定者，會員違反本協議內容情節重大者，包含但不限於訂單給付期限內未完成給付金額，或有相當事證足認有涉及違法之行為，或所提交之身份認證資料為虛偽並查證屬實者，本公司得對其暫停一部或全部之服務，並得終止本協議`
      },
      {
        id: 4.2,
        title: '',
        detail: `前條所謂違反本協議之約定情節重大，係指違約方違反本協議之義務，經本公司合法通知3次，未於本公司通知指定期限完成修正者，或違約方仍有違約行為者。`
      },
      {
        id: 4.3,
        title: '',
        detail: `會員資格如因第4.1條原因終止者，該會員應於終止後一個月內進行抵換之作業，或於上開期限內，本公司可將會員儲放於帳戶中製造年份五年內之土星碳權憑證以原始價格之40%買回，如本公司買回之價格低於買回時之市場價格，該價差視為懲罰性違約金，會員不得請求該差額。本公司將保留購回與否之決定權。
        `
      },
      {
        id: 4.4,
        title: '',
        detail: `如非因會員之違約而會員欲終止本協議時（提前終止或不欲續繳年費者），會員應依本平台公告之關於終止本協議及關閉／廢止帳戶之程序為之，如有土星碳權憑證仍存於會員帳戶，會員應於帳戶關閉作業期間於本平台中售出或於終止後一年內進行抵換之作業。`
      },
      {
        id: 4.5,
        title: '',
        detail: `如未能於帳戶關閉作業期間售出土星碳權憑證或於終止後一年內進行抵換者，本公司可於上開期限內，將會員儲放於帳戶中製造年份五年內之土星碳權憑證以原始價格之60%買回，或另以雙方同意之方式將土星碳權憑證予以抵換。本公司將保留購回與否之決定權。`
      },
      {
        id: 4.6,
        title: '',
        detail: `本公司得視情況調整附約內容，會員經通知後如不同意該等異動，該會員應以書面通知本公司之不同意意思表示，於本公司收到該不同意之意思表示時，即視為本協議終止，本公司將不予退還已收受之費用。
        `
      },
      {
        id: 4.7,
        title: '',
        detail: `除非雙方另有約定，本協議終止之效力，係指會員資格之終止，包括會員帳號之關閉／廢止，亦包含終止會員與本公司所簽署之土星永續股份有限公司會員服務條款、隱私權政策及Cookie政策，本公司即停止提供所有服務予會員，且不予退還本公司已收受之費用。`
      }
    ]
  }
];
