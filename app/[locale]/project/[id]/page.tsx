'use client'
import { Container } from "@mantine/core"
import { exampleProjects } from "@/types/ProjectType"
import { ProjectPage } from "@/components/public/ProjectPage"

export default function ProjectDashboardPage({params: {id}}: Readonly<{params: {id: number}}>) {
    const p = exampleProjects[exampleProjects.findIndex((p)=>p.id == id)]

    return (
        <div>
            <Container size="md">
                <ProjectPage project={p} public={true}></ProjectPage>
            </Container>
        </div>
    )
}