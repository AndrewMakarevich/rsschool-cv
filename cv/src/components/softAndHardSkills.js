import { useContext, useEffect } from "react";
import { Context } from "../index";
import { smoothAppearence } from "./smoothAn";
import './softAndHardSkills.css';

const SoftAndHardSkills = ({ page }) => {
    const { cv } = useContext(Context);
    useEffect(() => {
        if (page === "hardSkills") {
            smoothAppearence(".section__hardSkills");
        } else {
            smoothAppearence(".section__softSkills");
        }

    }, [page]);
    return (
        <div className='block_skillList'>
            {
                page === 'hardSkills' ?
                    <ul className='section__hardSkills skillsList'>
                        {
                            cv.hardSkills.map(s => {
                                return (
                                    <li key={s.id} className='hardSkills__skill skillItem'>{s.skill}</li>
                                )
                            })
                        }
                    </ul>
                    :
                    <ul className='section__softSkills skillsList'>
                        {
                            cv.softSkills.map(s => {
                                return (
                                    <li key={s.id} className='softSkills__skill skillItem'>{s.skill}</li>
                                )
                            })
                        }
                    </ul>
            }
        </div>
    )
};
export default SoftAndHardSkills;