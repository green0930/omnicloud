import { Router } from "express";
const router = Router();
import Profile from "../models/profileSchema";
import { findProfile } from "../mongoose";

router.post("/NewProfile", async (req, res) => {
  let newProfile = new Profile({
    fullName: req.body.firstName,
    userName: req.body.lastName,
    email: req.body.email,
    title: req.body.title,
    about: req.body.about,
    experience: req.body.experience,
    phone: req.body.phone,
    contents: req.body.contents,
    skills: req.body.skiizls,
    social: req.body.social,
    interests: req.body.interests,
  });
  try {
    await newProfile.save();
    if (newProfile) {
      res.status(201).send(newProfile);
    }
  } catch (err) {
    console.error("cannot save to user", err);
  }
});

router.get("api/UserProfile",(async (req, res) => {
  try {
    const foundProfile = await findProfile();
    res.status(201).send(foundProfile);
  } catch (err) {
    console.error("unable to find a profile route", err);
  }
}))

// eslint-disable-next-line no-undef
module.exports = router
