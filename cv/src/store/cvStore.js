import { makeAutoObservable } from "mobx";
import { loremIpsum } from "../consts/consts";

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
        this._aboutMe = [
            {
                'id': '0',
                'title': "Education",
                'text': '2018 - 2022: Yanka Kupala State University of Grodno\n Speciality: Information resources management'
            },
            {
                'id': '1',
                'title': "One more",
                'text': loremIpsum
            },
            {
                'id': '2',
                'title': "Also one more",
                'text': loremIpsum
            }
        ];
        this._education = [];
        this._softSkills = [
            { 'skill': 'sociable' },
            { 'skill': 'hardworking' },
            { 'skill': 'friendly' },
            { 'skill': 'enthusiastic' },
        ];
        this._hardSkills = [
            { 'skill': 'HTML' },
            { 'skill': 'CSS' },
            { 'skill': 'JavaScript' },
            { 'skill': 'ReactJs' },
            { 'skill': 'NodeJs( Express,Sequilize)' },
            { 'skill': 'PostgreSQL' }
        ];
        makeAutoObservable(this);
    }
    setContacts(contacts) {
        this._contacts = contacts;
    }
    setAboutMe(aboutMe) {
        this._aboutMe = aboutMe;
    }
    setEducation(education) {
        this._education = education;
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
    get aboutMe() {
        return this._aboutMe;
    }
    get education() {
        return this._education;
    }
    get softSkills() {
        return this._softSkills;
    }
    get hardSkills() {
        return this._hardSkills;
    }

}
