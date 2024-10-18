import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";


const Balance = () => {
    const {publicKey} = useWallet()
    const {connection} = useConnection()
    const [balance,setBalance] = useState(0.0000000)
    useEffect(() => {
        const getBalance = async () => {
            if (publicKey) {
                const balance = await connection.getBalance(publicKey);
                setBalance((prev)=>balance / LAMPORTS_PER_SOL)
            }
        };

        getBalance();
    }, [publicKey, connection]);
    
    return (
    <div>
        <p className='text-white'>
            {balance.toString()} SOL
        </p>
    </div>
  )
}

export default Balance