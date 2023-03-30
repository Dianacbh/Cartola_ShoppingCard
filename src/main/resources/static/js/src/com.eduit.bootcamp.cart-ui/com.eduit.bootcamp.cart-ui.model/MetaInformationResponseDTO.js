/**
 * Eduit REST shopping cart API - OpenAPI 3.0
 * Aplicacion Carrito de compras Bootcamp EducacionIt.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: federicovittorini@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The MetaInformationResponseDTO model module.
 * @module com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/MetaInformationResponseDTO
 * @version 1.0.0
 */
class MetaInformationResponseDTO {
    /**
     * Constructs a new <code>MetaInformationResponseDTO</code>.
     * @alias module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/MetaInformationResponseDTO
     * @param time {Number} 
     */
    constructor(time) { 
        
        MetaInformationResponseDTO.initialize(this, time);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, time) { 
        obj['time'] = time;
    }

    /**
     * Constructs a <code>MetaInformationResponseDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/MetaInformationResponseDTO} obj Optional instance to populate.
     * @return {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/MetaInformationResponseDTO} The populated <code>MetaInformationResponseDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaInformationResponseDTO();

            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'Number');
            }
            if (data.hasOwnProperty('refNumber')) {
                obj['refNumber'] = ApiClient.convertToType(data['refNumber'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} time
 */
MetaInformationResponseDTO.prototype['time'] = undefined;

/**
 * @member {String} refNumber
 */
MetaInformationResponseDTO.prototype['refNumber'] = undefined;






export default MetaInformationResponseDTO;

