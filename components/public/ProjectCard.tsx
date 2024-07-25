import { Spoiler, Indicator, Card, BackgroundImage, Text, Badge, Button, Group, SimpleGrid, ActionIcon, Center } from '@mantine/core';
import { FaCog, FaBug, FaArchive } from "react-icons/fa";
import { TiUser } from "react-icons/ti";
import { AiOutlineForm } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";
import { MdOutlinePublic } from "react-icons/md";
import { Project, ProjectStatus, statusColors, ProjectDefaults } from "@/types/ProjectType"

export function ProjectCard(props: {
    project: Project
}) {
    const p = {...props.project}
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <BackgroundImage
                className='flex'
                src={p.imageUrl ?? ProjectDefaults.imageUrl!}
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
                        <AiOutlineForm />{p.forms.length} Forms
                    </Group>
                </Text>
            </Group>

            <Spoiler maxHeight={40} showLabel={<Text size='sm'>Read More</Text>} hideLabel={<Text size='sm'>Hide</Text>}>
                <Text size="sm" c="dimmed" className='text-justify'>
                    {p.description ?? ProjectDefaults.description}
                </Text>
            </Spoiler>

            <Group gap="xs" mt="sm">
                <Indicator disabled color="blue" radius="xl" label={10} size={16}>
                    <Button variant='outline' color="blue" component='a' href={`/dashboard/projects/${p.id}`}>
                        View
                    </Button>
                </Indicator>
                <ActionIcon variant="outline" color="gray">
                    <FaCog />
                </ActionIcon>
                <Indicator color="red" radius="xl" label={p.bugs.length} size={16} disabled={p.bugs.length===0}>
                    <ActionIcon variant="outline" color="red">
                        <FaBug />
                    </ActionIcon>
                </Indicator>
            </Group>
        </Card>
    )
}