import { Account } from '../account/Account';
import { Address } from '../account/Address';
import { NetworkType } from '../network/NetworkType';
import { ISimpleWalletDTO } from './ISimpleWalletDTO';
import { Password } from './Password';
import { Wallet } from './Wallet';
export declare class SimpleWallet extends Wallet {
    readonly encryptedPrivateKey: string;
    /**
     *Creates an instance of SimpleWallet.
     * @param {string} name
     * @param {Address} address
     * @param {string} encryptedPrivateKey
     */
    constructor(name: string, address: Address, encryptedPrivateKey: string);
    /**
     * Create a Simple wallet
     * @param name - Wallet name
     * @param password - Password to encrypt wallet
     * @param network - Network id
     * @returns {SimpleWallet}
     */
    static create(name: string, password: Password, network: NetworkType): SimpleWallet;
    /**
     * Create a SimpleWallet from private key
     * @param name - Wallet name
     * @param password - Password to encrypt wallet
     * @param privateKey - Wallet private key
     * @param network - Network id
     * @returns {SimpleWallet}
     */
    static createFromPrivateKey(name: string, password: Password, privateKey: string, network: NetworkType): SimpleWallet;
    /**
     * Instantiate a SimpleWallet from a DTO
     * @param simpleWalletDTO simple wallet without prototype
     * @returns {SimpleWallet}
     */
    static createFromDTO(simpleWalletDTO: ISimpleWalletDTO): SimpleWallet;
    /**
     * Creates a SimpleWallet DTO
     * @returns {ISimpleWalletDTO}
     */
    toDTO(): ISimpleWalletDTO;
    /**
     * Open a wallet and generate an Account
     * @param password - Password to decrypt private key
     * @returns {Account}
     */
    open(password: Password): Account;
}
