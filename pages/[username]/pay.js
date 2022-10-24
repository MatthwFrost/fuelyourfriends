import Checkout from "../../components/Checkout";
import Price from "../../components/Price";
import Userinfo from "../../components/UserInfo";

export default function PayPage({ }) {
  return (
    <main className="pay-content">
        <Userinfo/>
        <Price/>
        <Checkout/>
    </main>
  )
}