//rafce - react arrow function component export

import { ReactNode } from "react";

interface Props {
  // children is a reserve word for react components
  // when passing HTML object via props of a component.
  children: ReactNode;
  onClose: () => void;
  visibility: string;
}

const Alert = ({ children, onClose, visibility = "hide" }: Props) => {
  return (
    <div className={"alert alert-warning alert-dismissible fade " + visibility}>
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
