import { ChainProperties } from './ChainProperties';
import { NetworkProperties } from './NetworkProperties';
import { PluginProperties } from './PluginProperties';
/**
 * Network Configuration
 */
export declare class NetworkConfiguration {
    readonly network: NetworkProperties;
    readonly chain: ChainProperties;
    readonly plugins: PluginProperties;
    /**
     * @param network - Network related configuration properties.
     * @param chain - Chain related configuration properties.
     * @param plugins - Plugin related configuration properties.
     */
    constructor(network: NetworkProperties, chain: ChainProperties, plugins: PluginProperties);
}
