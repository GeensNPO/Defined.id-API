export declare class MerkleHashBuilder {
    /**
     * Length of produced merkle hash in bytes.
     *
     * @var {number}
     */
    readonly length: number;
    /**
     * The list of hashes used to calculate root hash.
     *
     * @var {Uint8Array}
     */
    protected hashes: Uint8Array[];
    /**
     * Constructor
     * @param length Hash size
     */
    constructor(
    /**
     * Length of produced merkle hash in bytes.
     *
     * @var {number}
     */
    length: number);
    /**
     * Get root hash of Merkle tree
     *
     * @return {Uint8Array}
     */
    getRootHash(): Uint8Array;
    /**
     * Update hashes array (add hash)
     *
     * @param hash Inner transaction hash buffer
     * @return {MerkleHashBuilder}
     */
    update(hash: Uint8Array): MerkleHashBuilder;
}
