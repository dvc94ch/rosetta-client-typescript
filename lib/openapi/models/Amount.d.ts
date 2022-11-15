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
import { Currency } from './';
/**
 * Amount is some Value of a Currency. It is considered invalid to specify a Value without a Currency.
 * @export
 * @interface Amount
 */
export interface Amount {
    /**
     * Value of the transaction in atomic units represented as an arbitrary-sized signed integer. For example, 1 BTC would be represented by a value of 100000000.
     * @type {string}
     * @memberof Amount
     */
    value: string;
    /**
     *
     * @type {Currency}
     * @memberof Amount
     */
    currency: Currency;
    /**
     *
     * @type {any}
     * @memberof Amount
     */
    metadata?: any;
}
export declare function AmountFromJSON(json: any): Amount;
export declare function AmountFromJSONTyped(json: any, ignoreDiscriminator: boolean): Amount;
export declare function AmountToJSON(value?: Amount | null): any;
