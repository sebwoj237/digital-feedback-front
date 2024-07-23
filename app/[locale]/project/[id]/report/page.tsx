'use client'
import { Flex, Overlay, Container, Card, BackgroundImage, Text, Group, Button, Divider, Spoiler, Input, TextInput, Textarea } from "@mantine/core"
import { exampleProjects, ProjectDefaults } from "@/types/ProjectType"
import { IoIosArrowBack } from "react-icons/io"
import { useState, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function ReportBugPage({params: {id}}: Readonly<{params: {id: number}}>) {
  const p = exampleProjects[exampleProjects.findIndex((p)=>p.id == id)]
  const urlParams = useSearchParams()
  const returnUrl = urlParams.get("returnto")

  const [isSent, setSentState] = useState(false)
  const overlay = useRef<HTMLDivElement>(null)

  return (
    <div>
      <Container size="xs" my="lg">
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <BackgroundImage
                className='flex'
                src={p.imageUrl ?? ProjectDefaults.imageUrl!}
                h={96}
                >
                    {/* <div className='flex'>
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
                    </div> */}
                </BackgroundImage>
            </Card.Section>

            <Text mt="md" fw={500}>{p.title}</Text>
            <Spoiler maxHeight={40} showLabel={<Text size='sm'>Read More</Text>} hideLabel={<Text size='sm'>Hide</Text>}>
                <Text size="sm" c="dimmed" className='text-justify'>
                    {p.description ?? ProjectDefaults.description}
                </Text>
            </Spoiler>
            <Divider></Divider>
            
            <Text mt="md" fw={500}>Report a Bug</Text>
            <Input.Wrapper
              label="Title"
            >
              <TextInput 
                required
                placeholder="Short informative title"
              />
            </Input.Wrapper>
            <Input.Wrapper
              label="Description"
            >
              <Textarea 
                required
                placeholder="In detail description of the issue"
              />
            </Input.Wrapper>
            <Group mt="md" wrap="nowrap">
              <Button fullWidth variant='filled' color="blue" 
                onClick={()=>{
                  setSentState(true)
                  setTimeout(()=>{
                    if (overlay.current) {
                      overlay.current.style.opacity = "1"
                    }
                  }, 10)
                }}
              >
                  Submit a Report
              </Button>
              <Button leftSection={<IoIosArrowBack  />} w={128} variant="outline" color="gray" component="a" href={returnUrl ?? "./"}>
                    Back
              </Button>
            </Group>
            {isSent && <Overlay ref={overlay} color="#0f0" backgroundOpacity={0.5} style={{opacity: 0, transition: "all 0.2s ease-in-out"}}>
            <Flex
              justify="center"
              align="center"
              h="100%"
              direction="column"
            >
              <IoIosCheckmarkCircleOutline size={128}/>
              <p>Thank You!</p>
            </Flex>
            </Overlay>}
        </Card>
      </Container>
    </div>
  )
}