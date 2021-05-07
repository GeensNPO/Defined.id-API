import { LockHashAlgorithm } from '../../model/lock/LockHashAlgorithm';
/**
 * Hash utilities for SecretLock hashing
 */
export declare class LockHashUtils {
    /**
     * Perform SHA3_256 hash
     * @param input buffer to be hashed
     * @returns {string} Hash in hexidecimal format
     */
    static Op_Sha3_256(input: Uint8Array): string;
    /**
     * Perform SHA256 hash
     * @param input buffer to be hashed
     * @returns {string} Hash in hexidecimal format
     */
    static Op_Hash_256(input: Uint8Array): string;
    /**
     * Perform ripemd160 hash
     * @param input buffer to be hashed
     * @returns {string} Hash in hexidecimal format
     */
    static Op_Hash_160(input: Uint8Array): string;
    /**
     * Perform hash for SecretLock with proficed hash algorithm
     * @param hashAlgorithm Hash algorithm
     * @param input buffer to be hashed
     * @returns {string} Hash in hexidecimal format
     */
    static Hash(hashAlgorithm: LockHashAlgorithm, input: Uint8Array): string;
}
