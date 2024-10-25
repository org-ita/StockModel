import { Collection, Db, MongoClient, ObjectId } from 'mongodb';
import { ChangeEvent, FormEvent } from 'react';

declare global {
    /**
     * Database instance for managing collections
     * 
     * Example:
     * ```
     * var col = mongodb.collection("test"); // Access a specific collection named "test"
     * ```
     */
    var mongodb: Db;

    /**
     * Use main collections easily mode
     * 
     * ```
     * cost prod = collections.Prod.findOne({ _id: object_id })
     * ```
     */
    var collections: {
        Prod: Collection<Prod>
        User: Collection<User>
        Report: Collection<Report>
    }
}

/*
    Event Type Definitions

    Explanation:
        The prefix 'e' indicates an 'event' type.
        The prefix 'on' represents a function handler.
        Suffixes are abbreviations to indicate specific event types, e.g., 'ch' for change, 'sub' for submit.

    Sections:
    - Parameter Types
    - Function Handlers
*/

declare type inputVariant = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

/*---------------------------[ Parameter Types ]---------------------------*/
declare type eCh = ChangeEvent<inputVariant>
declare type eSub = FormEvent

/*---------------------------[ Function Handlers ]---------------------------*/
declare type onSub = (e: eSub) => void
declare type onCh = (e: eCh) => void


/*
    Collection Types

    Sections:
        -> Collection Dependencies
        -> Collection Definitions
*/

// Common properties shared across collections stored in MongoDB
interface MongoData {
    _id: string | ObjectId,  // Unique identifier for MongoDB documents
    __v: number               // MongoDB schema version key
}

/*---------------------------[ Users ]---------------------------*/

// Possible states for a token
declare type tokenCodeTo = "active" | "password-recovery";

// Token structure for user authentication and password recovery
declare interface tokenCode {
	to: tokenCodeTo,            // Purpose of the token (e.g., account activation or password recovery)
	code: string,                // Unique code for validation
	to_user: string              // Associated user ID
}

// User data structure within the MongoDB collection
declare interface User extends MongoData {
	username: string             // User's unique identifier
	email: string                // User's email address
	token?: string               // Optional token for user sessions
	token_code?: string[]        // Optional array of token codes
	oc: number                   // User's operation count or related numeric value
	name: string                 // Full name of the user
	password: string             // Encrypted user password
}

/*---------------------------[ Products ]---------------------------*/

// Product data structure within the MongoDB collection
declare interface Prod extends MongoData {
	label: string                // Product name or label
	price: number                // Price of the product
	amount: number               // Stock quantity of the product
	desc: string                 // Product description
}

/*---------------------------[ Reports ]---------------------------*/

// Possible types of reports for different transaction purposes
declare type reportType = "Venda" | "Reposição" | "Devolução";  // Report types: Sale, Restock, Return

// Payment methods accepted for transactions
declare type payType = "Pix" | "Crédito" | "Débito" | "Dinheiro";  // Payment types: Pix, Credit, Debit, Cash

// Report data structure within the MongoDB collection
export interface Report extends MongoData {
	author: string               // ID or name of the report author
	type: reportType             // Type of transaction reported
	amount: number               // Quantity involved in the transaction
	value: number                // Total value of the transaction
	id_prod: string              // ID of the related product
	pay_type?: payType           // Optional payment method used in the transaction
	name_prod: string            // Name of the product involved in the transaction
}
