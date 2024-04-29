import classes from "@/components/auth/SignInForm.module.css";

import { providersMap } from "@/auth";
import signInToProvider from "@/actions/sign-in-to-provider";

import { faWolfPackBattalion } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "@/components/ui/button";

export default async function SignInForm() {
  return (
    <article className={classes.form}>
      <header>
        <FontAwesomeIcon icon={faWolfPackBattalion} className={classes.icon} />
      </header>
      <main>
        {providersMap.map((provider) => (
          <form
            action={async () => {
              "use server";
              await signInToProvider(provider.id);
            }}
            key={provider.id}
          >
            <Button type="submit">{provider.name}</Button>
          </form>
        ))}
      </main>
    </article>
  );
}
