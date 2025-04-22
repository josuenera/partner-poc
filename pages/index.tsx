import { OrderBaseMapper } from '../mappers/OrderBaseMapper';
import { PartnerFactory } from '../factories/PartnerFactory';

export default function Home() {
  const rawData = {
    id: '1234',
    amount: 1000,
    partnerId: 'GALICIA',
  };

  const order = OrderBaseMapper.fromRaw(rawData);
  const partner = PartnerFactory.getPartner(order.partnerId);
  const disclaimer = PartnerFactory.getDisclaimer(order.partnerId);

  partner.processOrder(order);
  const disclaimerText = disclaimer.getDisclaimerText();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Partner PoC</h1>
      <p>Orden procesada: {order.id}</p>
      <p>Disclaimer: {disclaimerText}</p>
    </div>
  );
}