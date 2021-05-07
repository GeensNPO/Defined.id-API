import { InnerTransaction } from '../../model/transaction/InnerTransaction';
import { Transaction } from '../../model/transaction/Transaction';
export declare class TransactionMapping {
    /**
     * Create transaction class from Json.
     * @param {object} dataJson The transaction json object.
     * @returns {module: model/transaction/transaction} The transaction class.
     */
    static createFromDTO(dataJson: object): Transaction;
    /**
     * Create transaction class from payload binary.
     * @param {string} payload The transaction binary payload
     * @param {Boolean} isEmbedded Is embedded transaction (Default: false)
     * @returns {Transaction | InnerTransaction} The transaction class.
     */
    static createFromPayload(payload: string, isEmbedded?: boolean): Transaction | InnerTransaction;
}
