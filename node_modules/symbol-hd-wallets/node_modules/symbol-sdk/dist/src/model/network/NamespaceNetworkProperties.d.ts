export declare class NamespaceNetworkProperties {
    readonly maxNameSize?: string | undefined;
    readonly maxChildNamespaces?: string | undefined;
    readonly maxNamespaceDepth?: string | undefined;
    readonly minNamespaceDuration?: string | undefined;
    readonly maxNamespaceDuration?: string | undefined;
    readonly namespaceGracePeriodDuration?: string | undefined;
    readonly reservedRootNamespaceNames?: string | undefined;
    readonly namespaceRentalFeeSinkAddress?: string | undefined;
    readonly rootNamespaceRentalFeePerBlock?: string | undefined;
    readonly childNamespaceRentalFee?: string | undefined;
    /**
     * @param maxNameSize - Maximum namespace name size.
     * @param maxChildNamespaces - Maximum number of children for a root namespace.
     * @param maxNamespaceDepth - Maximum namespace depth.
     * @param minNamespaceDuration - Minimum namespace duration.
     * @param maxNamespaceDuration - Maximum namespace duration.
     * @param namespaceGracePeriodDuration - Grace period during which time only the previous owner can renew an expired namespace.
     * @param reservedRootNamespaceNames - Reserved root namespaces that cannot be claimed.
     * @param namespaceRentalFeeSinkAddress - Public key of the namespace rental fee sink address.
     * @param rootNamespaceRentalFeePerBlock - Root namespace rental fee per block.
     * @param childNamespaceRentalFee - Child namespace rental fee.
     */
    constructor(maxNameSize?: string | undefined, maxChildNamespaces?: string | undefined, maxNamespaceDepth?: string | undefined, minNamespaceDuration?: string | undefined, maxNamespaceDuration?: string | undefined, namespaceGracePeriodDuration?: string | undefined, reservedRootNamespaceNames?: string | undefined, namespaceRentalFeeSinkAddress?: string | undefined, rootNamespaceRentalFeePerBlock?: string | undefined, childNamespaceRentalFee?: string | undefined);
}
