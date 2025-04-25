import { PartnerFactory } from "../factories/PartnerFactory";
import { ProductFactory } from "../factories/ProductFactory";
import { OrderBaseMapper } from "../mappers/OrderBaseMapper";
const Dashboard = () => {
    const rawOrder = {
        id: 'cd5c1d64-1dcd51d-dv5ced1cd5662-cdcd61d',
        amount: 255102.51,
        partnerId: 'GALCIA'
    };

    const orderBase = OrderBaseMapper.fromRaw(rawOrder);
    const ProductType = ProductFactory.getProduct('CSF');
    const ProductA = ProductType.createProduct(ProductType);
    
    return (
        <div>
            Esta es una prueba del código dashboard
        </div>
    )
}

export default Dashboard;