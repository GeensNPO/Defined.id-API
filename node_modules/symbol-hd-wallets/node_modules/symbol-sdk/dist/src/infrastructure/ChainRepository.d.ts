import { Observable } from 'rxjs';
import { ChainInfo } from '../model/blockchain/ChainInfo';
/**
 * Chain interface repository.
 *
 * @since 1.0
 */
export interface ChainRepository {
    /**
     * Gets current blockchain infomation
     * @returns Observable<BlockchainScore>
     */
    getChainInfo(): Observable<ChainInfo>;
}
