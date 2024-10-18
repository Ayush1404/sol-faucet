import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useToast } from "@/hooks/use-toast"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { useSetRecoilState } from "recoil"
import { balanceAtom } from "@/store/balanceAtom"

const Airdrop = () => {
    const wallet = useWallet()
    const {connection} = useConnection()
    const [amount,setAmount] = useState(0) 
    const [loading,setLoading] = useState(false)
    const setBalance = useSetRecoilState(balanceAtom)

    async function sendAirDrop(){ 
        if(!wallet || !wallet.publicKey) return;
        try{
            setLoading(true)
            await connection.requestAirdrop(wallet.publicKey,amount * 1000000000)
            
            toast({
                className:'bg-gradient-to-b from-[#4d1fa7] to-[#4d1e87] border-none text-white',
                title: "Transaction successful",
                description: `${amount} SOL recived succesfully`,
            })
            
            const balance = await connection.getBalance(wallet.publicKey);
            setBalance(()=>balance / LAMPORTS_PER_SOL)
            setAmount(0)

        }catch(err){
            console.log(err)
            toast({
                className:'bg-gradient-to-b from-[#8a2b47] to-[#8a203f] border-none text-white',
                title: "Error occured",
                description: `${err}`,
            })
        }finally{
            setLoading(false)
        }
    }
    
    const { toast } = useToast()

    return (
    <div className="flex gap-8 items-center">
        <Input disabled={!wallet.connected || loading} type="number" value={amount} onChange={(e)=>setAmount(Number(e.target.value))}></Input>
        <Button className="bg-[#481fa7] hover:bg-[#481fa7cc]" disabled={!wallet.connected || loading} onClick={() => sendAirDrop()}>
        {loading ? 'Requesting drop' : 'Airdrop'}
      </Button>
    </div>
  )
}

export default Airdrop