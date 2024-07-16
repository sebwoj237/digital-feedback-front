'use client';
import { AppShell, Burger, Group, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { AiFillLayout } from "react-icons/ai";
import { BsFillBarChartLineFill, BsFillBriefcaseFill, BsFillGridFill, BsFillPersonFill } from "react-icons/bs";

export default function DashboardLayout({
    children
  }: Readonly<{
    children: React.ReactNode
  }>) {
    const [opened, { toggle }] = useDisclosure();

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
                <div>
                <span>Digital Feedback</span><span className="text-xs tracking-tighter align-bottom"> App</span>
                </div>
            </Group>
        </AppShell.Header>

        <AppShell.Navbar p="md">
            <Link href={"./home"}>
                <NavLink 
                    label="Dashboard"
                    leftSection={<AiFillLayout  />}
                ></NavLink>
            </Link>
            <Link href={"./projects"}>
                <NavLink 
                    label="Projects"
                    leftSection={<BsFillGridFill />}
                ></NavLink>
            </Link>
            <Link href={"./organization"}>
                <NavLink 
                    label="Organization"
                    leftSection={<BsFillBriefcaseFill />}
                ></NavLink>
            </Link>
            <Link href={"./account"}>
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
            </Link>
        </AppShell.Navbar>

        <AppShell.Main>
            {children}
        </AppShell.Main>
    </AppShell>
  );
}