import { UInt64 } from '../UInt64';
/**
 * The finalized block.
 */
export declare class FinalizedBlock {
    readonly height: UInt64;
    readonly hash: string;
    readonly finalizationPoint: number;
    readonly finalizationEpoch: number;
    /**
     * @param height Block height
     * @param hash Block hash
     * @param finalizationPoint Block finalization point
     * @param finalizationEpoch Block finalization epoch
     */
    constructor(height: UInt64, hash: string, finalizationPoint: number, finalizationEpoch: number);
}
