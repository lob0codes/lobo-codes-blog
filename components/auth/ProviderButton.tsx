import classes from "@/components/auth/ProviderButton.module.css";

import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNotdef } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";

function getIcon(name: string) {
  const provider_name = name.toLowerCase();
  switch (provider_name) {
    case "google":
      return faGoogle;
    case "github":
      return faGithub;
    default:
      return faNotdef;
  }
}

export default function ProviderButton({ name }: { name: string }) {
  const icon = getIcon(name);

  return (
    <div className={classes["provider-button"]}>
      <FontAwesomeIcon icon={icon} className={classes.icon} />
      <button type="submit" className={classes.button}>
        Sign-In with {name}
      </button>
    </div>
  );
}
