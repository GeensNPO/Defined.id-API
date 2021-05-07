import { Transaction } from '../../model/transaction/Transaction';
import { TransactionSearchCriteria } from '../searchCriteria/TransactionSearchCriteria';
import { PaginationStreamer } from './PaginationStreamer';
import { Searcher } from './Searcher';
/**
 * A helper object that streams {@link Transaction} using the search.
 */
export declare class TransactionPaginationStreamer extends PaginationStreamer<Transaction, TransactionSearchCriteria> {
    /**
     * Constructor
     *
     * @param searcher the Transaction repository that will perform the searches
     */
    constructor(searcher: Searcher<Transaction, TransactionSearchCriteria>);
}
