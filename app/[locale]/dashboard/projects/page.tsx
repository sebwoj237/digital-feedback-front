'use client'
import { Spoiler, Indicator, Pagination, Tabs, Card, BackgroundImage, Text, Badge, Button, Group, SimpleGrid, ActionIcon, Center } from '@mantine/core';
import { useState } from 'react';
import { FaCog, FaBug, FaArchive } from "react-icons/fa";
import { SiTask } from "react-icons/si";
import { TiUser } from "react-icons/ti";
import { AiOutlineForm } from "react-icons/ai";

function ProjectCard(props: {
    title: string
}) {

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <BackgroundImage
                className='flex'
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                h={96}
                >
                    <div className='flex'>
                        <Badge className='ml-auto' mt="sm" mr="sm" color="pink">Issue</Badge>
                    </div>
                </BackgroundImage>
            </Card.Section>

            <Text mt="md" fw={500}>{props.title} Norway Fjord Adventures</Text>
            <Group justify="left" my="xs">
                <Text component='div' size="xs" c="dimmed">
                    <Group gap="xs">
                        <TiUser />10 Members
                    </Group>
                </Text>
                <Text component='div' size="xs" c="dimmed">
                    <Group gap="xs">
                        <AiOutlineForm />3 Forms
                    </Group>
                </Text>
            </Group>

            <Spoiler maxHeight={40} showLabel={<Text size='sm'>Read More</Text>} hideLabel={<Text size='sm'>Hide</Text>}>
                <Text size="sm" c="dimmed">
                    With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                    activities on and around the fjords of Norway
                </Text>
            </Spoiler>

            <Group gap="xs" mt="sm">
                <Indicator disabled color="blue" radius="xl" label={10} size={16}>
                    <Button variant='outline' color="blue">
                        View
                    </Button>
                </Indicator>
                <ActionIcon variant="outline" color="gray">
                    <FaCog />
                </ActionIcon>
                <Indicator color="red" radius="xl" label={10} size={16}>
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
        open: Array.from("abcdefghijklmnopqrstuw"),
        archived: Array.from("xyz")
    }

    const pageSize = 8
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(calculatePages(projects.open))
    const [tab, setTab] = useState("open")

    function getPageElements(array: string[]) {
        const start = (page-1)*pageSize
        let end = start + pageSize
        if (end > array.length) { end = array.length }
        return array.slice(start, end)
    }

    function calculatePages(array: string[]) {
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
                        getPageElements(projects.open).map((val)=>{
                            return <ProjectCard title={val}/>
                        })
                    }
                    </SimpleGrid>
                </Tabs.Panel>
                <Tabs.Panel value="archived">
                    <SimpleGrid
                        cols={{ base: 1, sm: 2, lg: 4 }}
                    >
                        {
                            getPageElements(projects.archived).map((val)=>{
                                return <ProjectCard title={val}/>
                            })
                        }
                    </SimpleGrid>
                </Tabs.Panel>
            </Tabs>
            <Center>
            <Pagination value={page} onChange={handlePageChange} total={pages} color="gray" mt="sm"/>
            </Center>
        </div>
    )
}