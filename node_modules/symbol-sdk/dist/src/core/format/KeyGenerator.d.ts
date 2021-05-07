import { UInt64 } from '../../model/UInt64';
export declare class KeyGenerator {
    /**
     * Generate UInt64 from a string
     * @param {string} input Input string
     * @returns {UInt64} Deterministic uint64 value for the given string
     */
    static generateUInt64Key(input: string): UInt64;
}
