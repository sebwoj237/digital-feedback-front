import { Center, Pagination, Button, CopyButton, Group, BackgroundImage, Badge, Stack, Rating, Card, NavLink, Text, Spoiler, ActionIcon, Divider, Avatar, Tooltip, SimpleGrid } from "@mantine/core"
import { Project, ProjectDefaults, ProjectStatus, statusColors, exampleProjects } from "@/types/ProjectType"
import { IoIosArrowBack  } from "react-icons/io";
import { FaArchive, FaShareAlt, FaBug, FaCog, FaLink } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { MdOutlinePublic } from "react-icons/md";
import { AiOutlineForm } from "react-icons/ai";
import { BiUpvote, BiSolidUpvote  } from "react-icons/bi";

import { ProjectBugItem } from "@/components/public/ProjectBugItem";
import { Bug } from "@/types/BugType"
import { ProjectFormItem } from "@/components/public/ProjectFormItem";
import { usePages } from "@/hooks/usePages";

import { useGetBugs } from "@/api/public/project/getBugs";
import { useEffect, useState } from "react";
import { debugPort, title } from "process";
import { describe } from "node:test";

export function ProjectPage(props: {
    project: Project,
    public: boolean
}) {
    const [p, setProject] = useState(props.project)
    const isPublic = props.public

    const {data} = useGetBugs(p.id)

    useEffect(()=>{
        var newBugs: Bug[] = []
        data?.forEach(d => {
            newBugs.push({
                id: d.id,
                title: d.name,
                description: d.body,
                upvotes: d.postId + d.id
            })
        });
        setArrayBugs(newBugs)
        setProject({...p, bugs: newBugs})
    }, [data])
    

    const {setArray: setArrayBugs, pageElements: pageElementsBugs, page: pageBugs, pagesTotal: pagesTotalBugs, handlePageChange: handlePageChangeBugs} = usePages(p.bugs, 3)
    const {pageElements: pageElementsForms, page: pageForms, pagesTotal: pagesTotalForms, handlePageChange: handlePageChangeForms} = usePages(p.forms, 4)

    return (
        <div>
            <BackgroundImage
                className="relative shadow-sm"
                src={p.imageUrl ?? ProjectDefaults.imageUrl!}
                h={192}
                radius="lg"
                >
                <div className='flex absolute right-0'>
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
                <span style={{textShadow: "2px 2px 4px #111"}} className="absolute bottom-1 left-3 text-4xl font-thin text-white">{p.title}</span>
            </BackgroundImage>
            <Group wrap="nowrap" mt="md" align="flex-start">
                <div className="flex-grow">
                    <Card
                        withBorder
                    >
                        <Text fw={800}>Description</Text>
                        <Text c="dimmed" size="sm">{p.description ?? ProjectDefaults.description}</Text>
                    </Card>
                    <SimpleGrid cols={{ base: 1, sm: 1, lg: 2 }}>
                        <Card withBorder mt="md">
                            <Text fw={800}>Fill out a Feedback form</Text>
                            {
                                pageElementsForms.map((f)=>{
                                    return <ProjectFormItem form={f}/>
                                })
                            }
                            <div className="flex-1"></div>
                            <Center>
                            <Pagination value={pageForms} onChange={handlePageChangeForms} total={pagesTotalForms} color="gray" mt="sm"/>
                            </Center>
                        </Card>
                        <Card withBorder mt="md">
                            <Group justify="space-between" mb="md">
                                <Text fw={800}>Known Issues ({p.bugs.length})</Text>
                                <Button variant="outline" color="gray" component="a" href={location.origin + `/project/${p.id}/report?returnto=${encodeURIComponent(location.href)}`}>
                                    Report a bug
                                </Button>
                            </Group>
                            {
                                pageElementsBugs.map((b)=>{
                                    return <ProjectBugItem bug={b}/>
                                })
                            }
                            <div className="flex-1"></div>
                            <Center>
                            <Pagination value={pageBugs} onChange={handlePageChangeBugs} total={pagesTotalBugs} color="gray" mt="sm"/>
                            </Center>
                        </Card>
                    </SimpleGrid>
                </div>
                { !isPublic && 
                    <div className="min-w-48" >
                        <Card 
                            withBorder
                            padding={0}
                        >
                            <Text fw={800} p="sm" className="text-center">Quick Actions</Text>
                            <Divider />
                            <CopyButton value={location.origin + `/project/${p.id}`} >
                                {({ copied, copy }) => (
                                    <NavLink p="sm"
                                        label="Share by URL"
                                        leftSection={<FaLink />}
                                        onClick={copy}
                                        description={copied ? 'Copied :)' : 'Click to copy'}
                                    ></NavLink>
                                )}
                            </CopyButton>
                            <Divider />
                            <NavLink p="sm"
                                label="Members"
                                leftSection={<FaPeopleGroup />}
                            ></NavLink>
                            <NavLink p="sm"
                                label="Forms"
                                leftSection={<AiOutlineForm />}
                            ></NavLink>
                            <NavLink p="sm"
                                label="Issues"
                                leftSection={<FaBug />}
                            ></NavLink>
                            <NavLink p="sm"
                                label="Settings"
                                leftSection={<FaCog />}
                            ></NavLink>
                        </Card>
                    </div>
                }
            </Group>
        </div>
    )
}