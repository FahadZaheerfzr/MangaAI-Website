import { DAppProvider } from "@usedapp/core";
import "../styles/globals.css";
import { networkConfig } from "./config/networks";
import { ModalProvider } from "react-simple-modal-provider";
import ConnectionModal from "./modals/walletModal";

export default function App({ Component, pageProps }) {
  return (
    <DAppProvider config={networkConfig}>
      <ModalProvider value={[ConnectionModal]}>
        <Component {...pageProps} />
      </ModalProvider>
    </DAppProvider>
  );
}
