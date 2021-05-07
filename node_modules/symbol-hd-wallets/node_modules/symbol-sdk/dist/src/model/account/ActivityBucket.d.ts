import { UInt64 } from '../UInt64';
/**
 * Account activity bucket.
 */
export declare class ActivityBucket {
    /**
     * Start height
     */
    readonly startHeight: UInt64;
    /**
     * Total fees paid.
     */
    readonly totalFeesPaid: UInt64;
    /**
     * Beneficiary count.
     */
    readonly beneficiaryCount: number;
    /**
     * Raw score.
     */
    readonly rawScore: UInt64;
    /**
     * Constructor
     * @param meta
     * @param accountRestrictions
     */
    constructor(
    /**
     * Start height
     */
    startHeight: UInt64, 
    /**
     * Total fees paid.
     */
    totalFeesPaid: UInt64, 
    /**
     * Beneficiary count.
     */
    beneficiaryCount: number, 
    /**
     * Raw score.
     */
    rawScore: UInt64);
}
