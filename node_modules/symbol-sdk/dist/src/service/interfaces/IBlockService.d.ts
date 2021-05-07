import { Observable } from 'rxjs';
import { UInt64 } from '../../model/UInt64';
/**
 * Block Service Interface
 */
export interface IBlockService {
    /**
     * Validate transaction hash in block
     * @param leaf transaction hash
     * @param height block height
     */
    validateTransactionInBlock(leaf: string, height: UInt64): Observable<boolean>;
    /**
     * Validate statement hash in block
     * @param leaf statement hash
     * @param height block height
     */
    validateStatementInBlock(leaf: string, height: UInt64): Observable<boolean>;
}
