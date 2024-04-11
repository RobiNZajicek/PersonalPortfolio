import { Anchor, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';

import classes from './FooterCentered.module.css';

const links = [
  { link: '#', label: 'Home' },
  { link: '#', label: 'About me' },
  { link: '#', label: 'Experience' },
  { link: '#', label: 'Skills' },
  { link: '#', label: 'Projects' },
  { link: '#', label: 'Contact' },
];

export function FooterCentered() {
  const items = links.map((link) => (
    <Anchor
      c="white"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <div>Robin.dev</div>

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" className='hover-icon' variant="default" radius="xl">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18),color:'white' }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg"  className={classes.hoverIcon} variant="default" radius="xl">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18),color:'white' }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg"  className='hover-icon' variant="default" radius="xl">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18),color:'white' }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}