import { Stack } from '@twilio-paste/stack';
import { MenuItemContaier } from '../containers/MenuItemContainer';

export const MenuItems = ({ items }) => {
  return (
    <Stack orientation="vertical" spacing="space60">
      {items.map((item) => (
        <MenuItemContaier {...item} key={item.uuid} />
      ))}
    </Stack>
  );
};
