export declare class AggregateNetworkProperties {
    readonly maxTransactionsPerAggregate?: string | undefined;
    readonly maxCosignaturesPerAggregate?: string | undefined;
    readonly enableStrictCosignatureCheck?: boolean | undefined;
    readonly enableBondedAggregateSupport?: boolean | undefined;
    readonly maxBondedTransactionLifetime?: string | undefined;
    /**
     * @param maxTransactionsPerAggregate - Maximum number of transactions per aggregate.
     * @param maxCosignaturesPerAggregate - Maximum number of cosignatures per aggregate.
     * @param enableStrictCosignatureCheck - Set to true if cosignatures must exactly match component signers. Set to false if cosignatures should be validated externally.
     * @param enableBondedAggregateSupport - Set to true if bonded aggregates should be allowed. Set to false if bonded aggregates should be rejected.
     * @param maxBondedTransactionLifetime - Maximum lifetime a bonded transaction can have before it expires.
     */
    constructor(maxTransactionsPerAggregate?: string | undefined, maxCosignaturesPerAggregate?: string | undefined, enableStrictCosignatureCheck?: boolean | undefined, enableBondedAggregateSupport?: boolean | undefined, maxBondedTransactionLifetime?: string | undefined);
}
