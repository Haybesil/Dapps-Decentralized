import React, { useState } from 'react';
import Coincomp from '../coincomps/Coincomps';
import Ellipal from '../../assets/images/ellipal.png';
import Solo from '../../assets/images/solo.jpg';
import XUMM from '../../assets/images/XUMM.jpg';
import Dione from '../../assets/images/dione.jpg';
import Eternal from '../../assets/images/eternal.jpg';
import Yoroi from '../../assets/images/yorio.jpg';
import Nami from '../../assets/images/nami.jpg';
import Sparrow from '../../assets/images/sparrow.jpg';
import Samourai from '../../assets/images/samourai.png';
import Keystone from '../../assets/images/keystone.jpg';
import Specter from '../../assets/images/specter.jpg';
import Blockstream from '../../assets/images/stream.jpg';
import Kelpr from '../../assets/images/kelpr.jpg';
import Xportal from '../../assets/images/xportal.jpg';
import Lace from '../../assets/images/Lace.jpg';
import Exodus from '../../assets/images/exodus.jpg';
import Bit from '../../assets/images/box.jpg';
import Safepal from '../../assets/images/safepal.png';
import Terra from '../../assets/images/terra.jpg';
import Wallet from '../../assets/images/wallet.jpg';
import Trust from '../../assets/images/trust_wallet.jpg';
import Meta from '../../assets/images/metamask.jpg';
import Flint from '../../assets/images/Flint.jpg';
import Binance from '../../assets/images/binance.png';
import Polygon from '../../assets/images/polygon.jpg';
import Rainbow from '../../assets/images/rainbow.jpg';
import Bitp from '../../assets/images/bitpay.jpg';
import Walleth from '../../assets/images/walleth.jpg';
import Argent from '../../assets/images/argent.jpg';
import Huobi from '../../assets/images/huobi.jpg';
import Encrypted from '../../assets/images/encrypted_ink.jpg';
import Compound from '../../assets/images/compound.jpg';
import Polka from '../../assets/images/polkadot.jpg';
import Iotex from '../../assets/images/iotex.jpg';
import Coin98 from '../../assets/images/coin98.jpg';
import Coinbase from '../../assets/images/coinbase.png';
import Crypto from '../../assets/images/crypto.jpg';
import Token from '../../assets/images/token_pocket.jpg';
import Math from '../../assets/images/math_wallet.jpg';
import Ledger from '../../assets/images/ledger_live.jpg';
import lnch from '../../assets/images/1inch.jpg';
import Dharma from '../../assets/images/dharma.jpg';
import Vault from '../../assets/images/trust_vault.jpg';
import Mykey from '../../assets/images/mykey.jpg';
import Atomic from '../../assets/images/atomic.jpg';
import Coolwallet from '../../assets/images/cool_wallet_s.jpg';
import Nash from '../../assets/images/nash.jpg';
import Coinomi from '../../assets/images/coinomi.jpg';
import Gridplus from '../../assets/images/gridplus.jpg';
import Tokenary from '../../assets/images/tokenary.jpg';
import Safe from '../../assets/images/safepal.jpg';
import Infinito from '../../assets/images/infinito.jpg';
import walletio from '../../assets/images/wallet_io.jpg';
import Ownbit from '../../assets/images/ownbit.jpg';
import Easy from '../../assets/images/easypocket.jpg';
import Bridge from '../../assets/images/bridge_wallet.jpg';
import Via from '../../assets/images/via_wallet.jpg';
import Bitkeep from '../../assets/images/bitkeep.jpg';
import Unstoppable from '../../assets/images/unstoppable_wallet.jpg';
import Halo from '../../assets/images/halodefi_wallet.jpg';
import Dok from '../../assets/images/dok_wallet.jpg';
import Cello from '../../assets/images/celo_wallet.jpg';
import Coinus from '../../assets/images/coinus.jpg';
import Valora from '../../assets/images/valora.jpg';
import Trustee from '../../assets/images/trustee_wallet.jpg';
import Gaurda from '../../assets/images/guarda_wallet.jpg';
import Maiar from '../../assets/images/maiarwallet.png';
import Jade from '../../assets/images/jade_wallet.jpg';
import Plasma from '../../assets/images/plasmapay.jpg';
import Wallet03 from '../../assets/images/o3_wallet.jpg';
import Hash from '../../assets/images/hashkey_me.jpg';
import Rwallet from '../../assets/images/rwallet.jpg';
import Flare from '../../assets/images/flare_wallet.jpg';
import kyber from '../../assets/images/kyberswap.jpg';
import Atoken from '../../assets/images/atoken_wallet.jpg';
import Tongue from '../../assets/images/tongue_wallet.jpg';
import Xinfin from '../../assets/images/xinfin.jpg';
import Talken from '../../assets/images/talken_wallet.jpg';
import Keyring from '../../assets/images/keyring_pro.jpg';
import Midas from '../../assets/images/midas_wallet.jpg';
import Atwallet from '../../assets/images/at_wallet.jpg';
import Imtoken from '../../assets/images/imtoken.jpg';
import Others from '../../assets/images/other.jpg';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Coins = () => {
  // Define data in the parent component
  const [data, setData] = useState([
    { src: Ellipal, id: 'Ellipal.com', name: 'Ellipal'},
    { src: Solo, id: 'Solo Dex', name: 'Solo Dex'},
    { src: XUMM, id: 'XUMM', name: 'XUMM'},
    { src: Dione, id: 'Dione', name: 'Dione'},
    { src: Eternal, id: 'Eternal Wallet', name: 'Eternal Wallet'},
    { src: Yoroi, id: 'Yoroi Wallet', name: 'Yoroi Wallet'},
    { src: Nami, id: 'Nami Wallet', name: 'Nami Wallet'},
    { src: Sparrow, id: 'Sparrow', name: 'Sparrow'},
    { src: Samourai, id: 'Samourai', name: 'Samourai'},
    { src: Keystone, id: 'Keystone', name: 'Keystone'},
    { src: Specter, id: 'Spectre', name: 'Spectre'},
    { src: Blockstream, id: 'Blockstream', name: 'Blockstream'},
    { src: Kelpr, id: 'Kelpr', name: 'Kelpr'},
    { src: Xportal, id: 'Xportal', name: 'Xportal'},
    { src: Lace, id: 'Lace Wallet', name: 'Lace Wallet'},
    { src: Exodus, id: 'Exodus.com', name: 'Exodus'},
    { src: Bit, id: 'bitbox.com', name: 'BitBox'},
    { src: Safepal, id: 'safepal.com', name: 'Safepal'},
    { src: Terra, id: 'terramoney.com', name: 'Terra'},
    { src: Wallet, id: 'walletconnect.com', name: 'Wallet Connect'},
    { src: Trust, id: 'trustwallet.com', name: 'Trust Wallet'},
    { src: Meta, id: 'metamask.io', name: 'Metamask'},
    { src: Flint, id: 'flint-Wallet.com', name: 'Flint Wallet'},
    { src: Binance, id: 'binance.com', name: 'Binance Chain Wallet'},
    { src: Polygon, id: 'polygon.technology', name: 'Polygon Wallet'},
    { src: Rainbow, id: 'Ellipal', name: 'Ellipal.com'},
    { src: Bitp, id: 'bitpay.com', name: 'Bitpay'},
    { src: Walleth, id: 'walleth.org', name: 'Walleth'},
    { src: Argent, id: 'argent.xyz', name: 'Argent'},
    { src: Huobi, id: 'huobiwallet.com', name: 'Huobi Wallet'},
    { src: Encrypted, id: 'encrypted.ink', name: 'Encrypted ink'},
    { src: Compound, id: 'compound.finance', name: 'Compound'},
    { src: Polka, id: 'polkadot.network', name: 'Polkadot'},
    { src: Iotex, id: 'iotex.io', name: 'Iotax'},
    { src: Coin98, id: 'coin98.com', name: 'Coin98'},
    { src: Coinbase, id: 'coinbase.com', name: 'Coinbase'},
    { src: Crypto, id: 'crypto.com', name: 'Crypto.com | Defi Wallet'},
    { src: Token, id: 'tokenpocket.pro', name: 'Token Pocket'},
    { src: Math, id: 'mathwallet.org', name: 'Math Wallet'},
    { src: Ledger, id: 'ledger.com', name: 'Ledger Live'},
    { src: lnch, id: '1inch.io', name: '1Inch'},
    { src: Dharma, id: 'dharma.io', name: 'Dharma'},
    { src: Vault, id: 'trustology.io', name: 'Trust Vault'},
    { src: Mykey, id: 'mykey.org', name: 'MYKEY'},
    { src: Atomic, id: 'atomicwallet.io', name: 'Atomic'},
    { src: Coolwallet, id: 'coolwallet.io', name: 'CoolWallet S'},
    { src: Nash, id: 'nash.io', name: 'Nash'},
    { src: Coinomi, id: 'coinomi.com', name: 'Coinomi'},
    { src: Gridplus, id: 'gridplus.io', name: 'GridPlus'},
    { src: Tokenary, id: 'tokenary.io', name: 'Tokenary'},
    { src: Safe, id: 'safepal.io', name: 'SafePal'},
    { src: Infinito, id: 'infinitowallet.io', name: 'Infinito'},
    { src: walletio, id: 'wallet.io', name: 'Wallet.io'},
    { src: Ownbit, id: 'ownbit.io', name: 'Ownbit'},
    { src: Easy, id: 'easypocket.app', name: 'EasyPocket'},
    { src: Bridge, id: 'mtpelerin.com', name: 'Bridge Wallet'},
    { src: Via, id: 'viawallet.com', name: 'ViaWallet'},
    { src: Bitkeep, id: 'bitkeep.com', name: 'BitKeep'},
    { src: Unstoppable, id: 'unstoppable.money', name: 'Unstoppable Wallet'},
    { src: Halo, id: 'halodefi.org', name: 'Halodefi Wallet'},
    { src: Dok, id: 'dokwallet.com', name: 'Dok Wallet'},
    { src: Cello, id: 'cellowallet.app', name: 'Cello Wallet'},
    { src: Coinus, id: 'coinus.io', name: 'CoinUs'},
    { src: Valora, id: 'valoraapp.com', name: 'Valora'},
    { src: Trustee, id: 'trusteeglobal.com', name: 'Trustee Wallet'},
    { src: Gaurda, id: 'guarda.com', name: 'Gaurda wallet'},
    { src: Maiar, id: 'maiar.com', name: 'Maiar Wallet'},
    { src: Jade, id: 'jadewallet.io', name: 'Jade wallet'},
    { src: Plasma, id: 'plasmapay.com', name: 'PlasmaPay'},
    { src: Wallet03, id: 'o3.network', name: 'o3wallet'},
    { src: Hash, id: 'me.hashkey.com', name: 'HashKey Me'},
    { src: Rwallet, id: 'rsk.co', name: 'RWallet'},
    { src: Flare, id: 'flarewallet.io', name: 'Flare Wallet'},
    { src: kyber, id: 'kyberswap.com', name: 'KyberSwap'},
    { src: Atoken, id: 'atoken.com', name: 'Atoken Wallet'},
    { src: Tongue, id: 'tongue.fi', name: 'Tongue Wallet'},
    { src: Xinfin, id: 'xinfin.io', name: 'infin XDC Network'},
    { src: Talken, id: 'talken.io', name: 'Talken Wallet'},
    { src: Keyring, id: 'keyring.app', name: 'KEYRING PRO'},
    { src: Midas, id: 'midasprotocol.io', name: 'Midas Wallet'},
    { src: Atwallet, id: 'authentrend.com', name: 'AT.Wallet'},
    { src: Imtoken, id: 'token.im', name: 'imToken'},
    { src: Others, id: '', name: 'Others'},
    
  ]);

  return (
    <div>
        <Navbar/>
      <Coincomp data={data} />
      <Footer/>
    </div>
  );
};

export default Coins;
