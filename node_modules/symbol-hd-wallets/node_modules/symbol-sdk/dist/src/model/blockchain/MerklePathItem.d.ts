import { MerklePosition } from './MerklePosition';
/**
 * The block merkle path item
 */
export declare class MerklePathItem {
    /**
     * The position
     */
    readonly position?: MerklePosition | undefined;
    /**
     * The hash
     */
    readonly hash?: string | undefined;
    /**
     * @param position
     * @param hash
     */
    constructor(
    /**
     * The position
     */
    position?: MerklePosition | undefined, 
    /**
     * The hash
     */
    hash?: string | undefined);
}
