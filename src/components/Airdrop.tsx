import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useState } from "react"

const Airdrop = () => {
    const wallet = useWallet()
    const {connection} = useConnection()
    const [amount,setAmount] = useState(0) 

    async function sendAirDrop(){ 
        if(!wallet || !wallet.publicKey) return;
        try{
            await connection.requestAirdrop(wallet.publicKey,amount)
            console.log("success")
        }catch(err){
            console.log(err)
        }
    }
    return (
    <div>
        <> {wallet.publicKey?.toString()} </>
        <input type="number" value={amount} onChange={(e)=>setAmount(Number(e.target.value))}></input>
        <button onClick={sendAirDrop}>AirDrop</button>
    </div>
  )
}

export default Airdrop