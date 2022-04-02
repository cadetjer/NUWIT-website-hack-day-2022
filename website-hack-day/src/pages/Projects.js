import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ProjectInfo from '../data/projects.js'
import ProjectItem from '../components/ProjectItem.js'

const ProjectStyles = styled.div``
export default function Projects() {
    const [projectData, setProjectData] = useState(ProjectInfo)
    return (
        <ProjectStyles>
        <div class='container'>
            {projectData.map((item) => (
                <ProjectItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}></ProjectItem>
            ))}
        </div>
        </ProjectStyles>
    )
}