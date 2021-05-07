export declare enum LockHashAlgorithm {
    Op_Sha3_256 = 0,
    Op_Hash_160 = 1,
    Op_Hash_256 = 2
}
/**
 * Validate the hash length
 * @param hashAlgorithm Secret lock hash algorithm
 * @param input Hashed value
 * @returns {boolean}
 */
export declare function LockHashAlgorithmLengthValidator(hashAlgorithm: LockHashAlgorithm, input: string): boolean;
