'use client';

import logo from '@/public/vercel.svg';
import { Button, Divider, InputNumber } from 'antd';
import Image from 'next/image';
import { web3, contract } from '../app/contract';
import { useState } from 'react';

export default function Home() {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    if (web3 && contract) {
      try {
        const accounts = await web3.eth.requestAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error accessing accounts:", error);
      }
    } else {
      console.error("Web3 or contract is not initialized");
    }
  };


  return (
    <div>
      <div className="bg-black w-full py-[5px] text-white text-center">
        Token Minter
      </div>

      <div className="flex justify-center items-center w-full mt-[20px]">
        <Image src={logo} alt="logo" width={200} height={200} />
      </div>

      {!account ? (
        <div className="flex flex-col lg:flex-row gap-[30px] mt-[20px] px-[30px] border-2 min-h-[80vh] justify-center items-center">
          <Button className="!bg-black !text-white" onClick={connectWallet}>
            Connect Wallet
          </Button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-[30px] mt-[20px] px-[30px] border-2 min-h-[80vh] justify-center items-center">
          <div className="rounded-[20px] border-[1px] border-gray-200 p-[24px] flex-1">
            <h1 className="text-[22px] font-bold">Mint Token</h1>
            <div className="flex flex-col gap-[10px]">
              <Button className="!bg-black !text-white !h-[40px] !rounded-[16px]">
                Mint Token
              </Button>
            </div>
            <h1 className="text-[22px] font-bold">Burn Token</h1>
            <div className="flex flex-col gap-[10px]">
              <InputNumber
                style={{
                  borderRadius: 16,
                  height: 48,
                  backgroundColor: '#F0F0F0',
                }}
                placeholder="Amount"
              />
              <Button className="!bg-black !text-white !h-[40px] !rounded-[16px]">
                Burn Token
              </Button>
            </div>
          </div>
          <div className="rounded-[20px] border-[1px] border-gray-200 p-[24px] flex-1 w-full">
            <h1 className="mb-[20px]">Your Token Balance</h1>
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[5px]">
                  <h1 className="text-[#A8A8A8]">0</h1>
                </div>
              </div>
              <Divider />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
