
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

const mockdata = [
  {
    id:"1",
    icon: IconCode,
    title: 'NaraWebs website',
    description: 'This project is website of my webdesign comapny NaraWebs ',
  },
  {
    id:"2",
    icon: IconFingerprint,
    title: 'Random webiste',
    description: 'The shell’s rounded shape and the grooves on its.',
  },
  {
    id:"3",
    icon: IconNotification,
    title: 'Random website',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
  {
    id:"4",
    icon: IconChartPie3,
    title: 'Text Game',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    id:"5",
    icon: IconCoin,
    title: 'Fullstack trading portfolio',
    description: 'Profesional trading portfolio ',
  },
  {
    id:"6",
    icon: IconBook,
    title: 'Cards App',
    description: 'App for a company that is selling shells with product databasez',
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
  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color="#3b82f6" />
        </ThemeIcon>
        <div>
          <Text className='text-white ' size="sm" fw={500}>
            {item.title}
          </Text>
          <Text className='text-white' size="xs" >
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={120} >
      <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 4.5, type: 'spring' }} className={classes.header}>
        <Group justify="space-between" h="100%">
          <span className='font-bold text-white  text-2xl   max-2xl:text-xl  max-lg:text-base'>{t('Robin.dev')}</span>

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
            <Link to='skills-container' className={classes.link} spy={true} smooth={true} offset={-70} duration={500}>
              {t('Skills')}
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
          <button onClick={toggleLanguage} className='bg-gradient-to-r border-2 border-blue-500 rounded-md w-12 h-9 font-bold max-lg:w-7 max-lg:h-8 max-lg:text-xs    text-blue-500'>{languageButtonLabel}</button>
            <Link to='contact' spy={true} smooth={true} offset={-70} duration={500}>
              <button className='bg-gradient-to-r bg-blue-500 rounded-md p-2 h-9 font-bold  max-lg:h-8 max-lg:text-xs   text-white button-contact '>{t('Hire me')}</button>
            </Link>
          </Group>

          <Burger opened={drawerOpened} className='text-white fill-white' onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </motion.header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
       className="text-black"
        zIndex={1000000}
        
      >
        <ScrollArea className={classes.mobileSomePart}  h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Link to='home' onClick={toggleDrawer} className={classes.link} spy={true} smooth={true} offset={-70} duration={500}>
            {t('Home')}
          </Link>
          <Link to='about' onClick={toggleDrawer} className={classes.link} spy={true} smooth={true} offset={-70} duration={500}>
            {t('About')}
          </Link>
          <Link to='experience' className={classes.link} spy={true} smooth={true} offset={-70} duration={500}>
            {t('Experience')}
          </Link>
          <Link to='skills-container' onClick={toggleDrawer} className={classes.link} spy={true} smooth={true} offset={-70} duration={500}>
            {t('Skills')}
          </Link>

          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleDrawer} className={classes.linkos}>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  {t('Projects')}
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  className={classes.parosos}
                />
              </Center>
            </UnstyledButton>
          </Link>
          <Collapse in={linksOpened}>{links}</Collapse>

          <Link to='contact' className={classes.link} spy={true} smooth={true} offset={-70} duration={500}>
            {t('Contact')}
          </Link>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <button onClick={toggleLanguage} className='bg-gradient-to-r border-2 bg-blue-500 rounded-md w-12 h-9 font-bold max-lg:w-7 max-lg:h-8 max-lg:text-xs    text-blue-500'>{languageButtonLabel}</button>
            <button className='bg-gradient-to-r bg-blue-500 rounded-md w-32 h-9 font-bold text-white button-contact'>{t('Hire me')}</button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default HeaderMegaMenu;
