import { makeAutoObservable } from "mobx";

export class CvStore {
    constructor() {
        this._contacts = [
            {
                'id': '0',
                'title': 'LinkedIn',
                'link': 'https://www.linkedin.com/in/andrei-makarevich-342b0020a/'
            },
            {
                'id': '1',
                'title': 'Gmail',
                'link': 'andreimakarevich2001@gmail.com'
            },
            {
                'id': '2',
                'title': 'VK',
                'link': 'https://vk.com/id190521646'
            },
            {
                'id': '3',
                'title': 'GitHub',
                'link': 'https://github.com/AndrewMakarevich'
            }
        ];
        this._infoHeader = {
            header: "Info about me"
        };
        this._aboutMe = [
            {
                'id': '0',
                'title': "About me",
                'text': 'Hi, my name is Andrew, I’m a student, which sincerely wants to become a professional programmer in the sphere of making web applications. I really like to solve different kinds of uncommon tasks in JavaScript, HTML, and CSS. I assume that, as I love organizing design by the combination of colors, positions of elements, and fonts, and have been learning C# at the beginning of my student’s life, the position of a trainee front-end developer will be the best start for me, but in perspective, I would like to become a full-stack developer.'
            },
            {
                'id': '1',
                'title': "My self-education",
                'text': 'I have been starting learning JS more than a five-month ago, for now, I have a basic knowledge of how can I use it in web development with ReactJs and, a little bit, mostly with a help of guides, in NodeJs with Express, Sequilize libraries and PostgreSQL Server'
            }
        ];
        this._experienceAndEducation = [
            {
                'id': '0',
                'title': "Education",
                'text': '2018 - 2022: Yanka Kupala State University of Grodno\n Speciality: Information resources management'
            },
            {
                'id': '1',
                'title': "Experience",
                'text': '06.28.2021 - 07.18.2021\n Throughout three weeks, as a part of summer practice, I practiced as a front-end developer in EPAM Systems, solving different tasks, learning Docker, Git, UnifiedUI, and in last days, as a final task, I did a static web page on ReactJs.'
            },
            {
                'id': '2',
                'title': "English level",
                'text': 'Finished Mr.English language course, B1, in 2020.\n English level: B1'
            }
        ];
        this._softSkills = [
            {
                "id": "0",
                'skill': 'sociable'
            },
            {
                "id": "1",
                'skill': 'hardworking'
            },
            {
                "id": "2",
                'skill': 'friendly'
            },
            {
                "id": "3",
                'skill': 'enthusiastic'
            },
        ];
        this._hardSkills = [
            {
                "id": "0",
                'skill': 'HTML'
            },
            {
                "id": "1",
                'skill': 'CSS'
            },
            {
                "id": "2",
                'skill': 'JavaScript'
            },
            {
                "id": "3",
                'skill': 'ReactJs'
            },
            {
                "id": "4",
                'skill': 'NodeJs( Express,Sequilize)'
            },
            {
                "id": "5",
                'skill': 'PostgreSQL'
            }
        ];
        makeAutoObservable(this);
    }
    setContacts(contacts) {
        this._contacts = contacts;
    }
    setInfoHeader(header) {
        this._infoHeader = header;
    }
    setAboutMe(aboutMe) {
        this._aboutMe = aboutMe;
    }
    setExpAndEd(education) {
        this._experienceAndEducation = education;
    }
    setSoftSkills(softSkill) {
        this._softSkills = softSkill;
    }
    setHardSkills(hardSkill) {
        this._hardSkills = hardSkill;
    }

    get contacts() {
        return this._contacts;
    }
    get infoHeader() {
        return this._infoHeader;
    }
    get aboutMe() {
        return this._aboutMe;
    }
    get expAndEd() {
        return this._experienceAndEducation;
    }
    get softSkills() {
        return this._softSkills;
    }
    get hardSkills() {
        return this._hardSkills;
    }

}
