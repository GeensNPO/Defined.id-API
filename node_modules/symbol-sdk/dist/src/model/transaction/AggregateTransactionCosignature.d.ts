import { PublicAccount } from '../account/PublicAccount';
import { UInt64 } from '../UInt64';
/**
 * Model representing cosignature of an aggregate transaction.
 */
export declare class AggregateTransactionCosignature {
    /**
     * The signature of aggregate transaction done by the cosigner.
     */
    readonly signature: string;
    /**
     * The cosigner public account.
     */
    readonly signer: PublicAccount;
    /**
     * Version
     */
    readonly version: UInt64;
    /**
     * @param signature
     * @param signer
     * @param version
     */
    constructor(
    /**
     * The signature of aggregate transaction done by the cosigner.
     */
    signature: string, 
    /**
     * The cosigner public account.
     */
    signer: PublicAccount, 
    /**
     * Version
     */
    version?: UInt64);
    /**
     * Create DTO object
     */
    toDTO(): any;
}
