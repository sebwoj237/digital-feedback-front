"use client"
import { Flex, Overlay, Container, Card, BackgroundImage, Text, Group, Button, Divider, Spoiler, Input, TextInput, Textarea, FileButton, Space } from "@mantine/core"
import { IoMdPhotos, IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";

export default function NewProjectPage() {
    const [ isSubmit, setIsSubmit ] = useState(false)
    const [image, setImage] = useState<string | null>(null);

    const handleImageChange = (file: File | null) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = (e) => {
                if (e.target) {
                    setImage(e.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <Container size="xs" my="lg">
                <Button leftSection={<IoIosArrowBack  />} variant="outline" color="gray" mb="sm" component="a" href="./">
                        Back
                </Button>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Text mt="md" fw={500}>Create new project</Text>
                    <Card withBorder
                        radius="lg"
                        my="md"
                        style={{cursor: "pointer"}}
                        p={0}
                    >
                        <FileButton onChange={handleImageChange} accept="image/png,image/jpeg">
                            {(props) => 
                                <BackgroundImage 
                                    {...props}
                                    src={image ?? ""}
                                    h={128}
                                >
                                    {!image &&
                                    <Flex align="center" justify="center" direction="column" h="100%">
                                        <IoMdPhotos size={32}/>
                                        Add a photo
                                    </Flex>}
                                </BackgroundImage>}
                        </FileButton>
                    </Card>
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
                        mt="xs"
                    >
                        <Textarea 
                        required
                        placeholder="Description of the project"
                        />
                    </Input.Wrapper>
                    <Button onClick={()=>{setIsSubmit(true)}} loading={isSubmit}  fullWidth variant='filled' color="blue" mt="md" >
                        Create a new Project
                    </Button>
                </Card>
            </Container>
        </div>
    )
}