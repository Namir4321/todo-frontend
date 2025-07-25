import React from "react";

const FormContainer = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};

export default FormContainer;
