import Card from './Card';

const ProductDetail = () => {
  return (
    <div className="flex gap-5">
      {['1', '2', '3'].map(() => (
        <Card />
      ))}
    </div>
  );
};

export default ProductDetail;
