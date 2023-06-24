import plus from '@/public/images/products-page/plus.svg'
import location from '@/public/images/products-page/locationsmall.svg'
import verified from '@/public/images/products-page/verified.svg'
import Image from 'next/image';
import methodology from '@/public/images/products-page/methodology.svg'

function ProductDeatilView(props) {
  return (
    <div className="relative w-full flex flex-col mt-37">
    <div className="w-full flex flex-row justify-between">
        <div className="flex flex-col">
            <h1 className="text-4.5xl">{product.name}</h1>
            <p className='text-2.5xl font-thin'>{product.developer}</p>
        </div>
        <div className="flex flex-col">
            <div className="flex flex-row"><div className="rounded-full bg-pale-yellow h-12.7 w-12.7"><Image className='mx-auto' src={plus}/></div></div>
        </div>
    </div>
    <div className='flex flex-row mt-7.7 '>
        <div className='relative flex flex-col items-end -translate-x-9'>
            <div className='relative styledDiv py-5.2 px-17.7 items-center mb-4'>
                <h1 className='text-3.5xl mb-3.2 font-medium'>Profile</h1>
                <div className='flex flex-row mb-3'>
                    <Image className='mr-2.5' src={location}/>
                    <p className='text-base'>{product.profile.country}</p>
                </div>
                <div className='flex flex-row'>
                    <Image className='mr-1.2' src={verified}/>
                    <p className='text-base'>{product.profile.verification}</p>
                </div>
            </div>
            <div className="flex flex-col items-center py-4.7 pl-4 pr-6.2 styledDiv">
                <Image className="mb-2.7" src={methodology}/>
                <div className="text-right">
                <h1 className='text-3.5xl font-medium mb-2'>Methodology</h1>
                <h3 className='text-2xl font-medium  mb-0.7'>{product.methodology}</h3>
                <p className='w-59.2 text-base mb-2.5 font-thin'>{product.methodology_explaination}</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col">
            <div className="border border-white flex flex-col">
                <h1 className="text-3.5xl font-medium mt-6.2 ml-13 mb-3.5">About</h1>
                <div className='flex flex-row mb-8.2 mr-6.5'>
                    <div className='px-0.5 h-[60%] rounded-md bg-white ml-6.7 mr-4.2'></div>
                    <p className='2xl:w-[640px] text-2xl'>{product.about}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default ProductDeatilView;


const product={
    'name':'CarbonCure Concrete Mineralization',
    'developer':'Project developed by CarbonCure Technologies',
    'methodology':'Soil carbon',
    'methodology_explaination':'Soil carbon sequestration is the process of increasing organic and inorganic soil carbon through capturing and storing of carbon from plants.',
    'profile':{'country':'Indonisia','verification':'Not verified'},
    'about':'CarbonCure is an engineering technology company that is licensing its technology to cure CO2 into concrete production. CarbonCure sells its equipment, retrofitting manufacturers’ concrete plants. CarbonCure allows plants to be connected to a CO2 tank stored onsite and automatically injects a precise dosage of CO2 into the concrete during mixing.',
}