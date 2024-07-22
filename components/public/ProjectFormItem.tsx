import { Button, CopyButton, Group, BackgroundImage, Badge, Stack, Rating, Card, NavLink, Text, Spoiler, ActionIcon, Divider, Avatar, Tooltip } from "@mantine/core"
import { Project, ProjectDefaults, ProjectStatus, statusColors, exampleProjects } from "@/types/ProjectType"
import { IoIosArrowBack  } from "react-icons/io";
import { FaArchive, FaShareAlt, FaBug, FaCog, FaLink } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { MdOutlinePublic } from "react-icons/md";
import { AiOutlineForm } from "react-icons/ai";
import { BiUpvote, BiSolidUpvote  } from "react-icons/bi";

import { Form } from "@/types/FormType"

export function ProjectFormItem(props: {
    form: Form
}) {
    const f = props.form

    return (
        <Card p={0}>
            <Group wrap="nowrap">
                <BackgroundImage
                    src={f.imageSrc ?? "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"}
                    h={48}
                    w={96}
                    radius="sm"
               >
                </BackgroundImage>
                <Stack gap={4} className="grow">
                    <Text>{f.title}</Text>
                    <Group>
                        <Rating value={f.score} fractions={2} readOnly />
                        <Text c="dimmed" size="xs">{f.ratings} ratings</Text>
                    </Group>
                </Stack>
                <Stack gap={4}>
                    <Tooltip
                        label="Open"
                        position="left"
                    >
                        <ActionIcon variant="default" color="gray" aria-label="Settings">
                            <AiOutlineForm />
                        </ActionIcon>
                    </Tooltip>
                    <Tooltip
                        label="Share"
                        position="left"
                    >
                        <ActionIcon variant="default" color="gray" aria-label="Settings">
                            <FaShareAlt />
                        </ActionIcon>
                        </Tooltip>
                </Stack>
            </Group>
            <Divider my={4}></Divider>
        </Card>
    )
}