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
import { NetworkIdentifier } from './';
/**
 * EventsBlocksRequest is utilized to fetch a sequence of BlockEvents indicating which blocks were added and removed from storage to reach the current state.
 * @export
 * @interface EventsBlocksRequest
 */
export interface EventsBlocksRequest {
    /**
     *
     * @type {NetworkIdentifier}
     * @memberof EventsBlocksRequest
     */
    network_identifier: NetworkIdentifier;
    /**
     * offset is the offset into the event stream to sync events from. If this field is not populated, we return the limit events backwards from tip. If this is set to 0, we start from the beginning.
     * @type {number}
     * @memberof EventsBlocksRequest
     */
    offset?: number;
    /**
     * limit is the maximum number of events to fetch in one call. The implementation may return <= limit events.
     * @type {number}
     * @memberof EventsBlocksRequest
     */
    limit?: number;
}
export declare function EventsBlocksRequestFromJSON(json: any): EventsBlocksRequest;
export declare function EventsBlocksRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventsBlocksRequest;
export declare function EventsBlocksRequestToJSON(value?: EventsBlocksRequest | null): any;
