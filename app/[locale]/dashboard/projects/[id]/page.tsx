import { Button, Group } from "@mantine/core"
import { Project, ProjectStatus, statusColors, ProjectDefaults, exampleProjects} from "../ProjectType"
import { ProjectCard } from "../page"
import { IoIosArrowBack  } from "react-icons/io";

export default function ProjectPage({params: {id}}: Readonly<{params: {id: number}}>) {
    const p = exampleProjects[exampleProjects.findIndex((p)=>p.id == id)]

    return (
        <div>
            <Button variant="outline" color="gray" mb="sm" component="a" href="./">
                <Group justify="space-between" gap={4}>
                    <IoIosArrowBack  />
                    Back
                </Group>
            </Button>
            <ProjectCard project={p}/>
        </div>
    )
}