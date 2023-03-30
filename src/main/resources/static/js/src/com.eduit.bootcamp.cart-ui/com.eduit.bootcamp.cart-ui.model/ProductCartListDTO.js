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
import CartDTO from './CartDTO';
import ProductCartDTO from './ProductCartDTO';

/**
 * The ProductCartListDTO model module.
 * @module com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ProductCartListDTO
 * @version 1.0.0
 */
class ProductCartListDTO {
    /**
     * Constructs a new <code>ProductCartListDTO</code>.
     * @alias module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ProductCartListDTO
     */
    constructor() { 
        
        ProductCartListDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductCartListDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ProductCartListDTO} obj Optional instance to populate.
     * @return {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ProductCartListDTO} The populated <code>ProductCartListDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductCartListDTO();

            if (data.hasOwnProperty('cart')) {
                obj['cart'] = CartDTO.constructFromObject(data['cart']);
            }
            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [ProductCartDTO]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/CartDTO} cart
 */
ProductCartListDTO.prototype['cart'] = undefined;

/**
 * @member {Array.<module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ProductCartDTO>} products
 */
ProductCartListDTO.prototype['products'] = undefined;






export default ProductCartListDTO;

