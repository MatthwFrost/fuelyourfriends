import { AiFillApple} from "react-icons/Ai";
import Link from "next/link";
import toast from 'react-hot-toast';

export default function Checkout(){

    return (
        <div className="checkout">
            <Link href="/paymentsuccess">
                <button className="btn-applepay" onClick={ButtonPayment}><AiFillApple color="white" size={20}/>Pay</button>
            </Link>
        </div>
    )
}

function ButtonPayment(){
    toast.success('payment successful') 
}