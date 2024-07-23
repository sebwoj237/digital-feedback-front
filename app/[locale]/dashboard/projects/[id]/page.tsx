'use client'
import { Button, Group } from "@mantine/core"
import { IoIosArrowBack } from "react-icons/io"
import { exampleProjects } from "@/types/ProjectType"
import { ProjectPage } from "@/components/public/ProjectPage"

export default function ProjectDashboardPage({params: {id}}: Readonly<{params: {id: number}}>) {
    const p = exampleProjects[exampleProjects.findIndex((p)=>p.id == id)]

    return (
        <div>
            <Button leftSection={<IoIosArrowBack  />} variant="outline" color="gray" mb="sm" component="a" href="./">
                    Back
            </Button>
            <ProjectPage project={p} public={false}></ProjectPage>
        </div>
    )
}