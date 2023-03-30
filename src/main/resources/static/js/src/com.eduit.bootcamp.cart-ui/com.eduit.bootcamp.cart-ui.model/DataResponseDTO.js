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
import CategoryDTO from './CategoryDTO';
import CategoryListDTO from './CategoryListDTO';
import EmptyResponseDTO from './EmptyResponseDTO';
import JWTResponseDTO from './JWTResponseDTO';
import ProductDTO from './ProductDTO';
import ProductListDTO from './ProductListDTO';
import UserDTO from './UserDTO';
import UserListDTO from './UserListDTO';

/**
 * The DataResponseDTO model module.
 * @module com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/DataResponseDTO
 * @version 1.0.0
 */
class DataResponseDTO {
    /**
     * Constructs a new <code>DataResponseDTO</code>.
     * @alias module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/DataResponseDTO
     * @implements module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/JWTResponseDTO
     * @implements module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ProductDTO
     * @implements module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/UserListDTO
     * @implements module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/UserDTO
     * @implements module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/CategoryDTO
     * @implements module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/CategoryListDTO
     * @implements module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/CartDTO
     * @implements module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ProductListDTO
     * @implements module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/EmptyResponseDTO
     * @param name {String} 
     * @param price {Number} 
     * @param qty {Number} the stock quantity.
     * @param category {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/CategoryDTO} 
     * @param dateCreated {Date} 
     * @param username {String} 
     * @param firstName {String} 
     * @param lastName {String} 
     * @param email {String} this field represent the user email
     * @param password {String} 
     * @param role {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/DataResponseDTO.RoleEnum} The user role.
     * @param user {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/UserDTO} 
     */
    constructor(name, price, qty, category, dateCreated, username, firstName, lastName, email, password, role, user) { 
        JWTResponseDTO.initialize(this);ProductDTO.initialize(this, name, price, qty, category, dateCreated);UserListDTO.initialize(this);UserDTO.initialize(this, username, firstName, lastName, email, password, role, dateCreated);CategoryDTO.initialize(this, name, dateCreated);CategoryListDTO.initialize(this);CartDTO.initialize(this, user, dateCreated);ProductListDTO.initialize(this);EmptyResponseDTO.initialize(this);
        DataResponseDTO.initialize(this, name, price, qty, category, dateCreated, username, firstName, lastName, email, password, role, user);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, price, qty, category, dateCreated, username, firstName, lastName, email, password, role, user) { 
        obj['name'] = name;
        obj['price'] = price;
        obj['qty'] = qty;
        obj['category'] = category;
        obj['dateCreated'] = dateCreated;
        obj['username'] = username;
        obj['firstName'] = firstName;
        obj['lastName'] = lastName;
        obj['email'] = email;
        obj['password'] = password;
        obj['role'] = role || 'ROLE_USER';
        obj['user'] = user;
    }

