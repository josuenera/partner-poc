import { OrderBaseMapper } from '../mappers/OrderBaseMapper';
import { PartnerFactory } from '../factories/PartnerFactory';
import { ProductFactory } from '../factories/ProductFactory';

export default function Home() {
  const rawData = {
    id: '1234',
    amount: 1000,
    partnerId: 'GALICIA',
  };
  const rawProduct = {
    id: 'CSF',
    name: 'Product 1',
    price: 100,
    description: 'Product 1 description',
    image: 'Product 1 image',
    longDescription: '',
  }

  const order = OrderBaseMapper.fromRaw(rawData);
  const product = ProductFactory.getProduct(rawProduct.id);
  const partner = PartnerFactory.getPartner(order.partnerId);
  const disclaimer = PartnerFactory.getDisclaimer(order.partnerId);

  partner.processOrder(order);
  const disclaimerText = disclaimer.getDisclaimerText();
  product.createProduct(rawProduct);
  console.log(product.variant);
  
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Partner PoC</h1>
      <p>Orden procesada: {order.id}</p>
      <p>Disclaimer: {disclaimerText}</p>
    </div>
  );
}