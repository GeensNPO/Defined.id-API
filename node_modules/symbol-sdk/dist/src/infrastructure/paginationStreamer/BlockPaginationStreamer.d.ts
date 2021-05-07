import { BlockInfo } from '../../model/blockchain/BlockInfo';
import { BlockSearchCriteria } from '../searchCriteria/BlockSearchCriteria';
import { PaginationStreamer } from './PaginationStreamer';
import { Searcher } from './Searcher';
/**
 * A helper object that streams {@link BlockInfo} using the search.
 */
export declare class BlockPaginationStreamer extends PaginationStreamer<BlockInfo, BlockSearchCriteria> {
    /**
     * Constructor
     *
     * @param searcher the block repository that will perform the searches
     */
    constructor(searcher: Searcher<BlockInfo, BlockSearchCriteria>);
}
