import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Contact {
    id: bigint;
    name: string;
    preferredService: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllContacts(): Promise<Array<Contact>>;
    getContact(id: bigint): Promise<Contact>;
    getContactsByService(service: string): Promise<Array<Contact>>;
    submitContactForm(name: string, email: string, phone: string, preferredService: string, message: string): Promise<bigint>;
}
