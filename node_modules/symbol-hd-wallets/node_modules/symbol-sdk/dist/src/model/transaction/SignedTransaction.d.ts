import { Address } from '../account/Address';
import { NetworkType } from '../network/NetworkType';
import { TransactionType } from './TransactionType';
/**
 * SignedTransaction object is used to transfer the transaction data and the signature to the server
 * in order to initiate and broadcast a transaction.
 */
export declare class SignedTransaction {
    /**
     * Transaction serialized data
     */
    readonly payload: string;
    /**
     * Transaction hash
     */
    readonly hash: string;
    /**
     * Transaction signerPublicKey
     */
    readonly signerPublicKey: string;
    /**
     * Transaction type
     */
    readonly type: TransactionType;
    /**
     * Signer network type
     */
    readonly networkType: NetworkType;
    /**
     * @param payload
     * @param hash
     * @param type
     * @param networkType
     */
    constructor(
    /**
     * Transaction serialized data
     */
    payload: string, 
    /**
     * Transaction hash
     */
    hash: string, 
    /**
     * Transaction signerPublicKey
     */
    signerPublicKey: string, 
    /**
     * Transaction type
     */
    type: TransactionType, 
    /**
     * Signer network type
     */
    networkType: NetworkType);
    /**
     * Create DTO object
     */
    toDTO(): any;
    /**
     * Return signer's address
     * @returns {Address}
     */
    getSignerAddress(): Address;
}
