import { Magic } from "magic-sdk";

const auth = async (x) => {
  const m = new Magic("pk_test_6BB878A5F815AADA");
  await m.auth.loginWithMagicLink({ email: x });
};

export default auth;
