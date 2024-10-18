import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './components/Airdrop';
import Floaters from './components/Floaters';
import Balance from './components/Balance';

function App() {
  return (
    <div className='relative p-4 bg-gradient-to-b from-[#000] to-[#3d1e87] w-full h-screen flex justify-center'>
      <div className='w-full h-full lg:w-[50%]'>
        <ConnectionProvider endpoint={import.meta.env.VITE_RPC_SERVER_URL}>
          <WalletProvider wallets={[]} autoConnect>
              <WalletModalProvider>
                <div className='flex flex-col gap-4 h-full'>
                  <Floaters />
                  <div className='flex justify-between items-center'>
                    <WalletMultiButton
                      className='text-sm lg:text-md flex' 
                      style={{
                        backgroundColor:'#3d1e87'
                      }}
                    />
                    <Balance />
                    <WalletDisconnectButton 
                      className='text-sm lg:text-md flex' 
                      style={{
                        backgroundColor:'#8a2b47'
                      }}
                    />
                  </div>
                  <div className='h-full flex flex-col justify-start items-center gap-16 lg:gap-32 mt-4 text-center'>
                    <div className='text-white'>
                      <h1 className='text-3xl m-8'>🌊 Welcome to the Solana Faucet!</h1>
                        <p className='text-md text-gray-500 lg:typing'>Get some SOL airdropped directly to your Devnet wallet. Perfect for testing your dApps and exploring the Solana ecosystem!</p>
                        <h2 className='m-4 mt-8 lg:mt-16 text-lg'>How to Use:</h2>
                        <ol>
                            <li className='m-2'>1. Connect your Devnet wallet.</li>
                            <li className='m-2'>2. Request your SOL airdrop.</li>
                            <li className='m-2'>3. Start building and experimenting on Solana!</li>
                        </ol>
                    </div>
                    <Airdrop />
                  </div>
                </div>
              </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </div>
    </div>
    
  )
}

export default App
