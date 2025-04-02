//Functions to fetch basic details are defined here.

//Imports done
import config from "../config.js";

let contributors = [];
let IpDetails = [];
let userRepos = [];

// functions defined
const getContributors = async () => {
    try {
        const response = await fetch(
            "https://api.github.com/repos/TechSpiritSS/Terminal-Portfolio/contributors"
        )
            .then((response) => response.json())
            .then((data) => {
                data.forEach((user) => {
                    const userDetails = { username: "", userProfile: "" };
                    userDetails.username = user.login;
                    userDetails.userProfile = user.html_url;
                    contributors.push(userDetails);
                });
            });
    } catch (error) {
        console.log(error);
        // handling the error
        contributors.push({
            username: "__network_error __check internet connection",
            userProfile: " ",
        });
    }
};

const getIPDetails = async () => {
    try {
        const response = await fetch("https://ipapi.co/json")
            .then((response) => response.json())
            .then((data) => {
                IpDetails.push(data);
            });
    } catch (error) {
        console.log(error);
        // handling the error
        IpDetails.push({
            ip: "__network_error",
            network: "__kindly check internet connection",
            city: "",
            region: "",
            org: "",
            postal: "",
        });
    }
};

const getRepo = async () => {
    try {
        const response = await fetch(
            "https://api.github.com/users/neu-maximilian/repos"
        )
            .then((response) => response.json())
            .then((data) => {
                userRepos.push(data);
            });
    } catch (error) {
        console.log(error);
        userRepos.push([
            {
                name: "__network_error",
                description: "__kindly check internet connection",
                html_url: "",
            },
        ]);
    }
};

export {
    //functions exported
    getContributors,
    getIPDetails,
    getRepo,

    //variables exported
    contributors,
    IpDetails,
    userRepos,
};
