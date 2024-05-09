import classes from "@/components/auth/SignInForm.module.css";

import { providersMap, signIn } from "@/auth";

import { faWolfPackBattalion } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProviderButton from "@/components/auth/ProviderButton";

export default async function SignInForm() {
  return (
    <article className={classes.form}>
      <header>
        <FontAwesomeIcon icon={faWolfPackBattalion} className={classes.icon} />
      </header>
      <main>
        <div className={classes["button-list"]}>
          {providersMap.map((provider) => (
            <form
              action={async () => {
                "use server";
                await signIn(provider.id, { redirectTo: "/" });
              }}
              key={provider.id}
            >
              <ProviderButton name={provider.name} />
            </form>
          ))}
        </div>
      </main>
    </article>
  );
}
