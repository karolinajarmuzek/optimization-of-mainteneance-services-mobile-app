import React from "react";

import { Profile } from "../components/Profile";

function ProfileScreen({ route, navigation }) {
  const { firstName, lastName, localization, experience } = route.params;
  return (
    <Profile
      firstName={firstName}
      lastName={lastName}
      localization={localization}
      experience={experience}
    />
  );
}

export default ProfileScreen;
