import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import {
  IconChevronDown,
  IconCode,
  IconFingerprint,
  IconNotification,
  IconChartPie3,
  IconCoin,
  IconBook,
} from '@tabler/icons-react';
import {
  HoverCard,
  Group,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMegaMenu.module.css';

export const projects = [
  {
    id: "1",
    name: "NaraWebs",
    description: "Business website for my web agency NaraWebs.",
    icon: IconCode,
    link: 'https://narawebs.com',
  },
  {
    id: "2",
    name: "Sheel App",
    description: "App that generates and prints personalized cards.",
    icon: IconBook,
    link: 'https://vercel.com/zajicekrobin3gmailcoms-projects/cards-j8kl',
  },
  {
    id: "3",
    name: "Striking",
    description: "Website for a sports club with registration system.",
    icon: IconChartPie3,
    link: 'https://praguestrikingacademy.cz/',
  },
  {
    id: "4",
    name: "Pension U Papoušků",
    description: "Clean and informative website for a guesthouse.",
    icon: IconFingerprint,
    link: 'https://www.upapousku.cz/',
  },
  {
    id: "5",
    name: "3D Website",
    description: "Interactive site for 3D printing – network project.",
    icon: IconNotification,
    link: '', // unfinished project
  },
  {
    id: "6",
    name: "Physiotherapy",
    description: "Website for a physiotherapy center with booking system.",
    icon: IconCoin,
    link: '', // unfinished project
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  const { t, i18n } = useTranslation();

  const toggleLanguage = (): void => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'cz' : 'en';
    i18n.changeLanguage(newLanguage);
  };
  const languageButtonLabel = i18n.language === 'en' ? 'CZ' : 'EN';

  const links = projects.map((item) => (
    <Anchor
      key={item.id}
      href={item.link !== '' ? item.link : '/coming-soon'}
      target="_blank"
      className={classes.subLink}
    >
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color="#3b82f6" />
        </ThemeIcon>
        <div>
          <Text className="text-white" size="sm" fw={500}>
            {item.name}
          </Text>
          <Text className="text-white" size="xs">
            {item.description}
          </Text>
        </div>
      </Group>
    </Anchor>
  ));

  return (
    <Box pb={80} pt={12} px={15}>
      <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 4.5, type: 'spring' }} className='container py-4 mx-8'>
        <Group justify="space-between" h="100%">
          <span className='font-bold text-white text-2xl max-2xl:text-xl max-lg:text-base'>{t('Robin.dev')}</span>

          <Group h="100%" gap={0} visibleFrom="sm">
            <Link to='home' className={classes.link} spy={true} smooth={true} offset={-70} duration={500}>
              {t('Home')}
            </Link>
            <Link to='about' className={classes.link} spy={true} smooth={true} offset={-70} duration={500}>
              {t('About')}
            </Link>
            <Link to='experience' className={classes.link} spy={true} smooth={true} offset={-70} duration={500}>
              {t('Experience')}
            </Link>
          

            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href=''>
                  <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        {t('Projects')}
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        className={classes.parosos}
                      />
                    </Center>
                  </Link>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden', background: '#3b82f6' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500} className='text-white font-bold '>{t('Projects')}</Text>
                  <Anchor href="#" className='bg-white p-2 rounded-md' fz="xs">
                    <Link to='projects' spy={true} smooth={true} offset={-70} duration={500}>{t('View all')}</Link>
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>

            <Link to='contact' className={classes.link} spy={true} smooth={true} offset={-70} duration={500}>
              {t('Contact')}
            </Link>
          </Group>

          <Group visibleFrom="sm">
            <button onClick={toggleLanguage} className='bg-gradient-to-r border-2 border-blue-500 rounded-md w-12 h-9 font-bold max-lg:w-7 max-lg:h-8 max-lg:text-xs text-blue-500'>{languageButtonLabel}</button>
            <Link to='contact' spy={true} smooth={true} offset={-70} duration={500}>
              <button className='bg-gradient-to-r bg-blue-500 rounded-md p-2 h-9 font-bold max-lg:h-8 max-lg:text-xs text-white button-contact '>{t('Hire me')}</button>
            </Link>
          </Group>
              
          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" color="white" />
        </Group>
      </motion.header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        zIndex={1000000}
        styles={{
          title: { color: 'black' },
          header: { backgroundColor: 'white' },
          content: { backgroundColor: 'white' }
        }}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Link to='home' onClick={toggleDrawer} className={classes.link} spy={true} smooth={true} offset={-70} duration={500}>
            <Text c="black">{t('Home')}</Text>
          </Link>
          <Link to='about' onClick={toggleDrawer} className={classes.link} spy={true} smooth={true} offset={-70} duration={500}>
            <Text c="black">{t('About')}</Text>
          </Link>
          <Link to='experience' onClick={toggleDrawer} className={classes.link} spy={true} smooth={true} offset={-70} duration={500}>
            <Text c="black">{t('Experience')}</Text>
          </Link>
          

          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Text c="black" component="span" mr={5}>
                {t('Projects')}
              </Text>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16), color: 'black' }}
                className={classes.parosos}
              />
            </Center>
          </UnstyledButton>
          
          <Collapse in={linksOpened}>
            <div style={{ color: 'black' }}>
              {projects.map((item) => (
                <Anchor
                  key={item.id}
                  href={item.link !== '' ? item.link : '/coming-soon'}
                  target="_blank"
                  c="black"
                >
                  <Group wrap="nowrap" align="flex-start" p={12}>
                    <ThemeIcon size={34} variant="default" radius="md">
                      <item.icon style={{ width: rem(22), height: rem(22) }} color="#3b82f6" />
                    </ThemeIcon>
                    <div>
                      <Text size="sm" fw={500} c="black">
                        {item.name}
                      </Text>
                      <Text size="xs" c="black">
                        {item.description}
                      </Text>
                    </div>
                  </Group>
                </Anchor>
              ))}
            </div>
          </Collapse>

          <Link to='contact' onClick={toggleDrawer} className={classes.link} spy={true} smooth={true} offset={-70} duration={500}>
            <Text c="black">{t('Contact')}</Text>
          </Link>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <button onClick={toggleLanguage} className='bg-gradient-to-r border-2 border-blue-500 rounded-md w-12 h-9 font-bold max-lg:w-7 max-lg:h-8 max-lg:text-xs text-blue-500'>{languageButtonLabel}</button>
            <button className='bg-gradient-to-r bg-blue-500 rounded-md w-32 h-9 font-bold text-white button-contact'>{t('Hire me')}</button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default HeaderMegaMenu;