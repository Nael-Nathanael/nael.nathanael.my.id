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

}