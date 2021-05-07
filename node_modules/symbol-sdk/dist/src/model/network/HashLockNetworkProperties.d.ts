export declare class HashLockNetworkProperties {
    readonly lockedFundsPerAggregate?: string | undefined;
    readonly maxHashLockDuration?: string | undefined;
    /**
     * @param lockedFundsPerAggregate - Amount that has to be locked per aggregate in partial cache.
     * @param maxHashLockDuration - Maximum number of blocks for which a hash lock can exist.
     */
    constructor(lockedFundsPerAggregate?: string | undefined, maxHashLockDuration?: string | undefined);
}
