import { Button, CopyButton, Group, BackgroundImage, Badge, Stack, Rating, Card, NavLink, Text, Spoiler, ActionIcon, Divider, Avatar, Tooltip } from "@mantine/core"
import { Project, ProjectDefaults, ProjectStatus, statusColors, exampleProjects } from "@/types/ProjectType"
import { IoIosArrowBack  } from "react-icons/io";
import { FaArchive, FaShareAlt, FaBug, FaCog, FaLink } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { MdOutlinePublic } from "react-icons/md";
import { AiOutlineForm } from "react-icons/ai";
import { BiUpvote, BiSolidUpvote  } from "react-icons/bi";

import { Bug } from "@/types/BugType"
import { useEffect, useState } from "react";

export function ProjectBugItem(props: {
    bug: Bug
}) {
    const [ upvoted, setUpvote ] = useState(false) 
    const b = props.bug

    useEffect(()=>{
        setUpvote(false)
    }, [b])

    function handleUpvote() {
        setUpvote((prev) => !prev)
    }

    return (
        <div>
            <Card p={0}>
                <Group wrap="nowrap" align="flex-start">
                    <Avatar size="md"/>
                    <Stack gap={4}>
                        <Text>{b.title}</Text>
                        <Spoiler
                            maxHeight={16}
                            showLabel={<Text size="xs">Read more</Text>}
                            hideLabel={<Text size="xs">Hide</Text>}
                        >
                            <Text c="dimmed" size="sm">{b.description ?? "No Description"}</Text>
                        </Spoiler>
                    </Stack>
                    <Stack gap={0} align="center" className="ml-auto" mr={0}>
                        <span className="text-xs">UpVote</span>
                        <ActionIcon onClick={handleUpvote} variant="transparent" color="gray" size="md">
                            {upvoted ? <BiSolidUpvote size="md"/> : <BiUpvote size="md"/>}
                        </ActionIcon>
                        <span className="text-xs">{b.upvotes + (upvoted ? 1 : 0) }</span>
                    </Stack>
                </Group>
            </Card>
            <Divider my={4}></Divider>
        </div>
    )
}