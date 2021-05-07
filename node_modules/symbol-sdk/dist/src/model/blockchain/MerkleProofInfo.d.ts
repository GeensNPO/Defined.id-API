import { MerklePathItem } from './MerklePathItem';
/**
 * The block merkle proof info
 */
export declare class MerkleProofInfo {
    /**
     * The merkle path
     */
    readonly merklePath?: MerklePathItem[] | undefined;
    /**
     * @param merklePath - Array of merkle path items
     */
    constructor(
    /**
     * The merkle path
     */
    merklePath?: MerklePathItem[] | undefined);
}
