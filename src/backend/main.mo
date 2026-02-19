import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Iter "mo:core/Iter";

actor {
  type Contact = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    preferredService : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let contacts = Map.empty<Nat, Contact>();
  var nextId = 0;

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, preferredService : Text, message : Text) : async Nat {
    let id = nextId;
    let contact : Contact = {
      id;
      name;
      email;
      phone;
      preferredService;
      message;
      timestamp = Time.now();
    };

    contacts.add(id, contact);
    nextId += 1;
    id;
  };

  public query ({ caller }) func getContact(id : Nat) : async Contact {
    switch (contacts.get(id)) {
      case (null) { Runtime.trap("Contact not found") };
      case (?contact) { contact };
    };
  };

  public query ({ caller }) func getAllContacts() : async [Contact] {
    contacts.values().toArray();
  };

  public query ({ caller }) func getContactsByService(service : Text) : async [Contact] {
    contacts.values().toArray().filter(
      func(contact) { contact.preferredService == service }
    );
  };
};
