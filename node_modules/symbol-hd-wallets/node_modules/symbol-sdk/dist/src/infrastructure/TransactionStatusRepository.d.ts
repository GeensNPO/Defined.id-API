import { Observable } from 'rxjs';
import { TransactionStatus } from '../model/transaction/TransactionStatus';
/**
 * Transaction status interface repository.
 *
 * @since 1.0
 */
export interface TransactionStatusRepository {
    /**
     * Gets a transaction status for a transaction hash
     * @param transactionHash - Transaction hash.
     * @returns Observable<TransactionStatus>
     */
    getTransactionStatus(transactionHash: string): Observable<TransactionStatus>;
    /**
     * Gets an array of transaction status for different transaction hashes
     * @param transactionHashes - Array of transaction hash
     * @returns Observable<TransactionStatus[]>
     */
    getTransactionStatuses(transactionHashes: string[]): Observable<TransactionStatus[]>;
}
