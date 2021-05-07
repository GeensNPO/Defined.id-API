export declare class SHA3Hasher {
    /**
     * Calculates the hash of data.
     * @param {Uint8Array} dest The computed hash destination.
     * @param {Uint8Array} data The data to hash.
     * @param {number} length The hash length in bytes.
     */
    static func: (dest: Uint8Array, data: Uint8Array, length: number) => void;
    /**
     * Creates a hasher object.
     * @param {number} length The hash length in bytes.
     * @returns {object} The hasher.
     */
    static createHasher: (length?: number) => any;
    /**
     * Get a hasher instance.
     * @param {numeric} length The hash length in bytes.
     * @returns {object} The hasher.
     */
    static getHasher: (length?: number) => any;
}
