/**
 * Rosetta
 * Build Once. Integrate Your Blockchain Everywhere.
 *
 * The version of the OpenAPI document: 1.4.10
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { BlockIdentifier, Peer, SyncStatus } from './';
/**
 * NetworkStatusResponse contains basic information about the node's view of a blockchain network. It is assumed that any BlockIdentifier.Index less than or equal to CurrentBlockIdentifier.Index can be queried. If a Rosetta implementation prunes historical state, it should populate the optional `oldest_block_identifier` field with the oldest block available to query. If this is not populated, it is assumed that the `genesis_block_identifier` is the oldest queryable block. If a Rosetta implementation performs some pre-sync before it is possible to query blocks, sync_status should be populated so that clients can still monitor healthiness. Without this field, it may appear that the implementation is stuck syncing and needs to be terminated.
 * @export
 * @interface NetworkStatusResponse
 */
export interface NetworkStatusResponse {
    /**
     *
     * @type {BlockIdentifier}
     * @memberof NetworkStatusResponse
     */
    current_block_identifier: BlockIdentifier;
    /**
     * The timestamp of the block in milliseconds since the Unix Epoch. The timestamp is stored in milliseconds because some blockchains produce blocks more often than once a second.
     * @type {number}
     * @memberof NetworkStatusResponse
     */
    current_block_timestamp: number;
    /**
     *
     * @type {BlockIdentifier}
     * @memberof NetworkStatusResponse
     */
    genesis_block_identifier: BlockIdentifier;
    /**
     *
     * @type {BlockIdentifier}
     * @memberof NetworkStatusResponse
     */
    oldest_block_identifier?: BlockIdentifier;
    /**
     *
     * @type {SyncStatus}
     * @memberof NetworkStatusResponse
     */
    sync_status?: SyncStatus;
    /**
     *
     * @type {Array<Peer>}
     * @memberof NetworkStatusResponse
     */
    peers: Array<Peer>;
}
export declare function NetworkStatusResponseFromJSON(json: any): NetworkStatusResponse;
export declare function NetworkStatusResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkStatusResponse;
export declare function NetworkStatusResponseToJSON(value?: NetworkStatusResponse | null): any;
