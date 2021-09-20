import { makeAutoObservable } from "mobx";

export class FooterStore{
    constructor(){
        this._gitHubLink = {'link': 'https://github.com/AndrewMakarevich'};
        this._addInfo = {
            'author': 'Andrew Makarevich',
            'yearOfCreation': '2021'
        };
        this._courseInfo = {
            'logo': 'https://rs.school/images/rs_school_js.svg',
            'courseLink': 'https://app.rs.school/'
        };
        makeAutoObservable(this);
    }
    set GitHubLink(link){
        this._gitHubLink = link;
    }
    set AddInfo(info){
        this._addInfo = info;
    }
    set CourseInfo(info){
        this._courseInfo = info;
    }

    get gitHubLink(){
        return this._gitHubLink;
    }
    get addInfo(){
        return this._addInfo;
    }
    get courseInfo(){
        return this._courseInfo;
    }
}