export class NaelSiteService {

    getPersonalInformations() {
        let data = {
            data: [{
                    title: "Date of Birth",
                    value: "22/09/99"
                },
                {
                    title: "Nationality",
                    value: "Indonesia"
                },
                {
                    title: "Address",
                    value: "Jl. Juragan Sinda Raya No.26, Kukusan, Kecamatan Beji, Depok 16425, Indonesia"
                },
                {
                    title: "Phone Number",
                    value: "+62 895 0338 6642"
                },
                {
                    title: "Email Address",
                    value: "nael.nathanael71@gmail.com"
                },
            ]
        }
        return data;
    }

    getProjects() {
        let data = {
            data: [{
                    organization: "The 9th UI YEA",
                    location: "Depok, Indonesia",
                    role: "Web Developer",
                    points: [
                        "Official website for the 9th UI YEA event",
                        "Written in PHP, using CodeIgniter 3 Framework",
                        "Front-end focused website with registrations and administration panel",
                        "Website built by one person and deployed in 3 days",
                    ],
                    start: "03/2020",
                    end: "04/2020",
                    url: "http://uiyea.org/",
                    icon: "/images/uiyea.png"
                },
                {
                    organization: "SIRIO",
                    location: "Depok, Indonesia",
                    role: "Lead Developer",
                    descriptions: "Sistem Informasi Risiko Operasional for Operational Risk Division at Amartha",
                    points: [
                        "Exclusive, complete, custom-made information system for Amartha",
                        "The first information system implemented that cover all of Operational Risk Division's core business process",
                    ],
                    start: "03/2019",
                    end: "06/2019",
                    icon: "/images/sirio.png",
                    iconWithIdentifier: true,
                },
                {
                    organization: "TALKA",
                    location: "Depok, Indonesia",
                    role: "Software Engineer",
                    points: [
                        "Back-end focus web application project",
                        "Implement Forex-trading mechanism",
                        "Written in PHP, using CodeIgniter 3 Framework",
                        "Built by a team of three",
                    ],
                    start: "11/2019",
                    end: "06/2020",
                    icon: false
                },
                {
                    organization: "UI YEA 2019",
                    location: "Depok, Indonesia",
                    role: "Web Developer",
                    points: [
                        "Official website for UI YEA 2019",
                        "Written in Python, using Django 3 Framework",
                        "Front-end static website",
                        "Built by a team of three and deployed in 7 days",
                    ],
                    start: "03/2019",
                    end: "06/2019",
                    icon: "/images/uiyea2019.png"
                },
            ]
        }
        return data;
    }
}