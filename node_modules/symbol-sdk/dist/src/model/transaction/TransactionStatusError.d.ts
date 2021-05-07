import { Address } from '../account/Address';
import { Deadline } from './Deadline';
/**
 * Transaction status error model returned by listeners
 */
export declare class TransactionStatusError {
    /**
     *  The address of the account that signed the invalid transaction.
     *  It's the address listened when calling Lister.status.
     */
    readonly address: Address;
    /**
     * The transaction hash.
     */
    readonly hash: string;
    /**
     * The error code.
     */
    readonly code: string;
    /**
     * The transaction deadline.
     */
    readonly deadline: Deadline;
}
