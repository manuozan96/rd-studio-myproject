import Main from "@/components/Main";
import { ContactoLayout } from "./ContactoLayout";
import { Form } from "./Form";
import HeaderContacto from "./HeaderContacto";

const ContactoComponent = () => {
  return (
    <ContactoLayout>
      <HeaderContacto />
      <Form />
    </ContactoLayout>
  );
};

export default ContactoComponent;
