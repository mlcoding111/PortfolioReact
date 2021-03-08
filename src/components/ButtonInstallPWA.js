import React from "react";
import { Button } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'



const ButtonInstallPWA = (props) => {
  const element = <FontAwesomeIcon icon={faDownload} />
  return (
    <>

      <Button variant="light" size="md" block id="boutonInstall">
        {element}
      </Button>

    </>
  );
};

export default ButtonInstallPWA;
