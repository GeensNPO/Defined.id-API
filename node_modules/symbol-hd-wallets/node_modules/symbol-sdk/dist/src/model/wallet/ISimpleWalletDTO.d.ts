/**
 * Used to instantiate a SimpleWallet
 */
export interface ISimpleWalletDTO {
    name: string;
    network: number;
    address: {
        address: string;
        networkType: number;
    };
    creationDate: string;
    schema: string;
    encryptedPrivateKey: string;
}
