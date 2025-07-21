interface Profile{
    email?: string;
}

const getEmail = (profile: Profile): string => {
    return profile.email ?? "No email provided"; 
}

let profile1: Profile = {
    email: "noName@unknown.de",
}

let profile2: Profile = {
}

console.log(getEmail(profile1));
console.log(getEmail(profile2));