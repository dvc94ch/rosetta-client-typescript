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
import { BlockIdentifier, Transaction } from './';
/**
 * BlockTransaction contains a populated Transaction and the BlockIdentifier that contains it.
 * @export
 * @interface BlockTransaction
 */
export interface BlockTransaction {
    /**
     *
     * @type {BlockIdentifier}
     * @memberof BlockTransaction
     */
    block_identifier: BlockIdentifier;
    /**
     *
     * @type {Transaction}
     * @memberof BlockTransaction
     */
    transaction: Transaction;
}
export declare function BlockTransactionFromJSON(json: any): BlockTransaction;
export declare function BlockTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockTransaction;
export declare function BlockTransactionToJSON(value?: BlockTransaction | null): any;
