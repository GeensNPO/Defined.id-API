import { UInt64 } from '../UInt64';
import { FinalizedBlock } from './FinalizedBlock';
/**
 * The chain information.
 */
export declare class ChainInfo {
    /**
     * Current chain height.
     */
    readonly height: UInt64;
    /**
     * Low part of the blockchain score.
     */
    readonly scoreLow: UInt64;
    /**
     * High part of the blockchain score.
     */
    readonly scoreHigh: UInt64;
    /**
     * Latest finalized block.
     */
    readonly latestFinalizedBlock: FinalizedBlock;
    /**
     * @param height
     * @param scoreLow
     * @param scoreHigh
     * @param latestFinalizedBlock
     */
    constructor(
    /**
     * Current chain height.
     */
    height: UInt64, 
    /**
     * Low part of the blockchain score.
     */
    scoreLow: UInt64, 
    /**
     * High part of the blockchain score.
     */
    scoreHigh: UInt64, 
    /**
     * Latest finalized block.
     */
    latestFinalizedBlock: FinalizedBlock);
}
