import React from "react";
import { CONTACTS, CONTACTS_ACTIONS } from "../../../constants/constants";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col space-y-2 pt-6">
      <div className="flex flex-col">
        <span className="text-Snow text-xs font-bold">Email Address</span>

        <Link href={CONTACTS_ACTIONS.EMAIL} className="text-xs text-gray-600">
          {CONTACTS.EMAIL}
        </Link>
      </div>
      <div className="flex flex-col">
        <span className="text-Snow text-xs font-bold">Phone</span>
        <Link href={CONTACTS_ACTIONS.PHONE} className="text-xs text-gray-600">
          {CONTACTS.PHONE}
        </Link>
      </div>
    </div>
  );
};

export default Contact;
