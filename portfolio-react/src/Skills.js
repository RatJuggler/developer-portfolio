import { useEffect, useState } from "react";

const Skills = () => {

    const [skills, setSkills] = useState({ loading: true, data: null });

    useEffect(() => {
        setSkills({ loading: true })
        fetch("/json/skills.json")
            .then((res) => res.json())
            .then((data) => {
                setSkills({ loading: false, data:data });
            });
    }, [setSkills]);

    if (skills.loading) return (<p>Loading...</p>);

    return (
        <div id="skillsCard" className="card">
            <div id="skillsToolbar">
            </div>
            <table id="skillsTable">
                <thead>
                <tr>
                    <th data-field="level" data-sortable="true" data-filter-control="select">Level</th>
                    <th data-field="category" data-sortable="true" data-filter-control="select">Category</th>
                    <th data-field="skill" data-sortable="true" data-filter-control="input">Skill</th>
                    <th data-field="description" data-sortable="true" data-filter-control="input">Description</th>
                </tr>
                </thead>
                <tbody>
                {skills.data.map(skill => (
                <tr key={ skill.id }>
                    <td>{ skill.level }</td>
                    <td>{ skill.category }</td>
                    <td>{ skill.skill }</td>
                    <td>{ skill.description }</td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Skills;
