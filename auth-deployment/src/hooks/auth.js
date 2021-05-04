import { Magic } from "magic-sdk";
import axios from "axios";

const m = new Magic("pk_test_6BB878A5F815AADA");
m.preload().then(() => console.log("Magic <iframe> loaded"));
const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:9000" : "";

export const signUpAuth = async (email, fn, ln) => {
  try {
    const key = await m.auth.loginWithMagicLink({ email: email });
    const userGetStatus = await axios.post(
      `${baseUrl}/api/users`,
      { email: email, name: `${fn} ${ln}` },
      { headers: { Authorization: `Bearer ${key}` } },
    );
    if (userGetStatus === "User already signed up") {
      return "User already signed up";
    } else {
      return userGetStatus;
    }
  } catch (err) {
    console.error(err);
  }

  //.then((data) => {
  //   axios
  //     .post(process.env.NODE_ENV === "development" ? "/api/user" : "/api/user", {
  //       token: data,
  //       email: x,
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //     });
  // });
  //}
};

export const loginAuth = async (email) => {
  const key = await m.auth.loginWithMagicLink({ email: email });
  console.log(key);
  const checkForUser = await axios.get(
    `${baseUrl}/api/auth`,
    { email: email },
    {
      headers: { Authorization: key },
    },
  );
  console.log(checkForUser);
  if (checkForUser === {}) {
    return "NoUser";
  } else {
    return checkForUser;
  }
};

export const getClientUser = async () => {
  const key = await m.user.getIdToken;
  const { email } = await m.user.getMetadata();
  await axios.get(`${baseUrl}/api/users?email=${email}`, { headers: { Authorization: `Bearer ${key}` } });
};

export const loginCheck = async () => {
  const isLoggedIn = (await m.user.isLoggedIn()) ? true : false;
  console.log(isLoggedIn);
  return isLoggedIn;
};


export const logOut = () => {
  m.user.logout().then(() => {
    m.user.isLoggedIn().then((data) => console.log(data));
  });
};

export const getEmail = async () => {
  const { email } = await m.user.getMetadata();
  return email;
};

// make pretty
