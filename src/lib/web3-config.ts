import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'One Africa Network',
  projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID || 'one-africa-network-demo',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: false,
});