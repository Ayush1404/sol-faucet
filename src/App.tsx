import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './components/Airdrop';

function App() {
  return (
    <ConnectionProvider endpoint={import.meta.env.RPC_SERVER_URL}>
        <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
                <WalletMultiButton />
                <WalletDisconnectButton />
                <Airdrop />
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
