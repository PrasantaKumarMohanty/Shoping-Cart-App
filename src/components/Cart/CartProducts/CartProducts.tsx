import { ICartProduct } from "models";
import CartProduct from "./CartProduct";

import * as S from "./style";

interface IProps {
  products: ICartProduct[];
}

const CartProducts = ({ products }: IProps) => {
  return (
    <S.Container>
      {products?.length ? (
        products.map((p) => <CartProduct product={p} key={p.sku} />)
      ) : (
        <>
          <S.CartProductsEmptyMsg>
            Your Cart is empty
          </S.CartProductsEmptyMsg>

          <S.CartProductsEmptySubMsg>
            Shop today’s deals
          </S.CartProductsEmptySubMsg>
        </>
      )}
    </S.Container>
  );
};

export default CartProducts;
