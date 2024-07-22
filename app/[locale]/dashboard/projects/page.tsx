'use client'
import { Affix, Indicator, Pagination, Tabs, SimpleGrid, ActionIcon, Center } from '@mantine/core';
import { useState } from 'react';
import { FaArchive } from "react-icons/fa";
import { SiTask } from "react-icons/si";
import { IoAdd } from "react-icons/io5";
import { Project, ProjectStatus, statusColors, ProjectDefaults, exampleProjects} from "@/types/ProjectType"
import { ProjectCard } from '@/components/public/ProjectCard';
import { usePages } from '@/hooks/usePages';

export default function Projects() {
    const projects = {
        open: exampleProjects.filter((p)=>p.status!==ProjectStatus.Archived),
        archived: exampleProjects.filter((p)=>p.status===ProjectStatus.Archived)
    }

    const { pageElements, page, pagesTotal, handlePageChange, setArray } = usePages(projects.open, 8)
    const [tab, setTab] = useState("open")

    function handleTabChange(newTab: any) {
        setTab(newTab)
        const list = newTab === "open" ? projects.open : projects.archived
        setArray(list)
    }

    return (
        <div>
            <h1 className="text-4xl font-bold">Your Projects</h1>
            <Tabs onChange={handleTabChange} color="gray" variant="pills" radius="lg" value={tab}>
                <Center>
                <Tabs.List my="sm">
                    <Tabs.Tab value="open" leftSection={<SiTask />}>
                    Open
                    </Tabs.Tab>
                    <Tabs.Tab value="archived" leftSection={<FaArchive />}>
                    Archived
                    </Tabs.Tab>
                </Tabs.List>
                </Center>
                <div>
                    <SimpleGrid
                        cols={{ base: 1, sm: 2, lg: 4 }}
                    >
                        {
                            pageElements.map((p)=>{
                                return <ProjectCard project={p}/>
                            })
                        }
                    </SimpleGrid>
                </div>
            </Tabs>
            <Center>
            <Pagination value={page} onChange={handlePageChange} total={pagesTotal} color="gray" mt="sm"/>
            </Center>
            <Affix position={{ bottom: 20, right: 20 }}>
            <ActionIcon variant="filled" size={64} radius={64} aria-label="Settings">
                <IoAdd size={32}/>
            </ActionIcon>
            </Affix>
        </div>
    )
}