    /**
     * Constructs a <code>DataResponseDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/DataResponseDTO} obj Optional instance to populate.
     * @return {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/DataResponseDTO} The populated <code>DataResponseDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataResponseDTO();
            JWTResponseDTO.constructFromObject(data, obj);
            ProductDTO.constructFromObject(data, obj);
            UserListDTO.constructFromObject(data, obj);
            UserDTO.constructFromObject(data, obj);
            CategoryDTO.constructFromObject(data, obj);
            CategoryListDTO.constructFromObject(data, obj);
            CartDTO.constructFromObject(data, obj);
            ProductListDTO.constructFromObject(data, obj);
            EmptyResponseDTO.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('accessToken')) {
                obj['accessToken'] = ApiClient.convertToType(data['accessToken'], 'String');
            }
            if (data.hasOwnProperty('refreshToken')) {
                obj['refreshToken'] = ApiClient.convertToType(data['refreshToken'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('qty')) {
                obj['qty'] = ApiClient.convertToType(data['qty'], 'Number');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = CategoryDTO.constructFromObject(data['category']);
            }
            if (data.hasOwnProperty('dateCreated')) {
                obj['dateCreated'] = ApiClient.convertToType(data['dateCreated'], 'Date');
            }
            if (data.hasOwnProperty('dateDeleted')) {
                obj['dateDeleted'] = ApiClient.convertToType(data['dateDeleted'], 'Date');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ProductDTO]);
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('parentCategoryId')) {
                obj['parentCategoryId'] = ApiClient.convertToType(data['parentCategoryId'], 'Number');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = UserDTO.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('product_list')) {
                obj['product_list'] = ApiClient.convertToType(data['product_list'], [ProductDTO]);
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The type of the contained object
 * @member {String} type
 */
DataResponseDTO.prototype['type'] = undefined;

/**
 * @member {String} accessToken
 */
DataResponseDTO.prototype['accessToken'] = undefined;

/**
 * @member {String} refreshToken
 */
DataResponseDTO.prototype['refreshToken'] = undefined;

/**
 * @member {Number} id
 */
DataResponseDTO.prototype['id'] = undefined;

/**
 * @member {String} name
 */
DataResponseDTO.prototype['name'] = undefined;

/**
 * @member {String} description
 */
DataResponseDTO.prototype['description'] = undefined;

/**
 * @member {Number} price
 */
DataResponseDTO.prototype['price'] = undefined;

/**
 * the stock quantity.
 * @member {Number} qty
 */
DataResponseDTO.prototype['qty'] = undefined;

/**
 * @member {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/CategoryDTO} category
 */
DataResponseDTO.prototype['category'] = undefined;

/**
 * @member {Date} dateCreated
 */
DataResponseDTO.prototype['dateCreated'] = undefined;

/**
 * @member {Date} dateDeleted
 */
DataResponseDTO.prototype['dateDeleted'] = undefined;

/**
 * @member {Array.<module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ProductDTO>} items
 */
DataResponseDTO.prototype['items'] = undefined;

/**
 * @member {String} username
 */
DataResponseDTO.prototype['username'] = undefined;

/**
 * @member {String} firstName
 */
DataResponseDTO.prototype['firstName'] = undefined;

/**
 * @member {String} lastName
 */
DataResponseDTO.prototype['lastName'] = undefined;

/**
 * this field represent the user email
 * @member {String} email
 */
DataResponseDTO.prototype['email'] = undefined;

/**
 * @member {String} password
 */
DataResponseDTO.prototype['password'] = undefined;

/**
 * The user role.
 * @member {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/DataResponseDTO.RoleEnum} role
 * @default 'ROLE_USER'
 */
DataResponseDTO.prototype['role'] = 'ROLE_USER';

/**
 * @member {Number} parentCategoryId
 */
DataResponseDTO.prototype['parentCategoryId'] = undefined;

/**
 * @member {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/UserDTO} user
 */
DataResponseDTO.prototype['user'] = undefined;

/**
 * @member {Array.<module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ProductDTO>} product_list
 */
DataResponseDTO.prototype['product_list'] = undefined;

/**
 * @member {Date} date
 */
DataResponseDTO.prototype['date'] = undefined;


// Implement JWTResponseDTO interface:
/**
 * @member {String} accessToken
 */
JWTResponseDTO.prototype['accessToken'] = undefined;
/**
 * @member {String} refreshToken
 */
JWTResponseDTO.prototype['refreshToken'] = undefined;
// Implement ProductDTO interface:
/**
 * @member {Number} id
 */
ProductDTO.prototype['id'] = undefined;
/**
 * @member {String} name
 */
ProductDTO.prototype['name'] = undefined;
/**
 * @member {String} description
 */
ProductDTO.prototype['description'] = undefined;
/**
 * @member {Number} price
 */
ProductDTO.prototype['price'] = undefined;
/**
 * the stock quantity.
 * @member {Number} qty
 */
ProductDTO.prototype['qty'] = undefined;
/**
 * @member {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/CategoryDTO} category
 */
ProductDTO.prototype['category'] = undefined;
/**
 * @member {Date} dateCreated
 */
ProductDTO.prototype['dateCreated'] = undefined;
/**
 * @member {Date} dateDeleted
 */
ProductDTO.prototype['dateDeleted'] = undefined;
// Implement UserListDTO interface:
/**
 * @member {Array.<module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/UserDTO>} items
 */
UserListDTO.prototype['items'] = undefined;
// Implement UserDTO interface:
/**
 * @member {Number} id
 */
UserDTO.prototype['id'] = undefined;
/**
 * @member {String} username
 */
UserDTO.prototype['username'] = undefined;
/**
 * @member {String} firstName
 */
UserDTO.prototype['firstName'] = undefined;
/**
 * @member {String} lastName
 */
UserDTO.prototype['lastName'] = undefined;
/**
 * this field represent the user email
 * @member {String} email
 */
UserDTO.prototype['email'] = undefined;
/**
 * @member {String} password
 */
UserDTO.prototype['password'] = undefined;
/**
 * The user role.
 * @member {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/UserDTO.RoleEnum} role
 * @default 'ROLE_USER'
 */
UserDTO.prototype['role'] = 'ROLE_USER';
/**
 * @member {Date} dateCreated
 */
UserDTO.prototype['dateCreated'] = undefined;
/**
 * @member {Date} dateDeleted
 */
UserDTO.prototype['dateDeleted'] = undefined;
// Implement CategoryDTO interface:
/**
 * @member {Number} id
 */
CategoryDTO.prototype['id'] = undefined;
/**
 * @member {String} name
 */
CategoryDTO.prototype['name'] = undefined;
/**
 * @member {Number} parentCategoryId
 */
CategoryDTO.prototype['parentCategoryId'] = undefined;
/**
 * @member {Date} dateCreated
 */
CategoryDTO.prototype['dateCreated'] = undefined;
/**
 * @member {Date} dateDeleted
 */
CategoryDTO.prototype['dateDeleted'] = undefined;
// Implement CategoryListDTO interface:
/**
 * @member {Array.<module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/CategoryDTO>} items
 */
CategoryListDTO.prototype['items'] = undefined;
// Implement CartDTO interface:
/**
 * @member {Number} id
 */
CartDTO.prototype['id'] = undefined;
/**
 * @member {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/UserDTO} user
 */
CartDTO.prototype['user'] = undefined;
/**
 * @member {Array.<module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ProductDTO>} product_list
 */
CartDTO.prototype['product_list'] = undefined;
/**
 * @member {Date} dateCreated
 */
CartDTO.prototype['dateCreated'] = undefined;
/**
 * @member {Date} dateDeleted
 */
CartDTO.prototype['dateDeleted'] = undefined;
// Implement ProductListDTO interface:
/**
 * @member {Array.<module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ProductDTO>} items
 */
ProductListDTO.prototype['items'] = undefined;
// Implement EmptyResponseDTO interface:
/**
 * @member {Date} date
 */
EmptyResponseDTO.prototype['date'] = undefined;



/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
DataResponseDTO['RoleEnum'] = {

    /**
     * value: "ROLE_USER"
     * @const
     */
    "USER": "ROLE_USER",

    /**
     * value: "ROLE_ADMIN"
     * @const
     */
    "ADMIN": "ROLE_ADMIN"
};



export default DataResponseDTO;

