export declare enum AddressRestrictionFlag {
    /**
     * Allow only incoming transactions from a given address.
     */
    AllowIncomingAddress = 1,
    /**
     * Allow only outgoing transactions to a given address.
     */
    AllowOutgoingAddress = 16385,
    /**
     * Block incoming transactions from a given address.
     */
    BlockIncomingAddress = 32769,
    /**
     * Block outgoing transactions from a given address.
     */
    BlockOutgoingAddress = 49153
}
