'use client';
import { useState, useEffect  } from 'react';
import { Drawer, ActionIcon, AppShell, Divider, Burger, Group, NavLink, Switch, useMantineColorScheme, Space, Center } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AiFillLayout } from "react-icons/ai";
import { BsFillBarChartLineFill, BsFillBriefcaseFill, BsFillGridFill, BsFillPersonFill } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";
import { IoMdNotifications } from "react-icons/io";
import { Logo } from '@/components/common/Logo';

export default function DashboardLayout({
    children
  }: Readonly<{
    children: React.ReactNode
  }>) {
    const [opened, { toggle }] = useDisclosure();
    const {colorScheme, toggleColorScheme} = useMantineColorScheme();

    const [openedNotifications, { toggle: toggleNotifications, close: closeNotifications }] = useDisclosure(false);
    const [isChecked, setIsChecked] = useState(false)
    useEffect(()=>{
        setIsChecked(colorScheme === 'dark')
    }, [colorScheme])

    return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
        <AppShell.Header>
            <Group h="100%" px="md">
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                <Logo />
                <div className='flex-1'></div>
                <ActionIcon onClick={toggleNotifications} variant="transparent" color="gray" size="lg" aria-label="Settings">
                    <IoMdNotifications size="lg"/>
                </ActionIcon>
            </Group>
        </AppShell.Header>

        <AppShell.Navbar p="md">
                <NavLink 
                    href="/dashboard"
                    label="Dashboard"
                    leftSection={<AiFillLayout  />}
                ></NavLink>
                <NavLink 
                    href={"/dashboard/projects"}
                    label="Projects"
                    leftSection={<BsFillGridFill />}
                ></NavLink>
                <NavLink 
                    label="Organization"
                    leftSection={<BsFillBriefcaseFill />}
                ></NavLink>
                <NavLink 
                    label="Account"
                    leftSection={<BsFillPersonFill />}
                >
                    <NavLink
                        label="Settings"
                    ></NavLink>
                    <NavLink
                        label="Sign Out"
                    ></NavLink>
                </NavLink>

                <div className='flex-1'></div>
                <Divider />
                <Space h="md"/>
                <Center>
                    <div>
                        <p className='text-xs text-center'>Theme</p>
                        <Switch
                            size="md" 
                            color="dark.4"
                            onLabel={<MdOutlineWbSunny className='text-base'/>} 
                            offLabel={<LuMoonStar className='text-base'/>}
                            onClick={toggleColorScheme}
                            checked={isChecked} 
                        />
                    </div>
                </Center>
                <Space h="md"/>
                <p className='text-xs text-center'>
                    About Us &bull; Copyright 2024
                </p>
        </AppShell.Navbar>

        <AppShell.Main>
            {children}
        </AppShell.Main>
        <Drawer opened={openedNotifications} onClose={closeNotifications} title={<Group gap={4}><IoMdNotifications size="2rem"/><span>Notifications</span></Group>} position='right'>
            {/* Drawer content */}
        </Drawer>
    </AppShell>
  );
}