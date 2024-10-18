import { balanceAtom } from "@/store/balanceAtom";
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";


const Balance = () => {
    const wallet = useWallet()
    const {connection} = useConnection()
    const [balance,setBalance] = useRecoilState(balanceAtom)
    useEffect(() => {
        const getBalance = async () => {
            if (wallet.publicKey) {
                const balance = await connection.getBalance(wallet.publicKey);
                setBalance((prev)=>balance / LAMPORTS_PER_SOL)
            }
            else return 0;
        };

        getBalance();
    }, [wallet, connection,wallet.connected]);
    
    return (
    <div className="hidden lg:block">
        <p className='text-white'>
            {wallet.connected ? balance.toString() : 0} SOL
        </p>
    </div>
  )
}

export default Balance