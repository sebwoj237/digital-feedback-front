'use client'
import { Affix, Spoiler, Indicator, Pagination, Tabs, Card, BackgroundImage, Text, Badge, Button, Group, SimpleGrid, ActionIcon, Center } from '@mantine/core';
import { useState } from 'react';
import { FaCog, FaBug, FaArchive } from "react-icons/fa";
import { SiTask } from "react-icons/si";
import { TiUser } from "react-icons/ti";
import { AiOutlineForm } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { MdOutlinePublic } from "react-icons/md";
import { Project, ProjectStatus, statusColors, ProjectDefaults, exampleProjects} from "./ProjectType"


export function ProjectCard(props: {
    project: Project
}) {
    const p = {
        ...ProjectDefaults,
        ...props.project
    }
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <BackgroundImage
                className='flex'
                src={p.imageUrl}
                h={96}
                >
                    <div className='flex'>
                        <Badge className='ml-auto' mt="sm" mr="sm" color={statusColors[p.status]}>
                            <Group gap={4}>
                            {p.status}
                            {
                                p.status === ProjectStatus.Private
                                ? <IoMdLock />
                                : p.status === ProjectStatus.Public
                                ? <MdOutlinePublic  />
                                : <FaArchive />
                            }
                            
                            </Group>
                        </Badge>
                    </div>
                </BackgroundImage>
            </Card.Section>

            <Text mt="md" fw={500}>{p.title}</Text>
            <Group justify="left" my="xs">
                <Text component='div' size="xs" c="dimmed">
                    <Group gap={4}>
                        <TiUser />{p.members} Members
                    </Group>
                </Text>
                <Text component='div' size="xs" c="dimmed">
                    <Group gap={4}>
                        <AiOutlineForm />{p.forms} Forms
                    </Group>
                </Text>
            </Group>

            <Spoiler maxHeight={40} showLabel={<Text size='sm'>Read More</Text>} hideLabel={<Text size='sm'>Hide</Text>}>
                <Text size="sm" c="dimmed" className='text-justify'>
                    {p.description}
                </Text>
            </Spoiler>

            <Group gap="xs" mt="sm">
                <Indicator disabled color="blue" radius="xl" label={10} size={16}>
                    <Button variant='outline' color="blue" component='a' href={`./projects/${p.id}`}>
                        View
                    </Button>
                </Indicator>
                <ActionIcon variant="outline" color="gray">
                    <FaCog />
                </ActionIcon>
                <Indicator color="red" radius="xl" label={p.bugs} size={16} disabled={p.bugs===0}>
                    <ActionIcon variant="outline" color="red">
                        <FaBug />
                    </ActionIcon>
                </Indicator>
            </Group>
        </Card>
    )
}

export default function Projects() {
    const projects = {
        open: exampleProjects.filter((p)=>p.status!==ProjectStatus.Archived),
        archived: exampleProjects.filter((p)=>p.status===ProjectStatus.Archived)
    }

    const pageSize = 8
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(calculatePages(projects.open))
    const [tab, setTab] = useState("open")

    function getPageElements(array: Project[]) {
        const start = (page-1)*pageSize
        let end = start + pageSize
        if (end > array.length) { end = array.length }
        return array.slice(start, end)
    }

    function calculatePages(array: Project[]) {
        let newPages = Math.ceil(array.length / 8)
        if (newPages < 1) { newPages = 1 }
        return newPages
    }

    function handleTabChange(newTab: any) {
        setTab(newTab)
        setPage(1)
        const list = newTab === "open" ? projects.open : projects.archived
        setPages(calculatePages(list))
    }

    function handlePageChange(pageNumber: number) {
        setPage(pageNumber)
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
                <Tabs.Panel value="open">
                    <SimpleGrid
                        cols={{ base: 1, sm: 2, lg: 4 }}
                    >
                    {
                        getPageElements(projects.open).map((p)=>{
                            return <ProjectCard project={p}/>
                        })
                    }
                    </SimpleGrid>
                </Tabs.Panel>
                <Tabs.Panel value="archived">
                    <SimpleGrid
                        cols={{ base: 1, sm: 2, lg: 4 }}
                    >
                        {
                            getPageElements(projects.archived).map((p)=>{
                                return <ProjectCard project={p}/>
                            })
                        }
                    </SimpleGrid>
                </Tabs.Panel>
            </Tabs>
            <Center>
            <Pagination value={page} onChange={handlePageChange} total={pages} color="gray" mt="sm"/>
            </Center>
            <Affix position={{ bottom: 20, right: 20 }}>
            <ActionIcon variant="filled" size={64} radius={64} aria-label="Settings">
                <IoAdd size={32}/>
            </ActionIcon>
            </Affix>
        </div>
    )
}